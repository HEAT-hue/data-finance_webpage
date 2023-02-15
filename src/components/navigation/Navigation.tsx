// jshint esversion:6
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function Navigation() {
    const [nav, setNav] = useState<boolean>(false);

    function handleNav() {
        setNav(!nav);
    }

    return (
        <>
            <nav className="h-24 px-4 max-w-[1240px] mx-auto flex flex-row justify-between items-center text-white">
                <h1 className="w-full text-3xl text-[#00df9a] font-bold">DATA.</h1>

                {/* Desktop nav */}
                <ul className="hidden md:flex">
                    <li className="p-4"><a href="#">Home</a></li>
                    <li className="p-4"><a href="#">Company</a></li>
                    <li className="p-4"><a href="#">Resources</a></li>
                    <li className="p-4"><a href="#">About</a></li>
                    <li className="p-4"><a href="#">Contact</a></li>
                </ul>

                {/* Mobile open or close menu */}
                <div className="block md:hidden cursor-pointer" onClick={handleNav} >
                    {nav ? (<AiOutlineClose size={20} />) : (<AiOutlineMenu size={20} />)}
                </div>

                {/* Mobile Nav menu */}
                <div className={nav ? "absolute left-0 top-0 w-[60%] h-screen border-r border-r-gray-900 bg-[#000300] pt-4 md:hidden ease-in duration-500" : "fixed left-[-100%]"}>
                    <h1 className="w-full text-3xl text-[#00df9a] font-bold p-4">DATA.</h1>
                    <ul className="uppercase">
                        <li className="p-4 border-b border-b-gray-600"><a href="#">Home</a></li>
                        <li className="p-4 border-b border-b-gray-600"><a href="#">Company</a></li>
                        <li className="p-4 border-b border-b-gray-600"><a href="#">Resources</a></li>
                        <li className="p-4 border-b border-b-gray-600"><a href="#">About</a></li>
                        <li className="p-4 "><a href="#">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export { Navigation }