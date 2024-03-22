import React from 'react'
import { pelota, icon } from "../assets"

const Hero = () => {
  return (
    <section className='container mx-auto pt-0 sm:py-12 flex flex-col items-center animate-fade-in-down'>
      <div className="max-w-4xl flex flex-col items-center justify-center">
        <div className="flex flex-row items-center gap-x-12 mb-2.5">
          <img src={pelota} alt="Bola" width={160} height={160} className='hidden sm:flex size-40 object-cover' />
          <h1 className='font-syne font-bold text-[36px] sm:text-7xl text-white drop-shadow-4xl '><span className='text-primary'>Baseball</span> Score</h1>
        </div>
        <h1 className='font-syne font-bold text-3xl sm:text-[56px] leading-10 sm:leading-[70px] text-white text-center text-pretty '>Sigue los resultados en vivo de tus equipos favoritos</h1>

        <div className="pt-4 sm:pt-8">
          <a href="#" className="flex flex-row gap-x-5 bg-primary hover:bg-secondary text-white font-raleway tracking-widest font-bold text-xs uppercase rounded-full px-8 py-3">
            Ver resultados  <img src={icon} alt="Arrow" width={16} height={10} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero