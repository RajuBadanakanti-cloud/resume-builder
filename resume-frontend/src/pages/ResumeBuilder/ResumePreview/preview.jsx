import { useState } from "react"
import PersonalPreview from "./PersonalPreview"
import EducationPreview from "./EducationPreview"
import TechSkillsPreview from "./TechSkillsPreview"
import ExperiencePreview from "./ExperiencePreview"
import ProjectPreview from "./ProjectPreview"
import SoftSkillsPreview from "./SoftSkillsPreview"

// import DownloadPDF from "../DownloadPDF" not in use because of server side pdf generation
import DownloadResumeButton from "../DownloadResumeButton"

const ResumePreview = ({resumeData}) => {
    const personalData = resumeData.personal
    const educationData = resumeData.education
    const techSkillsToolsData = resumeData.skills   

    const experienceData = resumeData.experience
    const isHaveExperience = resumeData.experience.isExperience

    const projectData = resumeData.project 
    const isHaveProject = resumeData.project.isHaveProject

    const softSkillsData = resumeData.softSkills
    const [isDownloadingPdf, setIsDownloadingPdf] = useState(false);

    return (
        <div className="w-full md:w-[50%]">
           {/* Top Preview */} 
        <section className="bg-rose-800 px-2 py-2 md:px-5 md:py-5 w-full flex flex-col justify-start items-center text-center rounded-md md:rounded-lg mt-10 md:mt-0">
            <h1 className="text-white text-base md:text-2xl font-bold">Resume Preview</h1>
            <p className="text-rose-100 text-xs md:text-base">Review your resume below before downloading</p>
        </section>


        <div id="resume-preview" 
        className={`pdf-safe page-break print:break-after-page rounded-md bg-white p-6 md:p-10 mt-4 md:mt-10 mb-5 ${isDownloadingPdf ? "opacity-40" : "opacity-100"}`}>
        
            <PersonalPreview personalData={personalData}/>
            <hr className="w-full text-black mt-4 mb-2"/>
            <section className="mb-5">
            <h2 className="text-black text-sm md:text-base font-medium mb-1">Objective: </h2>
            <p className="text-[10px] md:text-sm text-blue-950 ml-3 md:ml-5"> 
                To seek a growth-oriented position in a reputed organization which gives a scope to enhance my 
                knowledge and utilizing my skills towards success of organization.
            </p>
            </section>

            <EducationPreview educationData={educationData}/>
            <hr className="w-full text-black mt-4 mb-2"/>

            <TechSkillsPreview techSkillsToolsData={techSkillsToolsData}/>
            <hr className="w-full text-black mt-4 mb-2"/>  

            {isHaveExperience && <ExperiencePreview experienceData={experienceData}/>}
            {isHaveExperience && <hr className="w-full text-black mt-4 mb-2"/> }
            

            {isHaveProject && <ProjectPreview projectData={projectData}/>}
            {isHaveProject && <hr className="w-full text-black mt-4 mb-2"/> }
            
            <SoftSkillsPreview softSkillsData={softSkillsData}/>

            <hr className="w-full text-black mt-8 mb-2"/>

            <h2 className="text-base md:text-xl font-bold text-black mb-4">Declaration: </h2>
                <p className="text-blue-950 text-[10px] md:text-sm text-center ml-2 md:ml-5">
                I hear by declare that above mentioned information is true to my knowledge and I hear the response 
                for the above mention details. 
                </p>
        </div>

        {/* DOWNLOAD RESUME BUTTON */}
        <div className="w-md flex flex-row justify-center items-center">
            <DownloadResumeButton setIsDownloadingPdf={setIsDownloadingPdf}/>
        </div>

        </div>
    )
}

export default ResumePreview




/* 
      // FRONTEND PDF DOWNLOAD BUTTON WITH TOOLTIP  
        <div className="w-full relative"> 

        <button 
            onClick={DownloadPDF}

            onMouseEnter={() => setOnDownloadButtonTip(true)}
            onMouseLeave={() => setOnDownloadButtonTip(false)}

            className="h-12 bg-pink-400 text-white px-4 rounded-xl cursor-pointer ml-5
             hover:bg-pink-500 transition duration-300"
            > Download Resume
        </button>

        {onDownloadButtonTip && (
            <div className="absolute -top-8 left-0 bg-black px-4 py-1 rounded-lg">
                <p className="text-[10px] text-white">Frontend (htmlToPdf) Button</p>
            </div>
        )}
        
        </div>  */