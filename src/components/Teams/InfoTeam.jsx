import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RosterTable from './RosterTable';

const InfoTeam = () => {

    const [team, setTeam] = useState([]);
    const [roster, setRoster] = useState([]);
    const [loading, setLoading] = useState(true);
    const { teamId } = useParams();

    useEffect(() => {
        const fetchTeams = async () => {
          try {
            const response = await fetch(`https://baseball4.p.rapidapi.com/v1/mlb/teams?teamId=${teamId}`, {
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
          setTeam(data);
          } catch (error) {
            console.error(`Error al obtener la información del equipo: ${error.message}`);
          } finally {
            setLoading(false); 
          }
        };
    
        const fetchRoster = async () => {
          try {
            const response = await fetch(`https://baseball4.p.rapidapi.com/v1/mlb/teams-roster?teamIds=${teamId}`, {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '425a2f8650msh2c93977c1d9775fp1d700djsnccb1675c3877',
                    'X-RapidAPI-Host': 'baseball4.p.rapidapi.com'
                }
            });

            const data = await response.json();
            const roster = data.body.roster;
            setRoster(roster);
          } catch (error) {
            console.error(`Error al obtener la información del roster del equipo: ${error.message}`);
          } finally {
            setLoading(false); 
          }
        };
    
        fetchTeams();
        fetchRoster();
    }, []);

    const pitchers = roster.filter(player => player.position.abbreviation === 'P');
    const catchers = roster.filter(player => player.position.abbreviation === 'C');
    const infielders = roster.filter(player => player.position.abbreviation === '1B' 
                                            || player.position.abbreviation === '2B' 
                                            || player.position.abbreviation === 'SS' 
                                            || player.position.abbreviation === '3B');
    const outfielders = roster.filter(player => player.position.abbreviation === 'LF' 
                                            || player.position.abbreviation === 'CF' 
                                            || player.position.abbreviation === 'RF');

    
    if (loading) {
        return <h1 className='font-syne font-bold text-2xl text-white mb-2.5'>Cargando..</h1>; 
    }

  return (
    <>
    <section key="uniqueKey" className='container mx-auto py-8 mb-4 flex flex-col items-center justify-center'>
        
        {team.length > 0 && team.map((team, index) => (
        <>
            <h1 className='font-syne font-bold text-[30px] text-center md:text-start md:text-[56px] text-white mb-4'>
                {team.name}
            </h1>  
            <div key={index} className="flex flex-col gap-4 mb-4">
                <div className="flex flex-row gap-4 justify-start">
                    <p className='font-syne font-bold text-primary text-base md:text-xl tracking-widest'>Abreviación</p>
                    <span className='font-raleway text-white text-base md:text-xl tracking-widest'>{team.abbreviation}</span>
                </div>
                <div className="flex flex-row gap-4 justify-start">
                    <p className='font-syne font-bold text-primary text-base md:text-xl tracking-widest'>Estadio</p>
                    <span className='font-raleway text-white text-base md:text-xl tracking-widest'>{team.venue.name}</span>
                </div>
                <div className="flex flex-row gap-4 justify-start">
                    <p className='font-syne font-bold text-primary text-base md:text-xl tracking-widest'>Liga</p>
                    <span className='font-raleway text-white text-base md:text-xl tracking-widest'>{team.league.name}</span>
                </div>
                <div className="flex flex-row gap-4 justify-start">
                    <p className='font-syne font-bold text-primary text-base md:text-xl tracking-widest'>División</p>
                    <span className='font-raleway text-white text-base md:text-xl tracking-widest'>{team.division.name}</span>
                </div>
            </div>
        </>
        ))}   
    </section>
    <section className='container mx-auto mb-20'>
        <div className="relative overflow-x-auto">
            {roster.length > 0 && (
            <>
                <h1 className='font-syne font-bold text-[30px] text-center md:text-start md:text-[56px] text-white mb-4'>Roster Activo</h1>
                <div className="flex flex-col md:flex-row gap-8 px-4">
                    <div className='flex flex-col md:flex-row gap-8'>
                        <div className="flex flex-col">
                            <h1 className='font-syne font-bold text-[24px] text-center md:text-start md:text-[30px] text-white mb-4'>Pitchers</h1>
                            <RosterTable players={pitchers} />
                        </div>
                        <div className="flex flex-col">
                            <h1 className='font-syne font-bold text-[24px] text-center md:text-start md:text-[30px] text-white mb-4'>Catchers</h1>
                            <RosterTable players={catchers} /> 
                        </div>                
                    </div>
                    <div className='flex flex-col md:flex-row gap-8'>
                        <div className="flex flex-col">
                            <h1 className='font-syne font-bold text-[24px] text-center md:text-start md:text-[30px] text-white mb-4'>Infielders</h1>
                            <RosterTable players={infielders} />
                        </div>
                        <div className="flex flex-col">
                            <h1 className='font-syne font-bold text-[24px] text-center md:text-start md:text-[30px] text-white mb-4'>Outfielders</h1>
                            <RosterTable players={outfielders} /> 
                        </div>                
                    </div>
                </div>
            </>
            )}
        </div>
    </section>
    </>
  )
}

export default InfoTeam