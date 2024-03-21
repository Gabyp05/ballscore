import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom"
import { teamLogos } from '../data.js';

const Resultados = () => {
    const [games, setGames] = useState([]);
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];

    useEffect(() => {
        const fetchGameSchedule = async () => {
        const response = await fetch(`https://baseball4.p.rapidapi.com/v1/mlb/schedule?date=${formattedDate}`, {
            method: 'GET',
            headers: {
            'X-RapidAPI-Key': '425a2f8650msh2c93977c1d9775fp1d700djsnccb1675c3877',
            'X-RapidAPI-Host': 'baseball4.p.rapidapi.com'
            }
        });
        let data = await response.json();
        if (data.body) {
            data = Object.values(data.body);
            data.map(item => {
                let date = new Date(item.gameDate);
    
                let day = ("0" + date.getUTCDate()).slice(-2);
                let month = ("0" + (date.getUTCMonth() + 1)).slice(-2);
                let year = date.getUTCFullYear();
    
                let hours = ("0" + date.getUTCHours()).slice(-2);
                let minutes = ("0" + date.getUTCMinutes()).slice(-2);
    
                let formattedDate = `${day}-${month}-${year} - ${hours}:${minutes} hrs`;
    
                item.gameDate = formattedDate;
            });
            const filteredData = data.slice(0, 7);
            setGames(filteredData);
        }
        };
    
        fetchGameSchedule();
    }, []);
    

  return (
    <section id='resultados' className='container mx-auto py-16 mb-80 flex flex-col animate-fade-in-down'>
        <div className="max-w-4xl flex flex-col items-start justify-center pb-8">
            <h1 className='font-syne font-bold text-7xl text-white mb-2.5'>
                Últimos <span className='text-primary'>Resultados</span> 
            </h1>
        </div>
        <div className="grid grid-cols-2 gap-10 justify-center">
            {games.length > 0 ? (
            games.slice(0, -1).map((game, index) => (
            <div key={index} className="w-[570px] h-[320px] bg-white/10 backdrop-blur-sm border-2 border-white/20 overflow-hidden rounded-[32px] ">
                <div className="relative flex flex-col justify-center w-[570px] h-[320px] bg-transparent  p-5 rounded-[32px]">
                    <div className="flex flex-col items-center gap-2 mb-4">
                        <h1 className='text-white font-raleway font-bold'>{game.gameDate}</h1>
                    </div>
                    <div className="flex flex-row items-baseline justify-center gap-x-12">
                        <div className="flex flex-col items-center">
                            {/* <Link to={`/team/${game.teams?.away?.team?.id}`}> */}
                                <div className="flex flex-col gap-4 items-center">
                                    <img src={teamLogos[game.teams?.away?.team?.id]?.src} alt={teamLogos[game.teams?.away?.team?.id]?.alt} />
                                    <h2 className='font-raleway text-white text-[18px] text-center font-bold'>{game.teams?.away?.team?.name}</h2>
                                </div>
                            {/* </Link> */}
                            <span className='font-raleway text-white text-[50px] font-bold'> {game.teams?.away?.score} </span>
                        </div>    
                        <div className="vs">
                            <h1 className='font-syne font-bold text-7xl text-white drop-shadow-4xl'>VS</h1>
                        </div> 
                        <div className="flex flex-col items-center">
                            {/* <Link to={`/team/${game.teams?.home?.team?.id}`}> */}
                                <div className="flex flex-col gap-4 items-center">
                                    <img src={teamLogos[game.teams?.home?.team?.id]?.src} alt={teamLogos[game.teams?.home?.team?.id]?.alt} />
                                    <h2 className='font-raleway text-white text-[18px] text-center font-bold'> {game.teams?.home?.team?.name}</h2>
                                </div>
                            {/* </Link> */}
                            <span className='font-raleway text-white text-[50px] font-bold'> {game.teams?.home?.score} </span>
                        </div>   
                    </div>     
                </div>
            </div>
            ))
            ) : (
            <h1 className='font-syne font-bold text-2xl text-white mb-2.5'>
                Cargando...
            </h1>
            )}                     
        </div>
        <div className="flex justify-center pt-12">
            <Link to="/results">
                <button className="max-w-[270px] flex flex-row gap-x-5 bg-primary hover:bg-secondary text-white font-raleway tracking-widest font-bold text-xs uppercase rounded-full px-8 py-3">
                    Ver todos los resultados
                </button>
            </Link>
        </div>   
    </section>
  )
}

export default Resultados