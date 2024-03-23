import React from 'react'
import {construccion} from "../../assets"

const Teams = () => {
  return (
    <section id='resultados' className='container mx-auto py-16 mb-80 flex flex-col items-center justify-center'>
        <div className="max-w-4xl flex flex-col items-center justify-center pb-8 gap-10">
            <h1 className='font-syne font-bold text-4xl text-center text-white mb-2.5'>
                Sección en construcción
            </h1>
            <img src={construccion} alt="Sitio en construcción" className='px-4 rounded-[3rem]' />
        </div>  
    </section>
  )
}

export default Teams