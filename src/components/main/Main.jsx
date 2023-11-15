import { TypeAnimation } from "react-type-animation";
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineMail } from "react-icons/ai";

export default function Main() {
    return (
        <div id="main" className="m-auto py-16">
            <div className="flex justify-center items-center p-6">
            <img
                src="src/assets/portrait.jpeg"
                alt="Portrait Image"
                className="w-[300px] rounded-full shadow-lg bg-gray-100 shadow-gray-400 hover:scale-110 ease-in duration-200" />
            </div>
            <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center items-center">
                <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">
                    Hi, I'm John Almodovar.
                </h1>
                <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
                    I'm a
                    <TypeAnimation
                     sequence={[
                        "Software Engineer.",
                        2000,
                        "Developer.",
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

                <div className="flex justify-between pt-6 max-w-[200px] w-full">
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