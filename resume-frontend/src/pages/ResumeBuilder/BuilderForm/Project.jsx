import { useState } from "react"
import { XCircle } from "lucide-react";


const Project = ({resumeData, setResumeData}) => {

    const {title, link, explanation, techStack, isHaveProject} = resumeData.project
    const [showProject, setShowProject] = useState(isHaveProject) // project >>
    const [projectTechs, setProjectTechs] = useState("")

// --------------------------------------------------------------------- 

const onDeleteProjectTech = (delProjSkill) => {
    const projTechFilter = techStack.filter((e) => e !== delProjSkill)
    setResumeData((prev) => ({
        ...prev,
        project:{
            ...prev.project,
             techStack:projTechFilter

        }
    }))
}

const onAddProjectTechs = () => {
    if(projectTechs.trim().length < 1)return alert("Add Project Tech Stack")
    const projectTechnologies = projectTechs.trim()
    if(techStack.length >= 15)return alert("You can add only top 15 technologies")

    const isExist = techStack.some((e) => e.toLowerCase() === projectTechs.toLocaleLowerCase())
    if(isExist)return techStack

    setResumeData((prev) => ({
        ...prev,
        project:{
            ...prev.project,
            techStack:[...prev.project.techStack, projectTechnologies]
        }
         
    }))
    
    setProjectTechs("")
}  

const getProjectTech = (e) => {
    setProjectTechs(e.target.value)
}

const handleProjectDetails = (e) => {
        const {name, value} = e.target 
        setResumeData((prev) => ({
            ...prev,
            project:{
                ...prev.project,
                [name]:value
            }
        }))
}  

const onIsHaveProject = (e) => {
    const {checked} = e.target
    setShowProject(checked)
    setResumeData(prev => ({
        ...prev,
        project:{
            ...prev.project,
            isHaveProject:checked
        }
    }))
}


    return (
            <div className="w-full flex flex-col justify-start items-start mt-10">
                <h1  className="text-base md:text-xl font-bold text-rose-900 tracking-wide mb-2 md:mb-4">Do you have done any Project?
                     <br/> <span className="text-[10px] md:text-[12px] text-green-700 tracking-wide">(if you no ignore this checkbox)</span></h1>
                <section className="w-full flex flex-row justify-start items-center mb-4">
                    <label htmlFor="project" className="text-sm md:text-lg font-bold text-emerald-800 mb-1">Project</label>
                    <input type="checkbox" id="project" className="h-4 w-4 ml-2 accent-rose-900" onChange={onIsHaveProject}/>
                </section>
                {/* _____________________ */}
                {showProject&&
                <div className="w-full">

                {/* Project Name */}
                <section className="w-full flex flex-col justify-start items-start mb-4">
                    <label htmlFor="projectTitle" className="text-sm md:text-lg font-bold text-emerald-800 mb-1">Project Name</label>
                    <input type="text" id="projectTitle" minLength={1} maxLength={60} required placeholder="Enter your Project title" 
                     value={title} name="title" onChange={handleProjectDetails}
                    className="h-10 md:h-12 w-full text-sm md:text-base bg-emerald-100 px-4 py-2 rounded-lg outline-0 border-2 border-emerald-50 text-emerald-700
                    hover:border-emerald-600 transition-all duration-300"/>
                </section>

                {/* Link */}
                <section className="w-full flex flex-col justify-start items-start mb-4">
                    <label htmlFor="projectLink" className="text-sm md:text-lg font-bold text-emerald-800 mb-1">Project Link</label>
                    <input type="url" id="projectLink" placeholder="Your Project deployed link" 
                     value={link} name="link" onChange={handleProjectDetails}
                    className="h-10 md:h-12 w-full text-sm md:text-base bg-emerald-100 px-4 py-2 rounded-lg outline-0 border-2 border-emerald-50 text-emerald-700
                    hover:border-emerald-600 transition-all duration-300"/>
                </section>

                {/* Explanation */}
                <section className="w-full flex flex-col justify-start items-start mb-4">
                    <label htmlFor="projectExplanation" className="text-sm md:text-lg font-bold text-emerald-800 mb-1">Explanation</label>
                    <textarea type="textarea" id="projectExplanation" value={explanation} name="explanation" rows={4} maxLength={600} required placeholder="Describe your work experience..." 
                    onChange={handleProjectDetails}
                    className="resize-none w-full text-sm md:text-base bg-emerald-100 px-4 py-2 rounded-lg outline-0 border-2 border-emerald-50 text-emerald-700
                    hover:border-emerald-600 transition-all duration-300"></textarea>
                </section>

                {/* TechStack */}        
                <section className="w-full flex flex-col justify-start items-start mt-5 mb-4">
                        <label htmlFor="projectTechStack" className="text-sm md:text-lg font-bold text-emerald-800 mb-1">Project Tech Stack</label>
                        <section className="w-full flex flex-row">
                        <input type="text" id="projectTechStack" placeholder="Ex:HTML, CSS, JavaScript, React, Node..." 
                            value={projectTechs} name="projectTechs" onChange={getProjectTech}
                            className="h-10 md:h-12 w-full text-sm md:text-base bg-emerald-100 px-4 py-2 mr-2 md:mr-4 rounded-lg outline-0 border-2 border-emerald-50 text-emerald-700
                            hover:border-emerald-600 transition-all duration-300"/>

                            <button type="button" onClick={onAddProjectTechs}
                            className="h-10 md:h-12 w-20 md:w-24 text-xs md:text-base font-bold bg-emerald-500 rounded-lg cursor-pointer
                            hover:bg-emerald-600 transition-all duration-300">
                                Add
                            </button>
                        </section>
                        <ul className="w-full flex flex-row justify-start items-start  flex-wrap mt-2 ">
                        {techStack.map((e) => (
                            <li key={e} className="w-fit flex flex-row justify-start items-center px-2 py-1 rounded-md bg-sky-100 mb-2 mr-2">
                            <p className="text-[12px] ml-1 text-green-800">{e}</p>
                            <button type="button" className="ml-4" onClick={() => onDeleteProjectTech(e)}>
                                <XCircle size={12} className="text-red-500 hover:text-red-800" />
                            </button>
                            </li>                       
                        ))}
                        </ul>
                    </section>


                </div>
                }


            </div>
    )
}



export default Project