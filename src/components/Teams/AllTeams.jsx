import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { teamLogos } from "../../data";
import { national, american } from "../../assets";
import { fetchData } from "../../helpers/callsToAPI";

const Teams = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchteams = async () => {
      try {
        let data = await fetchData('mlb/teams');
        if (data.body) {
          data = Object.values(data.body);
      }
        setTeams(data);
      } catch (error) {
        console.error('Error al obtener equipos:', error);
      }
    };

    fetchteams();
  }, []);

  const americanLeagueTeams = teams.filter((team) => team.league.id === 103);
  const nationalLeagueTeams = teams.filter((team) => team.league.id === 104);

  return (
    <section
      id="resultados"
      className="container mx-auto py-16 mb-80 flex flex-col items-center justify-center"
    >
      <div className="max-w-4xl flex flex-col items-center justify-center pb-8 gap-10">
        <h1 className="font-syne font-bold text-4xl text-center text-white mb-2.5">
          Equipos
        </h1>
      </div>
      <div>
        <main className="grid grid-cols-1 ss:grid-cols-2 gap-24 md:gap-80">
          <article>
            <div className="flex flex-row items-center gap-4 mb-10">
              <img
                src={american}
                alt="Liga Americana"
                className="size-[60px]"
              />
              <h1 className="text-white font-raleway text-2xl">
                Liga Americana
              </h1>
            </div>
            <div key={americanLeagueTeams.id} className="flex flex-col gap-8">
              {americanLeagueTeams.map((team) => (
                <Link key={team.id} to={`/teams/${team.id}`}>
                  <div
                    key={team.id}
                    className="flex flex-row gap-4 items-center"
                  >
                    <img
                      src={teamLogos[team?.id]?.src}
                      alt={teamLogos[team?.id]?.alt}
                      className="h-[40px] md:h-[50px] object-contain"
                    />
                    <h2 className="font-raleway text-white text-xs md:text-[18px] text-center font-medium">
                      {team.name}
                    </h2>
                  </div>
                </Link>
              ))}
            </div>
          </article>
          <article>
            <div className="flex flex-row items-center gap-4 mb-10">
              <img
                src={national}
                alt="Liga Nmericana"
                className="size-[60px]"
              />
              <h1 className="text-white font-raleway text-2xl">
                Liga Nacional
              </h1>
            </div>
            <div key={nationalLeagueTeams.id} className="flex flex-col gap-8">
              {nationalLeagueTeams.map((team) => (
                <Link key={team.id} to={`/teams/${team.id}`}>
                  <div
                    key={team.id}
                    className="flex flex-row gap-4 items-center"
                  >
                    <img
                      src={teamLogos[team?.id]?.src}
                      alt={teamLogos[team?.id]?.alt}
                      className="h-[40px] md:h-[50px] object-contain"
                    />
                    <h2 className="font-raleway text-white text-xs md:text-[18px] text-center font-medium">
                      {team.name}
                    </h2>
                  </div>
                </Link>
              ))}
            </div>
          </article>
        </main>
      </div>
    </section>
  );
};

export default Teams;
