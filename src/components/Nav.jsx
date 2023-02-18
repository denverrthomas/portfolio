import React, {useState} from "react";

const Nav = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
 
    const handleToggle = () =>
    {
        setNavbarOpen(!navbarOpen);
    }

    return ( 
        <div>
            <button className={`p-2 select-none z-9 fixed right-1`} onClick={handleToggle}>
                {!navbarOpen && <img className="" src="ham-menu.svg" alt="ham-menu"/>}
            </button>
            <button className={`p-2 select-none z-10 fixed right-1`} onClick={handleToggle}>
                <div className={`w-10 h-10 bg-pink-600 rounded-full flex justify-center items-center transition duration-1000 ${navbarOpen ? "scale-1" : "scale-0"}`}><h2 className="text-lg text-white">X</h2></div>
            </button>

            <nav className={`${navbarOpen ? "flex absolute h-screen bg-white z-1 p-3 text-right top-0 right-0 w-80 z-9 transition duration-1000 transform translate-x-0" : "flex absolute h-screen bg-white z-1 p-3 text-right top-0 right-0 w-80 z-9 transition duration-1000 transform translate-x-80"}`}>
                <ul className="absolute flex flex-col gap-10 right-0 mt-36 mr-5 opacity-1 text-lg select-none mr-5">
                    <a href="#about" className="h-12 hover:font-bold" onClick={handleToggle}><li className="hover:font-bold">About Me</li></a>
                    <a href="#work" className="h-12 hover:font-bold" onClick={handleToggle}><li className="hover:font-bold">My Work</li></a>
                    <a href="#reviews" className="h-12 hover:font-bold" onClick={handleToggle}><li className="hover:font-bold">Reviews</li></a>
                    <a href="#contact" className="h-12 hover:font-bold" onClick={handleToggle}><li className="hover:font-bold">Contact Me</li></a>
                </ul>
            </nav>
        </div>
     );
}
 
export default Nav;