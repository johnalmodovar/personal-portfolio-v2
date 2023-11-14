import ExperienceCard from "./ExperienceCard";

const jobs = require("./experience.json");

export default function ExperienceList() {
    return (
        <div id="experience" className="max-w-[1040px] m-auto md:pl-20 py-16">
            <h1 className="text-4xl font-bold text-center text-[#001b5e]">Experience</h1>
            {jobs.experience.map( (item) => (
                <ExperienceCard
                    key={item.title}
                    year={item.year}
                    title={item.title}
                    length={item.length}
                    details={item.details} />
            ))}
        </div>
    );
}