import ProjectCard from "./ProjectCard";

import joblyImg from "../../assets/projects/jobly.png";
import sharebnbImg from "../../assets/projects/sharebnb.png";

export default function ProjectsList() {
    return (
        <div id="projects" className="max-w-[1040px] m-auto px-4 py-16">
            <h1 className="text-4xl font-bold text-center text-[#001b5e] mb-4">Projects</h1>
            <div className="grid sm:grid-cols-2 gap-12 relative pt-4 md:pl-16 xl:pl-0 2xl:pl-0">
                <ProjectCard img={joblyImg} title="Jobly" />
                <ProjectCard img={sharebnbImg} title="ShareBnB" />
            </div>
        </div>
    )
}