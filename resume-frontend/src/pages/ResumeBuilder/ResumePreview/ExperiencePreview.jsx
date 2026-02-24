

const ExperiencePreview = ({experienceData}) => {

    const {company, experienceType, role, description , startDate, endDate} = experienceData

    return (
        <div className="w-full">
            <h2 className="text-base md:text-xl font-bold text-blue-950">Experience:</h2>
            <section className="flex flex-row justify-between text-black items-start mt-4 ml-2 md:ml-5 flex-wrap">
                <h3 className="w-full md:w-[70%] text-black text-sm md:text-[18px] font-medium mr-2">{company || "Company Name"}  </h3>

                <h3 className="text-black text-[10px] md:text-base font-medium mt-1 md:mt-0 md:ml-auto"> 
                     {startDate || "xx/xxxx Start"} {" to "} {endDate || "xx/xxxx End"}
                </h3>
            </section>

            <section className="flex flex-col justify-center items-start ml-2 md:ml-5 mt-1">
                <h3 className="text-black text-sm md:text-base font-medium">{experienceType || "Type of experience"}  </h3>
                <h3 className="text-black  text-sm md:text-base font-medium mt-1"><span className="font-semibold text-blue-950">Role: </span>{role || "Your Role"}</h3>
                <p className="text-black text-[12px] md:text-base  mt-3">{description || "Describe you experience..."}</p>
            </section>


        </div>
    )
}

export default ExperiencePreview