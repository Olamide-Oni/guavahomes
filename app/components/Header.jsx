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
            <nav className="flex justify-between items-center mx-auto h-11 px-4 md:px-8">
                <div className="flex">
                    <a href="/" className="w-16 h-5">
                
                    
                    <img src="/guavalogo.svg" alt="" className="w-16 h-5" />
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
                            <a href="/buy">Property Development</a>
                        </li>
                        <li key="rent">
                            <a href="/buy">Property Sales</a>
                        </li>
                        <li key="manage-property">
                          <a href="/manage">Property Management</a>
                        </li>
                        <li key="manage-property">
                          <a href="/manage">Real Estate Brokerage</a>
                        </li>
                        <li key="resources">
                        <a href="/resources">Land Sells</a>                      
                        </li>
                    </ul>
                </div>

                <div className="flex items-center gap-4">
                    <Link to="/contact" className="bg-slate-800 text-white px-4 py-2 border-solid border-2 hover:bg-[#87acec] rounded-full text-sm">
                        Contact Us
                    </Link>

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