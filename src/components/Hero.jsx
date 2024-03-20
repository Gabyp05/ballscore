import React from 'react'
import { pelota } from "../assets"

const Hero = () => {
  return (
    <section className='container mx-auto py-12 flex flex-col items-center'>
      <div className="max-w-4xl flex flex-col items-center justify-center">
        <div className="flex flex-row items-center gap-x-12 mb-2.5">
          <img src={pelota} alt="Bola" width={160} height={160} className='size-40 object-cover' />
          <h1 className='font-syne font-bold text-7xl text-white drop-shadow-4xl'><span className='text-primary'>Baseball</span> Score</h1>
        </div>
        <h1 className='font-syne font-bold text-[56px] text-white text-center text-pretty'>Sigue los resultados en vivo de tus equipos favoritos</h1>
      </div>
    </section>
  )
}

export default Hero