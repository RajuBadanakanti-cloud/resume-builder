import { useState,} from "react"
import {Link, useNavigate} from "react-router-dom"
import useAuth from "../../Context/costumHooks/userAuth"
import { CircleDashed } from "lucide-react";


const Login  = () => {
    const [userEmail, setUserEmail] = useState("") // email
    const [userPassword, setUserPassword] = useState("") // password

    const [isLoading, setLoading] = useState(false)
    const [errorMsg, setErrMag] = useState("") // error messagae
    const navigate = useNavigate() // navigation

    const {login} = useAuth()



    const onhandleEmail = (e) => {
        setUserEmail(e.target.value)
    }

    const onhandlePassword = (e) => {
        setUserPassword(e.target.value)
    }

    // FORM HANDLING >>
    const handleFormData = async (event) => {

            try{
            setLoading(true)
            event.preventDefault()
            const userDetails = {
                email:userEmail,
                password:userPassword
            }

            const options = {
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                }, 
                body:JSON.stringify(userDetails) 
            }
 
            const URL = import.meta.env.VITE_API_URL // from backend render Url



            const response = await fetch(`${URL}/auth/login`, options)
            const data = await response.json()
            // console.log(data.token, data.user)
            
            if(response.ok === true){  
                login(data.token, data.user)
                navigate("/", {replace:true})
              
            }else{
                setErrMag(data.message)
                setLoading(false)
            }
            }catch(err){
                console.log(err.message)
                setLoading(false)

            }finally{
                setLoading(false)

            }
   
    }   

    return (
    <div className="h-screen w-screen bg-emerald-100 flex flex-col justify-center items-center p-4 ">
        <form id="login-form" onSubmit={handleFormData} 
        className="h-80 w-64 md:h-120 md:w-100 bg-emerald-50 rounded-md md:rounded-xl shadow-md md:shadow-xl pb-2 px-6 flex flex-col justify-center items-center">
            <h2 className="text-emerald-900 font-bold text-sm md:text-xl mb-2 md:mb-4">Login</h2>

            {/* Email Section */}    
            <section className="w-full flex flex-col justify-center items-start mb-4 md:mb-5">
            <label htmlFor="emailInp" className="text-emerald-900 font-bold text-[12px] md:text-base mb-2">Email</label>
            
            <input id="emailInp" type="email" value={userEmail} onChange={onhandleEmail}
            className="h-10 md:h-12 w-full bg-emerald-100 rounded-lg p-2 text-emerald-900 text-[12px] md:text-base 
            hover:border-2 border-emerald-500 transition-all duration-400"/>
            </section>

            {/* Password Section  */}    
            <section className="w-full flex flex-col justify-center items-start mb-4 md:mb-5">
            <label htmlFor="passwordInp" className="text-emerald-900 font-bold text-[12px] md:text-base mb-2">Password</label>
            
            <input id="passwordInp" type="password" value={userPassword} onChange={onhandlePassword} 
            className="h-10 md:h-12 w-full bg-emerald-100 rounded-lg p-2 text-emerald-900 text-[12px] md:text-base 
            hover:border-2 border-emerald-500 transition-all duration-400"/>
            </section>
                          
            <p className="text-[10px] md:text-sm text-red-600">{errorMsg}</p>

            <button type="submit" className="h-10 w-full md:h-12 md:w-80 bg-emerald-600 rounded-lg text-sm md:text-base font-bold text-emerald-50 p-2 mt-4  flex flex-row justify-center items-center cursor-pointer
            hover:bg-emerald-500 transition-colors duration-400">
             {isLoading ? <span className="flex flex-row items-center"><CircleDashed className="h-4 w-4 md:h-5 md:w-5 animate-spin mr-1"/> Submiting...</span> : "Submit"}
            </button>
            
            <Link to="/register" replace={true} className="text-[10px] md:text-sm mt-3 text-emerald-900">Do you have no account Please
                <span className="text-blue-700 underline"> Signup!</span>
            </Link> 
        </form>
    </div>  
    )
}

export default Login