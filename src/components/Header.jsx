import React from "react";
import Nav from "./Nav";
import Image from "next/image";

const Header = () => {
    return ( 
        <div className="p-3 bg-gradient-to-r flex justify-between fixed w-screen top-0 z-10">
            {/* <h2 className="select-none font-light opacity-100 text-white">D<span className="font-light">S</span></h2> */}
            <Image src='/pfp.jpg' alt='Picture of author' width={50} height={50} className=' border border-purple-500 border-2 rounded-full'/>
            <Nav/>
        </div>
     );
}
 
export default Header;