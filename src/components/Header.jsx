import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { navLinks } from '../data';
import { logo, menu, close } from "../assets"

const Header = () => {

  const [toggle, setToggle] = useState(false);

  return (
    <header className="container mx-auto py-6 px-2 sm:px-5 lg:px-0 flex items-center justify-between z-50">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Logo BallScore" />
          </Link>
        </div>
        <nav className="hidden ss:flex font-raleway uppercase font-bold leading-3 text-sm text-white">
            <ul className="flex flex-row gap-x-11 tracking-widest">
              {navLinks.map((nav) => (
                  <li 
                  key={nav.id}
                  className={`font-raleway font-medium cursor-pointer text-[16px] text-white hover:text-primary`}
                  >
                  <NavLink to={nav.path} 
                  onClick={() => setToggle(false)} 
                  className={({ isActive }) =>
                      isActive ? 'text-primary font-bold' : 'text-white font-semibold'
                  }>
                      {nav.name}
                  </NavLink>
                  </li>
              ))}
            </ul>
        </nav>
        <div className="ss:hidden">
          <img 
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle((prev) => !prev)}
          />
          <div className={`${toggle ? 'flex' : 'hidden'} font-raleway uppercase font-bold leading-3 text-sm p-12 bg-white/30 backdrop-blur-sm absolute top-16 right-0 my-2 w-full z-50 menu`}>
            <ul className="list-none flex flex-col justify-end items-center flex-1 gap-y-4 tracking-widest">
              {navLinks.map((nav) => (
                    <li 
                    key={nav.id}
                    className={`font-raleway font-medium cursor-pointer text-[16px] text-white hover:text-primary`}
                    >
                    <NavLink to={nav.path} 
                    onClick={() => setToggle(false)} 
                    className={({ isActive }) =>
                        isActive ? 'text-primary font-bold' : 'text-white font-semibold'
                    }>
                        {nav.name}
                    </NavLink>
                    </li>
                ))}
            </ul>  
          </div>
        </div>
    </header>
  )
}

export default Header