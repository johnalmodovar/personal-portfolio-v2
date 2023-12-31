import ExperienceCard from "./ExperienceCard";

import jobs from "./experience.json";

export default function ExperienceList() {
    return (
        <div id="experience" className="max-w-[1040px] m-auto px-4 py-16">
            <h1 className="text-4xl font-bold text-center text-[#001b5e] mb-4">Experience</h1>
            <div className="md:pl-16 xl:pl-0 2xl:pl-0">
                {jobs.experience.map( (item) => (
                    <ExperienceCard
                        key={item.title}
                        year={item.year}
                        title={item.title}
                        length={item.length}
                        details={item.details} />
                ))}
            </div>
        </div>
    );
}