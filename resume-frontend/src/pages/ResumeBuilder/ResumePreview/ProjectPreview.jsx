

const ProjectPreview = ({projectData}) => {
    const {title, link, techStack, explanation} = projectData
    console.log(projectData)
    return (
        <div className="w-full">
            <h2 className="text-base md:text-xl font-bold text-blue-950">Project:</h2>
            <section className="flex flex-col justify-center items-start ml-2 md:ml-5 mt-4">
            <h3 className="font-medium text-black text-sm md:text-[18px]">{title || "Project Title"}</h3>
            <a href={link} target="_blank" className="text-xs md:text-sm text-blue-500">{link}</a>
            <p className="text-[12px] md:text-[14px] text-black mt-3 mb-2">{explanation || "Write your Project Explanation..."}</p>
            <h3 className="font-normal text-black text-xs md:text-[14px]">
                <span className="font-semibold text-blue-950 ">Tech Stack:{" "}  </span>{techStack.join(", ") || "Project Involved Technologies"}</h3>
            </section>


        </div>
    )
}

export default ProjectPreview