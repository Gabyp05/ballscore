import { useEffect, useState } from 'react';
import { teamLogos } from '../../data';
import GameCard from './GameCard';
import { fetchData } from '../../helpers/callsToAPI';
import { format } from '@formkit/tempo';

const AllResults = () => {

  const [games, setGames] = useState([]);
  const [fechaSeleccionada, setFechaSeleccionada] = useState(new Date().toISOString().slice(0, 10));

  const handleFechaChange = (event) => {
    setFechaSeleccionada(event.target.value);
  };
  
  const handleConsultaClick = async () => {
    try {
      let data = await fetchData(`mlb/schedule?date=${fechaSeleccionada}`);
      if (data.body) {
        data = Object.values(data.body);
        const filteredData = data.slice(0, 7);

        setGames(
          filteredData.map((game) => {
            const formattedGameDate = format(
              new Date(game.gameDate),
              "MMM D, YYYY"
            );
            const formattedGameTime = format(
              new Date(game.gameDate),
              "h:mm a"
            );

            return {
              ...game,
              formattedGameDate,
              formattedGameTime,
            };
          })
        );
      }
    } catch (error) {
      console.error("Error al obtener equipos:", error);
    }
  };

  useEffect(() => {
    handleConsultaClick(); // Realiza la consulta a la API al cargar la página
  }, []); 



  return (
    <section className='container mx-auto py-16 p-2.5 mb-10 flex flex-col animate-fade-in-down'>
        <div className="max-w-4xl flex flex-col sm:flex-row gap-2 items-center pb-8">
          <input type="date" id="fechaConsulta" className='max-w-[200px] bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary focus:border-primary block w-full ps-6 px-8' value={fechaSeleccionada} onChange={handleFechaChange} />     
          <button onClick={handleConsultaClick} className='max-w-[270px] flex flex-row gap-x-5 bg-primary hover:bg-secondary text-white font-raleway tracking-widest font-bold text-lg uppercase rounded-lg px-8 py-2'>Consultar</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 md:gap-10 justify-center">
            {games.length > 0 ? (
            games.slice(0, -1).map((game) => (
              <GameCard
              key={game.gamePk}
              awayTeamName={game.teams?.away?.team?.name}
              homeTeamName={game.teams?.home?.team?.name}
              gameStatus={game.status.detailedState}
              gameDate={game.formattedGameDate}
              gameLive={game.status.abstractGameState}
              gameTime={game.formattedGameTime}
              teamLogoAway={teamLogos[game.teams?.away?.team?.id]?.src}
              teamLogoAwayAlt={teamLogos[game.teams?.away?.team?.id]?.alt}
              teamLogoHome={teamLogos[game.teams?.home?.team?.id]?.src}
              teamLogoHomeAlt={teamLogos[game.teams?.home?.team?.id]?.alt}
              awayTeamIsWinner={game.teams?.away?.isWinner === true}
              homeTeamIsWinner={game.teams?.home?.isWinner === true}
              teamAwayScore={game.teams?.away?.score}
              teamHomeScore={game.teams?.home?.score}
            />
            ))
            ) : (
            <h1 className='font-syne font-bold text-2xl text-white mb-2.5 pb-72 items-center'>
                Cargando..
            </h1>
            )}                     
        </div>
    </section>
  )
}

export default AllResults
