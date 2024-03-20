import React from 'react'
import { rays, whiteSox } from "../assets"

const Resultados = () => {
  return (
    <section className='container mx-auto py-16 mb-80 flex flex-col animate-fade-in-down'>
        <div className="max-w-4xl flex flex-col items-start justify-center pb-8">
            <h1 className='font-syne font-bold text-7xl text-white mb-2.5'>
                Últimos <span className='text-primary'>Resultados</span> 
            </h1>
        </div>
        <div className="grid grid-cols-2 gap-10 justify-center">
            <div className="flex flex-col justify-center w-[570px] h-[320px] bg-white/30 p-5 rounded-[32px]">
                <div className="flex flex-col items-center gap-2 mb-4">
                    <h1 className='text-white font-raleway font-bold'>Fecha y hora </h1>
                </div>
                <div className="flex flex-row items-baseline justify-center gap-x-12">
                    <div className="flex flex-col items-center">
                        <div className="flex flex-col gap-4 items-center">
                            <img src={whiteSox} alt="Equipo visitante" />
                            <h2 className='font-raleway text-white text-[18px] font-bold'>Equipo Visitante</h2>
                        </div>
                        <span className='font-raleway text-white text-[50px] font-bold'> 10 </span>
                    </div>    
                    <div className="vs">
                        <h1 className='font-syne font-bold text-7xl text-white drop-shadow-4xl'>VS</h1>
                    </div> 
                    <div className="flex flex-col items-center">
                        <div className="flex flex-col gap-4 items-center">
                            <img src={rays} alt="Equipo visitante" />
                            <h2 className='font-raleway text-white text-[18px] font-bold'>Equipo Local</h2>
                        </div>
                        <span className='font-raleway text-white text-[50px] font-bold'> 4 </span>
                    </div>   
                </div>     
            </div>
            <div className="flex flex-col justify-center w-[570px] h-[320px] bg-white/30 p-5 rounded-[32px]">
                <div className="flex flex-col items-center gap-2 mb-4">
                    <h1 className='text-white font-raleway font-bold'>Fecha y hora </h1>
                </div>
                <div className="flex flex-row items-baseline justify-center gap-x-12">
                    <div className="flex flex-col items-center">
                        <div className="flex flex-col gap-4 items-center">
                            <img src={whiteSox} alt="Equipo visitante" />
                            <h2 className='font-raleway text-white text-[18px] font-bold'>Equipo Visitante</h2>
                        </div>
                        <span className='font-raleway text-white text-[50px] font-bold'> 10 </span>
                    </div>    
                    <div className="vs">
                        <h1 className='font-syne font-bold text-7xl text-white drop-shadow-4xl'>VS</h1>
                    </div> 
                    <div className="flex flex-col items-center">
                        <div className="flex flex-col gap-4 items-center">
                            <img src={rays} alt="Equipo visitante" />
                            <h2 className='font-raleway text-white text-[18px] font-bold'>Equipo Local</h2>
                        </div>
                        <span className='font-raleway text-white text-[50px] font-bold'> 4 </span>
                    </div>   
                </div>     
            </div>
            <div className="flex flex-col justify-center w-[570px] h-[320px] bg-white/30 p-5 rounded-[32px]">
                <div className="flex flex-col items-center gap-2 mb-4">
                    <h1 className='text-white font-raleway font-bold'>Fecha y hora </h1>
                </div>
                <div className="flex flex-row items-baseline justify-center gap-x-12">
                    <div className="flex flex-col items-center">
                        <div className="flex flex-col gap-4 items-center">
                            <img src={whiteSox} alt="Equipo visitante" />
                            <h2 className='font-raleway text-white text-[18px] font-bold'>Equipo Visitante</h2>
                        </div>
                        <span className='font-raleway text-white text-[50px] font-bold'> 10 </span>
                    </div>    
                    <div className="vs">
                        <h1 className='font-syne font-bold text-7xl text-white drop-shadow-4xl'>VS</h1>
                    </div> 
                    <div className="flex flex-col items-center">
                        <div className="flex flex-col gap-4 items-center">
                            <img src={rays} alt="Equipo visitante" />
                            <h2 className='font-raleway text-white text-[18px] font-bold'>Equipo Local</h2>
                        </div>
                        <span className='font-raleway text-white text-[50px] font-bold'> 4 </span>
                    </div>   
                </div>     
            </div>
            <div className="flex flex-col justify-center w-[570px] h-[320px] bg-white/30 p-5 rounded-[32px]">
                <div className="flex flex-col items-center gap-2 mb-4">
                    <h1 className='text-white font-raleway font-bold'>Fecha y hora </h1>
                </div>
                <div className="flex flex-row items-baseline justify-center gap-x-12">
                    <div className="flex flex-col items-center">
                        <div className="flex flex-col gap-4 items-center">
                            <img src={whiteSox} alt="Equipo visitante" />
                            <h2 className='font-raleway text-white text-[18px] font-bold'>Equipo Visitante</h2>
                        </div>
                        <span className='font-raleway text-white text-[50px] font-bold'> 10 </span>
                    </div>    
                    <div className="vs">
                        <h1 className='font-syne font-bold text-7xl text-white drop-shadow-4xl'>VS</h1>
                    </div> 
                    <div className="flex flex-col items-center">
                        <div className="flex flex-col gap-4 items-center">
                            <img src={rays} alt="Equipo visitante" />
                            <h2 className='font-raleway text-white text-[18px] font-bold'>Equipo Local</h2>
                        </div>
                        <span className='font-raleway text-white text-[50px] font-bold'> 4 </span>
                    </div>   
                </div>     
            </div>
        </div>
        
    </section>
  )
}

export default Resultados