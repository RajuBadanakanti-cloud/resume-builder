
import {useState } from "react";
import UserContext from "./UserContext";

// Provider >> 
const UserContextProvider = ({children}) => {
    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem("user")
        // user exists return coverted string to obj 
        return storedUser ? JSON.parse(storedUser) : null
    })


// login >> 
const login = (token, userData) => {
        const userWithToken = {
      ...userData,
      token, // ✅ attach token to user
    };


    localStorage.setItem("user", JSON.stringify(userWithToken)) // user data save >> 
    localStorage.setItem("token", token) // token save
    setUser(userData) // imp
}

// logout
const logout = () => {
    localStorage.clear()
    setUser(null)
}   

console.log(user, "///") // user data and token check >>
return (
    <UserContext.Provider value={{user, setUser, login, logout}}>
        {children}
    </UserContext.Provider>
)
}

export default UserContextProvider



