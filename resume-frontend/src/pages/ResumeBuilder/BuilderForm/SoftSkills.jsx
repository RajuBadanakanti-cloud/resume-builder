import { useState } from "react"
import { XCircle } from "lucide-react";

const SoftSkills = ({resumeData, setResumeData}) => {
    const {softSkills} = resumeData
    const [soft, setSoft] = useState("") // soft skills >>

    // --------------------------------------------------------------------- 
const onDeleteSoftSkill = (delSoftSkill) => {
    const softSkillFilter = softSkills.filter((e) => e !== delSoftSkill)
    setResumeData((prev) => ({
        ...prev,
        softSkills:softSkillFilter
    }))
}

const onAddSoftSkills = () => {
    if(soft.trim().length < 1)return alert("Add your soft skill")  
    if(softSkills.length >= 10)return alert("You can add only top 10 softskills")  

    const softSkill  = soft.trim()
    const isExist = softSkills.some((each) => each.toLowerCase() === soft.toLowerCase())
    if(isExist)return softSkills

    setResumeData(prev => ({
        ...prev,
        softSkills:[...prev.softSkills, softSkill]
    }))

    setSoft("")
}   

const handleSoftSkills = (e) => {
        setSoft(e.target.value)
}   


    return (
            <div className="w-full flex flex-col justify-start items-start mt-10"> 
                {/* Soft Skills */}
                <h1 className="text-base md:text-xl font-bold text-rose-900 tracking-wide mb-4">Personal Skills:</h1>

                    <section className="w-full flex flex-col justify-start items-start mb-4">
                        <label htmlFor="softSkill" className="text-sm md:text-lg font-bold text-emerald-800 mb-4">Soft Skills
                                <span className="text-red-500 tracking-widest"> *</span>
                        </label>
                        <section className="w-full flex flex-row">
                        <input  type="text" id="softSkill" placeholder="Ex: I have Good Communications skills" 
                            value={soft} name="soft" onChange={handleSoftSkills} minLength={3} maxLength={60}
                            className="h-10 md:h-12 w-full bg-emerald-100 text-xs md:text-base px-4 py-2 mr-2 md:mr-4 rounded-lg outline-0 border-2 border-emerald-50 text-emerald-700
                            hover:border-emerald-600 transition-all duration-300"/>
                            <button type="button" onClick={onAddSoftSkills}
                            className="h-10 md:h-12 w-20 md:w-24 text-xs md:text-base font-bold bg-emerald-500 rounded-lg cursor-pointer
                            hover:bg-emerald-600 transition-all duration-300">
                                Add
                            </button>
                        </section>
                        <ul className="w-full flex flex-col justify-start items-start mt-2">
                        {softSkills.map((e) => (
                            <li key={e} className="w-full flex flex-row justify-start items-center mb-2">
                            <p className="text-[10px] md:text-[12px] ml-1 text-green-800">{e}</p>
                            <button type="button" className="ml-2 md:ml-4" onClick={() => onDeleteSoftSkill(e)}>
                                <XCircle size={12} className="text-red-500 hover:text-red-800" />
                            </button>
                            </li>                       
                        ))}
                        </ul>
                    </section>

                </div> 
        )
}


export default SoftSkills