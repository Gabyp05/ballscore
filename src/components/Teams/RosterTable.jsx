import React from 'react'

const RosterTable = ({ players }) => {
  return (
    <table className="w-full text-sm text-center font-raleway rtl:text-right text-white">
        <thead className="text-xs text-white uppercase bg-primary/75">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Nombre
                </th>
                <th scope="col" className="px-6 py-3">
                    Camiseta
                </th>
            </tr>
        </thead>
        <tbody>
            {players.map(player => (
                <tr key={player.id} className="bg-white/10 backdrop-blur-sm border-b border-gray-700 hover:bg-primary/55">
                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-white">
                        {player.person.fullName}
                    </th>
                    <td className="px-6 py-4 ">
                        {player.jerseyNumber}
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
  )
}

export default RosterTable