import { useState, useEffect } from "react"
import { useNavigate, Link } from "react-router-dom"
import useAuth from "../../Context/costumHooks/userAuth"


const Header  = () => {
    const navigation = useNavigate()
    const [scrolled, setScrolled] = useState(false)

    const {user, logout} = useAuth() // logout hook >>
    const [conformLogout, setConformLogout] = useState(false)

    // Logout >>
    const handleConformLogout = () => {
        logout() // Call the logout function from the auth context
        setConformLogout(false) // Close the confirmation dialog
        navigation("/login", {replace:true}) // Redirect to login page after logout
    }

    const onLogout = () => {
        setConformLogout(true)
    }

    const onRegister = () => {
        navigation("/register", {replace:true})
    }

    useEffect(() => {
        const handleNavbar = () => {

            if(window.scrollY > 100){
                setScrolled(true)
            }else{
                setScrolled(false)
            }

        }

        window.addEventListener("scroll", handleNavbar)
    return () => window.removeEventListener("scroll", handleNavbar)
    

    }, [])


    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    const profileLogo = user ? user.name[0].toUpperCase() : "U"

    const isAbleLogin = user ? false : true
    const IsAbleLogout = user ? true : false

    return (
        <header className={`h-10 md:h-18 w-full flex flex-row justify-between items-center px-4 py-6 md:px-10 md:py-8
            transition-all duration-300 top-0 left-0 z-50 fixed 
            ${scrolled ? "shadow-xl backdrop-blur-lg bg-teal-50" : "bg-linear-to-r from-emerald-200 to-teal-50 "}`}>

            <button className="bg-emerald-600 h-6 w-6 md:h-12 md:w-12 font-extrabold text-[10px] md:text-lg text-white rounded-full mr-2">{profileLogo}</button>    
           
            <section className="ml-auto flex flex-row justify-center items-center">
            <Link to="/template"><nav className="text-[10px] md:text-base font-bold text-emerald-700 mr-4 md:mr-10 ">Templates</nav></Link>

            {/* Register  */}
            {isAbleLogin && 
            <button  type="button" onClick={onRegister}
            className="h-6 w-24 md:h-10 md:w-42 bg-emerald-400 text-[9px] md:text-sm font-bold text-emerald-50 border-2 border-emerald-600
            rounded-sm md:rounded-xl cursor-pointer mr-1 md:mr-5 hover:bg-emerald-500 transition-colors duration-300" >
            create an account</button>
            }

            {/* Logout */}
            {IsAbleLogout &&
            <button  type="button" onClick={onLogout}
            className="h-5 w-14 md:h-10 md:w-28 bg-emerald-600 text-[10px] md:text-sm font-bold text-emerald-50
            rounded-sm md:rounded-xl cursor-pointer mr-2 md:mr-5 hover:bg-emerald-700 transition-colors duration-300" >
            Logout</button>
            }

            {conformLogout
            && <div className="absolute top-12 right-4 md:top-18 md:right-12 bg-white shadow-lg rounded-lg p-2 md:p-4 z-50">
                <p className="text-gray-800 text-[10px] md:text-base mb-2 md:mb-4">Are you sure you want to logout?</p>
                <div className="flex justify-end space-x-4 md:space-x-2">
                    <button onClick={() => setConformLogout(false)}
                     className="px-3 py-1 md:px-4 md:py-2 text-[10px] md:text-sm bg-gray-300 rounded-md transition-colors duration-200
                      hover:bg-gray-400 cursor-pointer">Cancel</button>

                    <button onClick={handleConformLogout}
                        className="px-3 md:px-4 py-1 md:py-2  text-[10px] md:text-sm bg-emerald-600 text-white rounded-md cursor-pointer
                         hover:bg-emerald-700 transition-colors duration-200">Confirm</button>
                </div>
            </div>}
            
            </section>
                 
        </header>
    )
}

export default Header