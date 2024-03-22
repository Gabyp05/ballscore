import React from 'react'
import { partners } from '../data';

const Partners = () => {
  return (
    <section className='container mx-auto py-16 flex flex-col gap-10 md:gap-0 items-center justify-between animate-fade-in-right'>
        <div className="flex flex-col items-center md:items-start gap-y-2 md:gap-y-7">
            <h1 className='font-syne font-bold text-[36px] text-center md:text-start md:text-[56px] text-white'><span className='text-primary'>Patrocinadores</span> Oficiales de la MLB</h1>  
        </div>
            <div
                x-data="{}"
                x-init="$nextTick(() => {
                    let ul = $refs.logos;
                    ul.insertAdjacentHTML('afterend', ul.outerHTML);
                    ul.nextSibling.setAttribute('aria-hidden', 'true');
                })"
                class="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
            >
                <ul x-ref="logos" class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                {partners.map((partners, index) => (
                <li key={index}>
                    <a
                    href={partners.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full h-full p-4 text-center gap-x-5"
                    >
                    <img src={partners.src} alt={partners.alt} className='w-[100px] md:w-auto' />
                    </a>
                </li>
                ))}
                </ul>                
            </div>    
           
    </section>
  )
}

export default Partners