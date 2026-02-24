

const TechSkillsPreview = ({techSkillsToolsData}) => {
    const {technical, tools, cloud} = techSkillsToolsData

    return (
        <div className="h-full">
            <h2 className="text-base md:text-xl font-bold text-blue-950">Skill and Tools: </h2>
            <ul className="mt-2 md:mt-4 flex flex-col justify-start items-start flex-wrap ml-2 md:ml-5">
                {/* Technical Skills */}
                <h3 className="text-black text-sm md:text-base font-normal mt-2 md:mt-4 mb-1 md:mb-2">
                    <span className="text-blue-950 text-base font-semibold">Technical: </span>{" "}</h3>
                {technical.map(e => (
                    <li key={e} className="ml-6 md:ml-10 mb-1 list-disc text-black text-xs md:text-sm font-medium"><h3>{e}</h3></li>
                ))}

                {/* tools */}
                <h3 className="text-black text-xs md:text-sm font-normal mt-4 mb-2">
                    <span className="text-blue-950 text-sm md:text-base font-semibold mr-1 md:mr-2">Tools: </span>{" "}
                    {tools.join(",    ")}
                </h3>

                {/* Clouds */}
                <h3  className="text-black text-xs md:text-sm  font-normal">
                    <span className="text-blue-950 text-sm md:text-base font-semibold mr-1 md:mr-2">Cloud: </span>{" "}
                    {cloud.join(",    ")}
                </h3>     
                

            </ul>
        </div>
    )

}

export default TechSkillsPreview