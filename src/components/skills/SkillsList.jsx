import SkillCard from "./SkillCard";

import skills from "./skills.json";

export default function SkillsList() {
    return (
        <div id="skills" className="max-w-[1040px] m-auto px-4 py-16">
            <h1 className="text-4xl font-bold text-center text-[#001b5e] mb-4">Skills</h1>
            <div className="grid grid-cols-4 gap-4 relative pt-4 md:pl-8 xl:pl-0 2xl:pl-0">
                {skills.src.map( (src) => (
                    <SkillCard
                        key={src}
                        src={src.link}
                        name={src.name}
                    />
                ))}
            </div>
        </div>
    );
}