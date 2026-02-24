

const Education = ({resumeData, setResumeData}) => {
    const {graduation} = resumeData.education 
    const {college, branch, location, cgpa, enrollmentDate, completionDate } = graduation // education

    // education important >>
    const handleEducationDetails = (e) => {
        const {name, value} = e.target 
        setResumeData((prev) => ({
            ...prev,
                education:{
                    ...prev.education,
                    graduation:{
                        ...prev.education.graduation,
                        [name]:value
                    }     
                    
                }
            
        }))
    }

        return (
            <div className="w-full flex flex-col justify-start items-start mt-10">
                <h1  className="text-base md:text-xl font-bold text-rose-900 tracking-wide mb-5">Education (Higher Studies):</h1> 
                {/* college */}
                <section className="w-full flex flex-col justify-start items-start mb-4">

                    <label htmlFor="college" className="text-sm md:text-lg font-bold text-emerald-800 mb-1">College Name
                        <span className="text-red-500 tracking-widest"> *</span>
                    </label>

                    <input id="college" type="text" minLength={3} maxLength={90} required placeholder="Enter Your College Name" 
                        value={college} name="college" onChange={handleEducationDetails}
                        className="h-10 md:h-12 w-full bg-emerald-100  text-sm md:text-base px-4 py-2 rounded-lg outline-0 border-2 border-emerald-50 text-emerald-700
                    hover:border-emerald-600 transition-all duration-300"/>
                </section>

                {/* Branch */}
                <section className="w-full flex flex-col justify-start items-start mb-4">
                    <label htmlFor="branch" className="text-sm md:text-lg  font-bold text-emerald-800 mb-1">Branch
                        <span className="text-red-500 tracking-widest"> *</span>
                    </label>

                    <input id="branch" type="text" minLength={3} maxLength={60} required placeholder="Ex: Computer Science" 
                     value={branch} name="branch" onChange={handleEducationDetails}
                    className="h-10 md:h-12 w-full bg-emerald-100  text-sm md:text-base px-4 py-2 rounded-lg outline-0 border-2 border-emerald-50 text-emerald-700
                    hover:border-emerald-600 transition-all duration-300"/>
                </section>

                {/* location */}
                <section className="w-full flex flex-col justify-start items-start mb-4">
                    <label htmlFor="location" className="text-sm md:text-lg font-bold text-emerald-800 mb-1">Location
                        <span className="text-red-500 tracking-widest"> *</span>
                    </label>
                    <input id="location" type="text" minLength={1} maxLength={90} required placeholder="Enter Your College Location ex: City or State" 
                     value={location} name="location" onChange={handleEducationDetails}
                    className="h-10 md:h-12 w-full bg-emerald-100  text-sm md:text-base px-4 py-2 rounded-lg outline-0 border-2 border-emerald-50 text-emerald-700
                    hover:border-emerald-600 transition-all duration-300"/>
                </section>

                {/* cgpa */}
                <section className="w-full flex flex-col justify-start items-start mb-4">
                    <label htmlFor="cgpa" className="text-sm md:text-lg font-bold text-emerald-800 mb-1">CGPA
                        <span className="text-red-500 tracking-widest"> *</span>
                    </label>
                    <input id="cgpa" type="number" step={0.01} min={0} max={10} required placeholder="Enter Your overall CGPA" 
                     value={cgpa} name="cgpa" onChange={handleEducationDetails}
                    className="h-10 md:h-12 w-full bg-emerald-100 text-sm md:text-base px-4 py-2 rounded-lg outline-0 border-2 border-emerald-50 text-emerald-700
                    hover:border-emerald-600 transition-all duration-300"/>
                </section>

                <div className="w-full flex flex-col md:flex-row  justify-center md:justify-between items-start md:items-center flex-wrap md:flex-nowrap">
                {/* enrollment Date */}
                <section className="w-5/6 md:w-1/2 flex flex-col justify-start items-start mb-4 mr-2">
                    <label htmlFor="enrollmentDate" className="text-sm md:text-lg font-bold text-emerald-800 mb-1">Enrollment Date
                        <span className="text-red-500 tracking-widest"> *</span>
                    </label>

                    <input id="enrollmentDate" type="date" required placeholder="Enter Your Joining Date" 
                    value={enrollmentDate} name="enrollmentDate" onChange={handleEducationDetails}
                    className="h-10 md:h-12 w-full bg-emerald-100 text-sm md:text-base px-4 py-2 rounded-lg outline-0 border-2 border-emerald-50 text-emerald-700
                    hover:border-emerald-600 transition-all duration-300"/>

                </section>

                {/* completion Date */}
                <section className="w-5/6 md:w-1/2 flex flex-col justify-start items-start mb-4 md:ml-2">

                    <label htmlFor="completionDate" className="text-sm md:text-lg font-bold text-emerald-800 mb-1">Completion Date
                        <span className="text-red-500 tracking-widest"> *</span>
                    </label>

                    <input id="completionDate" type="date" required placeholder="Enter Your Completion Date" 
                    value={completionDate} name="completionDate" onChange={handleEducationDetails}
                    className="h-10 md:h-12 w-full bg-emerald-100 text-sm md:text-base px-4 py-2 rounded-lg outline-0 border-2 border-emerald-50 text-emerald-700
                    hover:border-emerald-600 transition-all duration-300"/>
                    
                </section>
                </div>

            </div>   
        )
    }

    export default Education