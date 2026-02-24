

const EducationPreview = ({educationData}) => {
    const {graduation} = educationData
    const { college, branch, location, cgpa, enrollmentDate, completionDate} = graduation
    
    return (
        <div className="w-full">
            <h2 className="text-base md:text-xl font-bold text-blue-950">Education:</h2>

            {/*  College and dates */}
            <section className="flex flex-col md:flex-row justify-between items-start  mt-2 md:mt-4 ml-2 md:ml-5">
                <h3 className="w-full md:w-[70%] flex-wrap font-medium text-black text-sm md:text-base">
                    {college || "College Name is Here"}, {branch || "Your Branch"}
                </h3>

                <h3 className="font-semibold  text-black text-[10px] md:text-[14px] mt-0.5">
                    {enrollmentDate || "xx/xx/xxxx"} <span className="ml-2 mr-2 font-semibold text-blue-950">{" "} to  {" "}</span> {completionDate || "xx/xx/2xxx"} 
                </h3>
            </section>

            {/* location */}
            <section className="flex flex-col justify-center items-start ml-2 md:ml-5">
                <h3 className="font-medium text-xs md:text-sm text-black w-2/3">{location || "College Address is here"}</h3>
            </section>

            {/* CGPA  */} 
            <section className="flex flex-col justify-center items-start mt-1 ml-2 md:ml-5">
                <h3 className="font-medium text-[10px] md:text-sm text-black w-2/3">{cgpa || "x.xx/10"} cgpa</h3>
            </section>
            
        </div>
    )
}

export default EducationPreview