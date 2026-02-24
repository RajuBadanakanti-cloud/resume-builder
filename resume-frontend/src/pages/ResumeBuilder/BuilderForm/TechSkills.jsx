

const AVAILABLE_SKILLS = {
  technical: [
    // Frontend
    "HTML5",
    "CSS3",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Bootstrap",

    // Backend
    "Node.js",
    "Express.js",
    "Django",
    "Spring Boot",
    

    // Databases
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "SQL",
    "SQLite",

    // Programming Languages
    "Python",
    "Java",
    "C",
    "C#",

    // Data / Analytics
    "Power BI",
    "Excel",
    "MsWord",

    // AI / ML (entry-level friendly)
    "Machine Learning",
    "Artificial Intelligence",
    // Basic 
    "Basic Computer Skills"
  ],

  tools: [
    "Git",
    "GitHub",
    "VS Code",
    "Postman",
    "Docker",
    "MsOffice",
    "Jira",
    "Figma",
    "Chrome DevTools",
    "none"
  ],

  cloud: [
    "AWS",
    "Azure",
    "Google Cloud",
    "Firebase Hosting", 
    "Vercel",
    "Netlify",
    "none/no"
  ]
};


const TechSklls = ({setResumeData}) => {
// we are adding skills from AVAILABLE_SKILLS so we can't use resumeData as an arrgument

    // Skills important >>
const handleTechnicalSkills = (e) => {
    const {checked, value} = e.target
    setResumeData((prev) => ({
        ...prev,
        skills:{
            ...prev.skills,
            technical:checked ? 
            [...prev.skills.technical, value] : prev.skills.technical.filter((skill) => skill !== value)
        }

        })
    )
}
const handleTools = (e) => {
    const {checked, value} = e.target
    setResumeData((prev) => ({
        ...prev,
        skills:{
            ...prev.skills,
            tools:checked ? [...prev.skills.tools, value] : prev.skills.tools.filter((tool) => tool !== value)

        }
    }))
}
const handleCloudSkills = (e) => {
    const {value, checked} = e.target 
    setResumeData((prev) => ({
        ...prev,
        skills:{
            ...prev.skills,
            cloud:checked ? 
            [...prev.skills.cloud, value] : prev.skills.cloud.filter((c) => c !== value)
        }
    }))
}

    return (
            <div className="w-full flex flex-col justify-start items-start mt-10">
                <h1 className="text-base md:text-xl font-bold text-rose-900 tracking-wide mb-4">Skills (Select Your Skills):</h1>
                {/* Technical */}
                <h1 className="text-sm md:text-lg font-bold text-emerald-800 mb-4">Technical Skills
                        <span className="text-red-500 tracking-widest"> *</span>
                </h1>
                <section className="w-full flex flex-row justify-start items-center flex-wrap mr-4 md:mr-5 mb-4">
                     {AVAILABLE_SKILLS.technical.map(skill => (
                        <label htmlFor={skill} key={skill} className="text-xs md:text-md bg-green-100 px-2 py-1 text-green-800 rounded-md flex flex-row justify-center items-center mr-5 mb-5">

                        <input id={skill} type="checkbox" placeholder="Select Your Skills" 
                            value={skill} name={skill} onChange={handleTechnicalSkills}
                            className=" h=3 w-3 md:h-4 md:w-4 bg-emerald-100 rounded-lg outline-0 border-2 border-emerald-50 text-emerald-700
                            hover:border-emerald-600 transition-all duration-300 mr-1"/>
                        {skill}
                        </label>
                    ))}
                </section>

                {/* Tools */}
                <h1 className="text-sm md:text-lg  font-bold text-emerald-800 mb-4">Tools 
                        <span className="text-red-500 tracking-widest"> *</span>
                </h1>
                <section className="w-full flex flex-row justify-start items-center flex-wrap mr-5 mb-5">
                     {AVAILABLE_SKILLS.tools.map(skill => (
                        <label htmlFor={skill} key={skill} className="text-xs md:text-md bg-sky-100 px-2 py-1 text-green-800 rounded-md flex flex-row justify-center items-center mr-5 mb-5">

                        <input id={skill} type="checkbox" placeholder="Select Your Skills" 
                            value={skill} name={skill} onChange={handleTools}
                            className="h-3 w-3 md:h-4 md:w-4 bg-emerald-100 rounded-lg outline-0 border-2 border-emerald-50 text-emerald-700
                            hover:border-emerald-600 transition-all duration-300 mr-1"/>
                        {skill}
                        </label>
                    ))}
                </section>

                {/* Cloud */}
                <h1 className="text-sm md:text-lg font-bold text-emerald-800 mb-4">Cloud
                        <span className="text-red-500 tracking-widest"> *</span>
                </h1>
                <section  className="w-full flex flex-row justify-start items-center flex-wrap mr-5">
                     {AVAILABLE_SKILLS.cloud.map(skill => (
                        <label htmlFor={skill} key={skill} className="text-xs md:text-md bg-cyan-100 px-2 py-1 text-green-800 rounded-md flex flex-row justify-center items-center mr-5 mb-5">

                        <input id={skill} type="checkbox" placeholder="Select Your Skills" 
                            value={skill} name={skill} onChange={handleCloudSkills} 
                            className="h-3 w-3 md:h-4 md:w-4 bg-emerald-100 rounded-lg outline-0 border-2 border-emerald-50 text-emerald-700
                            hover:border-emerald-600 transition-all duration-300 mr-1"/>
                        {skill}
                        </label>
                    ))}
                </section>


            </div> 
    )
}



export default TechSklls