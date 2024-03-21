import { Link, NavLink } from "react-router-dom"
import { logo } from '../assets';
import { footerLinks, socialMedia } from '../data';

const Footer = () => {
  return (
    <footer className="w-full h-auto md:h-[200px] bg-dark flex items-center">
        <div className="w-full max-w-screen-xl container mx-auto sm:pt-8 px-12 py-5">
            <div className="flex flex-col md:flex-row items-center justify-center sm:justify-between gap-4">
                <Link to="/">
                    <img src={logo} alt="Ball Score" className="w-[100px]" />
                </Link>
                <ul className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center text-center">
                    {footerLinks.map((link) => (
                        <li 
                        key={link.id}
                        className={`font-raleway font-medium cursor-pointer text-[16px] sm:mr-10
                        text-white hover:text-primary`}
                        >
                        <NavLink to={link.path} className={({ isActive }) =>
                            isActive ? 'text-primary font-bold' : 'text-white font-semibold'
                        }>
                            {link.name}
                        </NavLink>
                        </li>
                    ))}
                </ul>
                <div className="flex flex-row mt-0">
                    {socialMedia.map((social, index) => (
                    <img
                        key={social.id}
                        src={social.icon}
                        alt={social.id}
                        className={`w-[30px] h-[30px] object-contain cursor-pointer scale-on-hover ${
                        index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
                        }`}
                        onClick={() => window.open(social.link)}
                    />
                    ))}
                </div>
            </div>
            <hr className="my-6 border-whiteGray mx-auto w-full lg:my-8 mt-[35px]" />
            <div className="flex flex-col sm:flex-row justify-center sm:justify-between text-center gap-2">
                <span className="font-raleway text-sm text-white">
                    Ball Score © 2024 
                </span>
                <span className="font-raleway text-sm text-white">
                    Creado por Gabriela Patiño
                </span>
            </div>
        </div>
    </footer>
  )
}

export default Footer