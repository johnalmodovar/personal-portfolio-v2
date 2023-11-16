

export default function ProjectCard({ title, img, demo, github }) {
    return (
        <div className="relative flex items-center justify-center h-auto w-auto shadow-lg shadow-gray-400 rounded-xl group">
            <img src={img} alt={title} className="rounded-xl group-hover:opacity-10" />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <h3 className="text-3xl md:text-2xl font-bold text-[#001b5e] tracking-wider text-center mb-8">{title}</h3>
                <div className="flex justify-between">
                    <div className="flex items-center rounded-lg h-10 m-4 bg-gray-100 shadow-md shadow-gray-400 hover:scale-110 ease-in duration-200">
                        <a href={demo} target="_blank">
                            <p className="text-center p-3">Demo</p>
                        </a>
                    </div>
                    <div className="flex items-center rounded-lg h-10 m-4 bg-gray-100 shadow-md shadow-gray-400 hover:scale-110 ease-in duration-200">
                        <a href={github} target="_blank">
                            <p className="text-center p-3">GitHub</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}