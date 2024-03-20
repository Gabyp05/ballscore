import { useState } from "react"
import { logo, menu, close } from "../assets"

const Header = () => {

  const [toggle, setToggle] = useState(false);

  return (
    <header className="container mx-auto py-6 px-2 sm:px-0 flex items-center justify-between z-50">
        <div className="logo">
            <img src={logo} alt="Logo BallScore" />
        </div>
        <nav className="hidden ss:flex font-raleway uppercase font-bold leading-3 text-sm text-white">
            <ul className="flex flex-row gap-x-11 tracking-widest">
                <li className="hover:text-primary"><a href="#home">Home</a></li>
                <li className="hover:text-primary"><a href="#resultados">Resultados</a></li>
                <li className="hover:text-primary"><a href="#equipos">Equipos</a></li>
            </ul>
        </nav>
        <div className="ss:hidden">
          <img 
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle((prev) => !prev)}
          />
          <div className={`${toggle ? 'flex' : 'hidden'} font-raleway uppercase font-bold leading-3 text-sm p-4 bg-gradient-to-t from-[#FDD995] via-[#FAAF6A] to-[#F8853E] absolute top-14 right-0 mx-4 my-2 min-w-[140px]  rounded-xl menu z-50`}>
            <ul className="list-none flex flex-col justify-end items-center flex-1 gap-y-4 tracking-widest">
              <li className="hover:text-white"><a href="#home">Home</a></li>
              <li className="hover:text-white"><a href="#resultados">Resultados</a></li>
              <li className="hover:text-white"><a href="#equipos">Equipos</a></li>
            </ul>
          </div>
        </div>
    </header>
  )
}

export default Header