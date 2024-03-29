import { TypeAnimation } from "react-type-animation";
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineMail, AiOutlineFileText } from "react-icons/ai";

import portrait from "../../assets/portrait.jpeg";

export default function Main() {
    return (
        <div id="main" className="m-auto py-16">
            <div className="flex justify-center items-center p-6">
            <img
                src={portrait}
                alt="Portrait Image"
                className="w-[300px] rounded-full shadow-lg bg-gray-100 shadow-gray-400 hover:scale-110 ease-in duration-200" />
            </div>
            <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center items-center">
                <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">John Almodovar</h1>
                <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
                    I'm a
                    <TypeAnimation
                     sequence={[
                        "Full-Stack Software Engineer.",
                        2000,
                        "Front-End Developer.",
                        2000,
                        "Tech Enthusiast.",
                        2000,
                     ]}
                     wrapper="div"
                     cursor={true}
                     repeat={Infinity}
                     style={{ fontSize: "1em", paddingLeft: "5px" }}
                    />
                </h2>
                {/* <h5 className="flex sm:text-2xl text-lg pt-4 text-gray-800">Contact:</h5> */}
                <div className="flex justify-between pt-4 max-w-[200px] w-full">
                    <a href="https://github.com/johnalmodovar" target="_blank">
                        <AiOutlineGithub className="hover:scale-110 ease-in duration-200" size={30}/>
                    </a>
                    <a href="https://www.linkedin.com/in/john-almodovar-8407a7251/" target="_blank">
                        <AiOutlineLinkedin className="hover:scale-110 ease-in duration-200" size={30}/>
                    </a>
                    <a href="mailto:john.ag.almodovar@gmail.com" target="_blank">
                        <AiOutlineMail className="hover:scale-110 ease-in duration-200" size={30}/>
                    </a>
                </div>
            </div>
        </div>
    );
}