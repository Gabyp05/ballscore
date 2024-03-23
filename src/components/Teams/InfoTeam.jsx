import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const InfoTeam = () => {

    const [team, setTeam] = useState([]);
    const { teamId } = useParams();

    useEffect(() => {
      const fetchTeams = async () => {
        try{
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
          console.log(data);
          setTeam(data);
        }
        catch (error) {
          console.error(`Error al obtener la información del equipo: ${error.message}`);
        };
      }
  
      fetchTeams();
    }, []);

  return (
    <section id='resultados' className='container mx-auto py-16 mb-80 flex flex-col items-center justify-center'>
        {team.map((team) => ( 
        <div className="flex flex-col gap-4">
            <h1 className='text-white text-7xl'>{team.name}</h1>
            <p>Abreviación: {team.abbreviation}</p>
            <p>Estadio: {team.venue.name} </p>
            <p>Liga: {team.league.name}</p>
            <p>División: {team.division.name}</p>
        </div>
        ))}

        <div className="table">
            <h1 className='text-white font-syne text-xl'>Roster</h1>

            <table>
                <thead></thead>
                <tbody></tbody>
            </table>
        </div>
    </section>
  )
}

export default InfoTeam