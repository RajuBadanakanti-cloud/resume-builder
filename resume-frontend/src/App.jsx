import { BrowserRouter, Routes,  Route, } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"
import Template from "./pages/Template"
import ResumeBuilder from "./pages/ResumeBuilder/index"
import ProtectedRoute from "./pages/ProtectedRoute/protect"

    const App = () => (
        <BrowserRouter>
              <Routes>
                 
                <Route path="/"  element={<Home/>}/>

                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element ={<Register/>}/>

                <Route path="/template" element={<ProtectedRoute><Template/></ProtectedRoute>}/>
                <Route path="/resume-builder" element={<ProtectedRoute><ResumeBuilder/></ProtectedRoute>}/>
                
              </Routes>
        </BrowserRouter>
    )

export default App
 