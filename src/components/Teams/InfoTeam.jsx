import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const InfoTeam = () => {

    const [team, setTeam] = useState([]);
    const [roster, setRoster] = useState([]);
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

    useEffect(() => {
        const fetchRoster = async () => {
          try{
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
          }
          catch (error) {
            console.error(`Error al obtener la información del equipo: ${error.message}`);
          };
        }
    
        fetchRoster();
      }, []);

  return (
    <section id='resultados' className='container mx-auto py-16 mb-80 flex flex-col items-center justify-center'>
        {team.map((team, index) => ( 
        <div key={index} className="flex flex-col gap-4">
            <h1 className='text-white text-7xl'>{team.name}</h1>
            <p>Abreviación: {team.abbreviation}</p>
            <p>Estadio: {team.venue.name} </p>
            <p>Liga: {team.league.name}</p>
            <p>División: {team.division.name}</p>
        </div>
        ))}

<table className='text-white text-center'>
    <thead>
        <tr>
            <th>Nombre</th>
            <th>Camiseta</th>
            <th>Posición</th>
            <th>Estatus</th>
        </tr>
    </thead>
    <tbody>
        {roster.map((player, index) => (
            <tr key={index}>
                <td>{player.person.fullName}</td>
                <td>{player.jerseyNumber}</td>
                <td>{player.position.abbreviation}</td>
                <td>{player.status.description}</td>
            </tr>
        ))}
    </tbody>
</table>


    </section>
  )
}

export default InfoTeam