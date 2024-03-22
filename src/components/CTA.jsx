import React from 'react'
import { Link } from "react-router-dom"
import { jugador } from "../assets"

const CTA = () => {
  return (
    <section className='container mx-auto py-16 flex flex-col md:flex-row gap-10 md:gap-0 items-center justify-between animate-fade-in-right'>
        <div className="flex flex-col items-center md:items-start gap-y-2 md:gap-y-7">
            <h1 className='font-syne font-bold text-[36px] text-center md:text-start md:text-[56px] text-white'><span className='text-primary'>Conoce</span> a los jugadores</h1>

            <p className='max-w-2xl px-5 md:px-0 font-raliway font-bold text-paragraph text-sm md:text-base text-pretty leading-7 tracking-widest'>
            ¿Quieres saber más sobre los jugadores de tus equipos favoritos? Explora nuestras listas de equipos y descubre las estadísticas, logros y más de cada jugador. Conoce a los héroes detrás de cada juego y sigue sus carreras en tiempo real.<br/><br/>
            ¡Haz clic en '<span className='text-primary'>Ver Equipos</span>' para comenzar!
            </p>

            <div className='pt-4'>
                <Link to="/teams">
                    <button className="flex flex-row gap-x-5 bg-primary hover:bg-secondary text-white font-raleway tracking-widest font-bold text-xs uppercase rounded-full px-8 py-3 max-w-40">
                        Ver equipos
                    </button>
                </Link>
            </div>
        </div>
        <div className="right">
            <div className="absolute size-[250px] md:size-[350px] object-cover border-2 border-primary p-2 rounded-full animate-poped"></div>
            <img src={jugador} alt="Jugador" width={320} height={320} 
            className='size-[250px] md:size-[350px] object-cover  rounded-full' />
        </div> 
    </section>
  )
}

export default CTA