
import Personal from "./Personal";
import Education from "./Education";
import TechSklls from "./TechSkills";
import Experience from "./Experience";
import Project from "./Project";
import SoftSkills from "./SoftSkills";


const BuilderForm  = ({resumeData, setResumeData}) => {
    
    const handleForm = (e) => {
        e.preventDefault();
        console.log(resumeData);
    }
    
    return (
        <div className="w-full md:w-[50%] mb-5 md:mb-0 md:mr-5 px-2 md:px-0">
          {/* Top FORM Section */}  
        <section className=" bg-rose-800 px-2 py-2 md:px-5 md:py-5 w-full flex flex-col justify-start items-center text-center rounded-md md:rounded-lg">
            <h1 className="text-white text-base md:text-2xl font-bold">Let’s Get Started</h1>
            <p className="text-rose-100 text-xs md:text-base">Fill in the details below to create your resume</p>
        </section>

            <form id="resume-builder-form" onSubmit={handleForm} className="h-min-screen md:h-screen w-full bg-emerald-300 flex flex-col justify-start items-start rounded-md shadow-md px-4 md:px-6 py-4 md:py-6 mt-4 md:mt-10 md:overflow-y-scroll">
                <Personal resumeData={resumeData} setResumeData={setResumeData} />
                <Education resumeData={resumeData} setResumeData={setResumeData}/>
                <TechSklls resumeData={resumeData} setResumeData={setResumeData}/>
                <Experience resumeData={resumeData} setResumeData={setResumeData}/>
                <Project resumeData={resumeData} setResumeData={setResumeData} />
                <SoftSkills resumeData={resumeData} setResumeData={setResumeData}/>
                
                <button type="submit" 
                className="w-full h-12 bg-green-800 text-white font-semibold text-sm md:text-base border-2 border-gray-500 px-4 py-2 rounded-md mt-5 cursor-pointer
                 hover:bg-green-900 transition-colors duration-200">Submit</button>
            </form>
            
            
        </div>
    )
}

export default BuilderForm