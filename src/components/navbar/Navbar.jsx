import { useState } from "react";
import {
    AiOutlineMenu,
    AiOutlineHome,
    AiOutlineCode,
    AiOutlineUser,
    AiOutlineSolution } from "react-icons/ai";
import { TfiLightBulb } from "react-icons/tfi"

export default function Navbar() {
    const [toggleMobileNav, setToggleMobileNav] = useState(false);

    function handleClick(evt) {
        setToggleMobileNav(!toggleMobileNav);
    }

    return (
        <div>
            <AiOutlineMenu
                onClick={handleClick}
                className="absolute top-4 right-4 z-[99] md:hidden hover:scale-110" />

            {toggleMobileNav &&
                 (
                    <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20">
                        <a onClick={handleClick} href="#main" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 hover:scale-110 ease-in duration-200">
                            <AiOutlineHome size={20} />
                            <span className="pl-4 ">Home</span>
                        </a>
                        <a onClick={handleClick} href="#about" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 hover:scale-110 ease-in duration-200">
                            <AiOutlineUser size={20} />
                            <span className="pl-4 ">About</span>
                        </a>
                        <a onClick={handleClick} href="#skills" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 hover:scale-110 ease-in duration-200">
                            <TfiLightBulb size={20} />
                            <span className="pl-4 ">Skills</span>
                        </a>
                        <a onClick={handleClick} href="#projects" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 hover:scale-110 ease-in duration-200">
                            <AiOutlineCode size={20} />
                            <span className="pl-4 ">Projects</span>
                        </a>
                        <a onClick={handleClick} href="#experience" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 hover:scale-110 ease-in duration-200">
                            <AiOutlineSolution size={20} />
                            <span className="pl-4 ">Experience</span>
                        </a>
                    </div>
                )
            }

            <div className="md:block hidden fixed top-[25%] z-10">
                <div className="flex flex-col">
                    <a href="#main" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 hover:scale-110 ease-in duration-200">
                        <AiOutlineHome size={20} />
                    </a>
                    <a href="#about" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 hover:scale-110 ease-in duration-200">
                        <AiOutlineUser size={20} />
                    </a>
                    <a href="#skills" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 hover:scale-110 ease-in duration-200">
                        <TfiLightBulb size={20} />
                    </a>
                    <a href="#projects" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 hover:scale-110 ease-in duration-200">
                        <AiOutlineCode size={20} />
                    </a>
                    <a href="#experience" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 hover:scale-110 ease-in duration-200">
                        <AiOutlineSolution size={20} />
                    </a>
                </div>
            </div>
        </div>
    );
}