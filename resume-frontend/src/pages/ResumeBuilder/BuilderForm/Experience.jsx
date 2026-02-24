import { useState } from "react"

const Experience = ({resumeData, setResumeData}) => {

    const {company, experienceType, role, startDate, endDate, description, isExperience} = resumeData.experience
    const [showExperience, setShowExperience] = useState(isExperience) // experinece 


const handleExperienceDetails = (e) => {
    const {name, value} = e.target
    setResumeData((prev) => ({
            ...prev,
            experience:{
                ...prev.experience,
                    [name]:value
                }
    }))
}

const onIsExperience = (e) => {
    const {checked} = e.target 
    setShowExperience(checked)
    
    setResumeData(prev => ({
        ...prev,
        experience:{
            ...prev.experience,
            isExperience:checked
        }
    }))
}

    return (
        
            <div className="w-full flex flex-col justify-start items-start mt-10">
                <h1 className="text-base md:text-xl  font-bold text-rose-900 tracking-wide mb-2 md:mb-4">Do you have any internship or work experience?
                     <br/> <span className="text-[10px] md:text-[12px] text-green-700 tracking-wide">(if you no ignore this checkbox)</span></h1>
                <section className="w-full flex flex-row justify-start items-center mb-4">
                    <label htmlFor="isExperience" className="text-sm md:text-lg font-bold text-emerald-800 mb-1">Experience</label>
                    <input type="checkbox" id="isExperience" className="h-4 w-4 ml-2 accent-rose-900" onChange={onIsExperience}/>
                </section>
                
                {showExperience&&
                <div className="w-full">
                {/* Company Name */}
                <section className="w-full flex flex-col justify-start items-start mb-4">
                    <label htmlFor="company" className="text-sm md:text-lg font-bold text-emerald-800 mb-1">Company Name</label>
                    <input type="text" id="company" minLength={2} maxLength={120} required placeholder="Enter Company Name" 
                     value={company} name="company" onChange={handleExperienceDetails}
                    className="h-10 md:h-12 w-full text-sm md:text-base bg-emerald-100 px-4 py-2 rounded-lg outline-0 border-2 border-emerald-50 text-emerald-700
                    hover:border-emerald-600 transition-all duration-300"/>
                </section>

                {/* Experinece Type */}
                <section className="w-full flex flex-col justify-start items-start mb-4">
                    <label htmlFor="experienceType" className="text-sm md:text-lg font-bold text-emerald-800 mb-1">Experience Type</label>
                    <input type="text" id="experienceType" minLength={3} maxLength={60} required placeholder="Ex: Internship/Full-Time" 
                     value={experienceType} name="experienceType" onChange={handleExperienceDetails}
                    className="h-10 md:h-12 w-full text-sm md:text-base bg-emerald-100 px-4 py-2 rounded-lg outline-0 border-2 border-emerald-50 text-emerald-700
                    hover:border-emerald-600 transition-all duration-300"/>
                </section>

                {/* Role */}
                <section className="w-full flex flex-col justify-start items-start mb-4">
                    <label htmlFor="role" className="text-sm md:text-lg font-bold text-emerald-800 mb-1">Role</label>
                    <input type="text" id="role" minLength={3} maxLength={60} required placeholder="Ex: Software Developer" 
                     value={role} name="role" onChange={handleExperienceDetails}
                    className="h-10 md:h-12 w-full text-sm md:text-base bg-emerald-100 px-4 py-2 rounded-lg outline-0 border-2 border-emerald-50 text-emerald-700
                    hover:border-emerald-600 transition-all duration-300"/>
                </section>


                <div className="w-full flex flex-col md:flex-row  justify-center md:justify-between items-start md:items-center flex-wrap md:flex-nowrap">
                {/* enrollment Date */}
                <section className="w-5/6 md:w-1/2 flex flex-col justify-start items-start mb-4 md:ml-2">
                    <label htmlFor="enroll" className="text-sm md:text-lg  font-bold text-emerald-800 mb-1">Enrollment Date</label>
                    <input type="date" id="enroll" required placeholder="Enter Your enrolled Date" 
                     value={startDate} name="startDate" onChange={handleExperienceDetails}
                    className="h-10 md:h-12 w-full text-sm md:text-base bg-emerald-100 px-4 py-2 rounded-lg outline-0 border-2 border-emerald-50 text-emerald-700
                    hover:border-emerald-600 transition-all duration-300"/>
                </section>

                {/* completion Date */}
                <section className="w-5/6 md:w-1/2 flex flex-col justify-start items-start mb-4 md:ml-2">
                    <label htmlFor="completion" className="text-sm md:text-lg  font-bold text-emerald-800 mb-1">Completion Date</label>
                    <input type="date" id="completion" required placeholder="Enter Your Completion Date" 
                     value={endDate} name="endDate" onChange={handleExperienceDetails}
                    className="h-10 md:h-12 w-full text-sm md:text-base bg-emerald-100 px-4 py-2 rounded-lg outline-0 border-2 border-emerald-50 text-emerald-700
                    hover:border-emerald-600 transition-all duration-300"/>
                </section>
                </div>

                {/* Description */}
                <section className="w-full flex flex-col justify-start items-start mb-4">
                    <label htmlFor="descrip" className="text-sm md:text-lg font-bold text-emerald-800 mb-1">Description</label>
                    <textarea type="textarea" id="descrip" value={description} name="description" rows={4} maxLength={400} required placeholder="Describe your work experience..." 
                    onChange={handleExperienceDetails}
                    className="resize-none  w-full text-sm md:text-base bg-emerald-100 px-4 py-2 rounded-lg outline-0 border-2 border-emerald-50 text-emerald-700
                    hover:border-emerald-600 transition-all duration-300"></textarea>
                </section>

                </div>
                }


            </div>

    )
}


export default Experience