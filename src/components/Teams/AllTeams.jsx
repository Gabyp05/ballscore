import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom"
import { teamLogos } from '../../data';
import { national, american} from "../../assets"

const Teams = () => {

  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchTeams = async () => {
      try{
        const response = await fetch('https://baseball4.p.rapidapi.com/v1/mlb/teams', {
            method: 'GET',
            headers: {
            'X-RapidAPI-Key': '425a2f8650msh2c93977c1d9775fp1d700djsnccb1675c3877',
            'X-RapidAPI-Host': 'baseball4.p.rapidapi.com'
            }
        });
        let data = await response.json();
        if (data.body) {
            data = Object.values(data.body);
        }
        console.log(data);
        setTeams(data);
      }
      catch (error) {
        console.error(`Error al obtener los equipos: ${error.message}`);
      };
    }

    fetchTeams();
  }, []);

  const americanLeagueTeams = teams.filter(team => team.league.id === 103);
  const nationalLeagueTeams = teams.filter(team => team.league.id === 104);
  
  return (
    <section id='resultados' className='container mx-auto py-16 mb-80 flex flex-col items-center justify-center'>
        <div className="max-w-4xl flex flex-col items-center justify-center pb-8 gap-10">
            <h1 className='font-syne font-bold text-4xl text-center text-white mb-2.5'>
                Equipos
            </h1>
        </div> 
        <div>
        <main className="grid grid-cols-1 ss:grid-cols-2 gap-24 md:gap-80">
          <article>
            <div className="flex flex-row items-center gap-4 mb-10">
              <img src={american} alt="Liga Americana" className='size-[60px]' />
              <h1 className='text-white font-raleway text-2xl'>Liga Americana</h1>  
            </div>
              <div className="flex flex-col gap-8"> 
                {americanLeagueTeams.map((team, index) => ( 
                  <Link to={`/team/${team.teamName}`}>
                    <div key={index} className="flex flex-row gap-4 items-center">
                      <img src={teamLogos[team?.id]?.src} alt={teamLogos[team?.id]?.alt}  className='h-[40px] md:h-[50px] object-contain'/>
                      <h2 className='font-raleway text-white text-xs md:text-[18px] text-center font-medium'>{team.name}</h2>
                    </div>
                  </Link>    
                ))} 
              </div>  
          </article>
          <article>
          <div className="flex flex-row items-center gap-4 mb-10">
              <img src={national} alt="Liga Nmericana" className='size-[60px]' />
              <h1 className='text-white font-raleway text-2xl'>Liga Nacional</h1>  
            </div>
            <div className="flex flex-col gap-8">  
              {nationalLeagueTeams.map((team, index) => (   
                <Link to={`/team/${team.teamName}`}>
                  <div key={index} className="flex flex-row gap-4 items-center">
                    <img src={teamLogos[team?.id]?.src} alt={teamLogos[team?.id]?.alt}  className='h-[40px] md:h-[50px] object-contain'/>
                    <h2 className='font-raleway text-white text-xs md:text-[18px] text-center font-medium'>{team.name}</h2>
                  </div> 
                </Link> 
              ))}
            </div>  
          </article>
        </main>
    </div>

        
    </section>
  )
}

export default Teams