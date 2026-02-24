import Header from "../Header"
import useAuth from "../../Context/costumHooks/userAuth"
import { useNavigate } from "react-router-dom"

const Home = () => {
    const {user} = useAuth()
    const navigation = useNavigate()

    // Login >> 
    const onLogin = () => {
        navigation("/login")
    }

    // create resume >> 
    const onCreateResume = () => {
        if(!user){
            return alert("Please login or create an account!")
        }else {
            navigation("/resume-builder")
        }
    }

const isAbleLogin = user ? false : true


return(
    <>
    <Header/>
    <div className="h-screen w-screen bg-linear-to-r from-emerald-100 to-emerald-50 flex flex-col justify-center items-center p-4">
        <div className="w-[95%] md:w-[90%] flex flex-col md:flex-row justify-center items-center">
            {/* Text Section */}
            <section className="w-full md:w-[50%] mb-2 md:mb-0 md:mr-4 order-2 md:order-1">
            <h1 className="font-bold md:font-extrabold bg-linear-to-r from-emerald-800 to-emerald-500 bg-clip-text text-transparent text-xl/6 md:text-5xl/14 mb-2 md:mb-4">
                Build Your Professional Resume in Minutes</h1>
            <p className="bg-linear-to-r from-emerald-900 text-[10px] md:text-lg to-emerald-800 bg-clip-text text-transparent">Create modern, ATS-friendly resumes with live preview and instant PDF download.</p>
               
                {/* Buttons section */}
                <section className="mt-8 md:mt-10 flex flex-col md:flex-row justify-start items-start md:items-center">
              
                <button  type="button" onClick={onCreateResume}
                className="h-10 w-38 md:h-14 md:w-42 font-bold text-emerald-900 bg-emerald-200 rounded-lg border-2 border-emerald-400 shadow-emerald-200 shadow-lg 
                 hover:bg-emerald-300 transition-colors duration-300 cursor-pointer mb-4 md:mb-0 md:mr-6">
                    Create Resume
                </button>
                

                {isAbleLogin && 
                    <button type="button" onClick={onLogin}
                    className="h-10 w-38 md:h-14 md:w-42 font-bold text-emerald-50 bg-emerald-400 rounded-lg border-2 border-emerald-400 shadow-emerald-200 shadow-lg
                     hover:bg-emerald-300 transition-colors duration-300 cursor-pointer mr-6">
                        Login
                    </button>}


                </section>

            </section>
            {/* Image Section */}
            <img className="w-5/6 md:w-1/2 order-1 md:order-2 -ml-10 md:ml-0" src="/images/ResumeBuilder-Home-ImageAsPNG.png" alt="resume-home-png"/>
        </div>
    </div>
    </>
)
}

export default Home