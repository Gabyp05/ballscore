import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { teamLogos } from "../data.js";

const Resultados = () => {
  const [games, setGames] = useState([]);
  const today = new Date();
  const formattedDate = today.toISOString().split("T")[0];
  const resultadosAMostrar = window.innerWidth < 768 ? 4 : 6;

  useEffect(() => {
    const fetchGameSchedule = async () => {
      const URL = import.meta.env.VITE_URL_API;
      const VERSION = import.meta.env.VITE_API_VERSION;
      const KEY = import.meta.env.VITE_API_KEY;
      const HOST = import.meta.env.VITE_API_HOST;
      
      const response = await fetch(`${URL}/${VERSION}/mlb/schedule?date=${formattedDate}`,
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Key": KEY,
            "X-RapidAPI-Host": HOST,
          },
        }
      );
      let data = await response.json();
      if (data.body) {
        data = Object.values(data.body);
        data.map((item) => {
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
    <section
      id="resultados"
      className="container mx-auto py-12 md:py-16 flex flex-col animate-fade-in-down"
    >
      <div className="max-w-4xl flex flex-col md:flex-row gap-x-2.5 items-center md:items-start justify-center md:justify-start pb-8">
        <h1 className="font-syne font-bold text-[36px] text-7xl text-center md:text-start text-white mb-2.5">
          {" "}
          Últimos{" "}
        </h1>
        <span className="font-syne font-bold text-[36px] text-7xl mb-2.5 text-primary">
          Resultados
        </span>
      </div>
      <div className="grid md:grid-cols-2 gap-2.5 md:gap-10 justify-center">
        {games.length > 0 ? (
          games
            .slice(0, -1)
            .map((game) => (
              <div
                key={game.gamePk}
                className="w-[300px] h-[180px] md:w-[570px] md:h-[320px] bg-white/10 backdrop-blur-sm border-2 border-white/20 overflow-hidden rounded-2xl md:rounded-[32px]"
              >
                <div className="relative flex flex-col justify-center w-[300px] h-[180px] md:w-[570px] md:h-[320px] bg-transparent pd-2.5 md:p-5 rounded-2xl md:rounded-[32px]">
                  <div className="flex flex-col items-center gap-2 mb-4">
                    <h1 className="text-white text-sm sm:text-xl font-raleway font-bold">
                      {game.gameDate}
                    </h1>
                  </div>
                  <div className="flex flex-row items-baseline justify-center gap-x-4 md:gap-x-12">
                    <div className="flex flex-col items-center">
                      {/* <Link to={`/team/${game.teams?.away?.team?.id}`}>  */}
                      <div className="flex flex-col gap-4 items-center">
                        <img
                          src={teamLogos[game.teams?.away?.team?.id]?.src}
                          alt={teamLogos[game.teams?.away?.team?.id]?.alt}
                          className="h-[50px] sm:h-[90px] max-w-[100px] md:max-w-[150px] object-contain"
                        />
                        <h2 className="font-raleway text-white text-xs md:text-[18px] text-center font-bold leading-[25px]">
                          {game.teams?.away?.team?.name}
                        </h2>
                      </div>
                      {/* </Link>  */}
                      <span className="md:pt-4 font-raleway text-white text-2xl md:text-[50px] font-bold">
                        {" "}
                        {game.teams?.away?.score}{" "}
                      </span>
                    </div>
                    <div className="vs">
                      <h1 className="font-syne font-bold text-xl md:text-7xl text-white drop-shadow-4xl">
                        VS
                      </h1>
                    </div>
                    <div className="flex flex-col items-center">
                      {/* <Link to={`/team/${game.teams?.home?.team?.id}`}>  */}
                      <div className="flex flex-col gap-4 items-center">
                        <img
                          src={teamLogos[game.teams?.home?.team?.id]?.src}
                          alt={teamLogos[game.teams?.home?.team?.id]?.alt}
                          className="h-[50px] sm:h-[90px] max-w-[100px] md:max-w-[150px] object-contain"
                        />
                        <h2 className="font-raleway text-white text-xs md:text-[18px] text-center font-bold leading-[25px]">
                          {game.teams?.home?.team?.name}
                        </h2>
                      </div>
                      {/* </Link>  */}
                      <span className="md:pt-4 font-raleway text-white text-2xl md:text-[50px] font-bold">
                        {" "}
                        {game.teams?.home?.score}{" "}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
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

export default Resultados