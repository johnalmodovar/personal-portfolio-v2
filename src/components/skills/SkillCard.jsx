
export default function SkillCard({ src, name }) {
    return (
        <div className="flex flex-col justify-center relative py-4 items-center">
            <img src={src} className="w-[80px] hover:scale-110 ease-in duration-200" />
            <span className="my-2 text-base text-center font-normal text-stone-500">{name}</span>
        </div>
    );
}