import React, { useEffect, useState } from 'react';
import { teamLogos } from '../../data';

const AllResults = () => {

  const [games, setGames] = useState([]);
  const [fechaSeleccionada, setFechaSeleccionada] = useState(new Date().toISOString().slice(0, 10));

  const handleFechaChange = (event) => {
    setFechaSeleccionada(event.target.value);
  };
  
  const handleConsultaClick = async () => {
    try {
      const response = await fetch(`https://baseball4.p.rapidapi.com/v1/mlb/schedule?date=${fechaSeleccionada}`, {
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
          setGames(data);
      }

    } catch (error) {
      console.error('Error al realizar la consulta a la API:', error);
    }
  };

  useEffect(() => {
    handleConsultaClick(); // Realiza la consulta a la API al cargar la página
  }, []); 



  return (
    <section className='container mx-auto py-16 mb-10 flex flex-col animate-fade-in-down'>
        <div className="max-w-4xl flex flex-col sm:flex-row gap-2 items-center pb-8">
          <input type="date" id="fechaConsulta" className='max-w-[200px] bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary focus:border-primary block w-full ps-6 px-8' value={fechaSeleccionada} onChange={handleFechaChange} />     
          <button onClick={handleConsultaClick} className='max-w-[270px] flex flex-row gap-x-5 bg-primary hover:bg-secondary text-white font-raleway tracking-widest font-bold text-lg uppercase rounded-lg px-8 py-2'>Consultar</button>
        </div>
        <div className="grid md:grid-cols-2 gap-2.5 md:gap-10 justify-center">
            {games.length > 0 ? (
            games.slice(0, -1).map((game, index) => (
              <div key={index} className="w-[300px] h-[180px] md:w-[570px] md:h-[320px] bg-white/10 backdrop-blur-sm border-2 border-white/20 overflow-hidden rounded-2xl md:rounded-[32px]">
              <div className="relative flex flex-col justify-center w-[300px] h-[180px] md:w-[570px] md:h-[320px] bg-transparent pd-2.5 md:p-5 rounded-2xl md:rounded-[32px]">
                  <div className="flex flex-col items-center gap-2 mb-4">
                      <h1 className='text-white text-sm sm:text-xl font-raleway font-bold'>{game.gameDate}</h1>
                  </div>
                  <div className="flex flex-row items-baseline justify-center gap-x-4 md:gap-x-12">
                      <div className="flex flex-col items-center">
                      {/* <Link to={`/team/${game.teams?.away?.team?.id}`}>  */}
                          <div className="flex flex-col gap-4 items-center">
                              <img src={teamLogos[game.teams?.away?.team?.id]?.src} alt={teamLogos[game.teams?.away?.team?.id]?.alt}  className='h-[50px] sm:h-auto max-w-[100px] md:max-w-[150px] object-contain'/>
                              <h2 className='font-raleway text-white text-xs md:text-[18px] text-center font-bold'>{game.teams?.away?.team?.name}</h2>
                          </div>  
                      {/* </Link>  */}
                          <span className='md:pt-4 font-raleway text-white text-2xl md:text-[50px] font-bold'> {game.teams?.away?.score} </span>
                      </div>    
                      <div className="vs">
                          <h1 className='font-syne font-bold text-xl md:text-7xl text-white drop-shadow-4xl'>VS</h1>
                      </div> 
                      <div className="flex flex-col items-center">    
                          {/* <Link to={`/team/${game.teams?.home?.team?.id}`}>  */}
                          <div className="flex flex-col gap-4 items-center">
                              <img src={teamLogos[game.teams?.home?.team?.id]?.src} alt={teamLogos[game.teams?.home?.team?.id]?.alt}  className='h-[50px] sm:h-auto max-w-[100px] md:max-w-[150px] object-contain' />
                              <h2 className='font-raleway text-white text-xs md:text-[18px] text-center font-bold'>{game.teams?.home?.team?.name}</h2>
                          </div> 
                          {/* </Link>  */}            
                          <span className='md:pt-4 font-raleway text-white text-2xl md:text-[50px] font-bold'> {game.teams?.home?.score} </span>
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
    </section>
  )
}

export default AllResults