import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { teamLogos } from "../data.js";
import { fetchData } from "../helpers/callsToAPI.js";
import { format } from "@formkit/tempo";
import GameCard from "./Results/GameCard.jsx";

const Resultados = () => {
  const [games, setGames] = useState([]);
  const today = new Date();
  const formattedDate = today.toISOString().split("T")[0];
  const resultadosAMostrar = window.innerWidth < 768 ? 4 : 6;

  useEffect(() => {
    const fetchGameSchedule = async () => {
      try {
        let data = await fetchData(`mlb/schedule?date=${formattedDate}`);
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

    fetchGameSchedule();
  }, []);

  return (
    <section
      id="resultados"
      className="container mx-auto py-8 lg:py-16 flex flex-col animate-fade-in-down"
    >
      <div className="max-w-4xl flex flex-col sm:flex-row gap-x-2.5 items-center lg:items-start justify-center lg:justify-start pb-8">
        <h1 className="font-syne font-bold text-[36px] text-7xl text-center lg:text-start text-white mb-2.5">
          Últimos
        </h1>
        <span className="font-syne font-bold text-[36px] text-7xl mb-2.5 text-primary">
          Resultados
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 md:gap-5 justify-items-center px-2.5">
        {games.length > 0 ? (
          games
            .slice(0, -1)
            .map((game) => (
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
            .slice(0, resultadosAMostrar)
        ) : (
          <h1 className="font-syne font-bold text-2xl text-white mb-2.5">
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
  );
};

export default Resultados;
