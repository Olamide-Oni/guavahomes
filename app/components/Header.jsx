import { Link, NavLink } from "@remix-run/react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons";
import { useState } from "react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function onToggleMenu() {
        setIsMenuOpen(prevState => !prevState);
    }

    return (
        <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
            <nav className="flex justify-between items-center mx-auto h-16 px-4 md:px-8">
                <div className="flex">
                    <a href="/">
                    <img src="/guavalogo.png" alt="" className="w-16" />
                    </a>
                    
                </div>

                <div
                    className={`absolute md:static bg-white md:min-h-fit left-0 w-full md:w-auto 
                    ${isMenuOpen ? 'top-16' : 'top-[-100vh]'} 
                    transition-all duration-300 ease-in-out
                    shadow-md md:shadow-none
                    z-40
                    flex items-center px-5`}
                >
                    <ul className="flex flex-col md:flex-row md:items-center gap-8 md:gap-[4vw] py-8 md:py-0 w-full">
                        <li key="buy">
                            <a href="/buy">Buy</a>
                        </li>
                        <li key="rent">
                            <a href="/rent">Rent</a>
                        </li>
                        <li key="manage-property">
                          <a href="/manage">Manage</a>
                        </li>
                        <li key="resources">
                        <a href="/resources">Resources</a>                      
                        </li>
                    </ul>
                </div>

                <div className="flex items-center gap-4">
                    <button className="bg-slate-800 text-white px-4 py-2 border-solid border-2 hover:bg-[#87acec] rounded-full text-sm">
                        Contact Us
                    </button>

                    <div className="md:hidden">
                        <IconContext.Provider value={{ size: "24", color: "black" }}>
                            <FaBars onClick={onToggleMenu} className="cursor-pointer" />
                        </IconContext.Provider>
                    </div>
                </div>
            </nav>
        </header>
    );
}