import { useState } from "react"
import {Link, useNavigate} from "react-router-dom"
import { CircleDashed } from "lucide-react"

const Register  = () => {
    const [name, setName] = useState("")
    const [age, setAge]  = useState(5)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [isLoading, setIsLoading] = useState(false)
    const [errorMsg, setErrMag] = useState("")
    const navigation =  useNavigate()

    const handleFormData = async (event) => {
        try{
            setIsLoading(true)
            event.preventDefault()
            const userDetails = {
                fullName:name,
                age, 
                email,
                password
            }

            const options = {
                method:"POST",
                headers:{
                    "Content-Type" : "application/json"
                },
                body:JSON.stringify(userDetails)
            }

            const URL = import.meta.env.VITE_API_URL
            const response = await fetch(`${URL}/auth/register`, options)
            const data = await response.json()
            if(response.ok === true){
                navigation("/", {replace:true})

            }else{
                setErrMag(data.message)
                setIsLoading(false)
            }
 
        }catch(err){
        console.log(err.message)

        }finally{
            setIsLoading(false)
        }
    }   

    return (
    <div className="h-screen w-screen bg-emerald-100 flex flex-col justify-center items-center p-4">
        <form id="register-form" className="h-120 w-68 md:h-160 md:w-120 bg-emerald-50 rounded-sm md:rounded-xl shadow-xl py-5 px-5 md:py-6 md:px-10 flex flex-col justify-center items-center"
        onSubmit={handleFormData}>
            <h2 className="text-emerald-900 font-bold text-sm md:text-xl mb-4">Create an Account</h2>

            {/* Name Section */}     
            <section className="w-full flex flex-col justify-center items-start mb-4 md:mb-5">
            <label htmlFor="nameInp" className="text-emerald-900 font-bold text-[12px] md:text-base mb-2">Full Name</label>
            <input id="nameInp" type="text" minLength={3} maxLength={40} placeholder="ex: Sachin Tendulter" value={name} onChange={(event) => setName(event.target.value)}
            className="h-10 md:h-12 w-full bg-emerald-100 rounded-lg p-3 text-emerald-900 text-[12px] md:text-base 
            hover:border-2 border-emerald-500 transition-all duration-400"/>
            </section>

            {/* Date of Birth Section  */}    
            <section className="w-full flex flex-col justify-center items-start mb-4 md:mb-5">
            <label htmlFor="ageInp"  className="text-emerald-900 font-bold text-[12px] md:text-base mb-2">Age</label>
            <input id="ageInp" type="number" min={5} placeholder="Enter Your age"  value={age} onChange={(event) => setAge(event.target.value)}
            className="h-10 md:h-12 w-full bg-emerald-100 rounded-lg p-3 text-emerald-900 text-[12px] md:text-base 
            hover:border-2 border-emerald-500 transition-all duration-400"/>
            </section>

            {/* Email Section */}    
            <section className="w-full flex flex-col justify-center items-start mb-4 md:mb-5">
            <label htmlFor="emailInp" className="text-emerald-900 font-bold text-[12px] md:text-base mb-2">Email</label>
            <input id="emailInp" type="email"  maxLength={60} placeholder="ex: example@gmail.com" value={email} onChange={(event) => setEmail(event.target.value)}
            className="h-10 md:h-12 w-full bg-emerald-100 rounded-lg p-3 text-emerald-900 text-[12px] md:text-base 
            hover:border-2 border-emerald-500 transition-all duration-400"/>
            </section>

            {/* Password Section  */}    
            <section className="w-full flex flex-col justify-center items-start mb-4 md:mb-5">
            <label htmlFor="passwordInp" className="text-emerald-900 font-bold text-[12px] md:text-base mb-2">Password</label>
            <input id="passwordInp" type="password" minLength={6} placeholder="Must be 6 characters" value={password} onChange={(event) => setPassword(event.target.value)}
            className="h-10 md:h-12 w-full bg-emerald-100 rounded-lg p-3 text-emerald-900 text-[12px] md:text-base 
            hover:border-2 border-emerald-500 transition-all duration-400"/>
            </section>

            <p className="text-sm text-red-600">{errorMsg}</p>


            <button type="submit" className="h-10 w-full md:h-12 md:w-80 bg-emerald-600 rounded-lg text-sm md:text-base font-bold text-emerald-50 p-2 mt-4  flex flex-row justify-center items-center cursor-pointer
            hover:bg-emerald-500 transition-colors duration-400">
             {isLoading ? <span className="flex flex-row items-center"><CircleDashed className="h-4 w-4 md:h-5 md:w-5 animate-spin mr-1"/> Submiting...</span> : "Submit"}
            </button>
            
            <Link to="/login" replace={true} className="text-[10px] md:text-sm mt-3 text-emerald-900">Do you have an account Please
                <span className="text-blue-700 underline"> Login!</span>
            </Link> 
        </form>
    </div>  
    )
}


export default Register