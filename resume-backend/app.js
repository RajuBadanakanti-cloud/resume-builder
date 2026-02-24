import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import authRoutes from "./routes/authRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import resumeRoutes from "./routes/resumeRoutes.js"
import globalErrorMid  from "./middlewares/errorMid.js"

import helmet from "helmet"
import cors from "cors"


dotenv.config() // >> 
const app = express()
app.use(helmet()) 

// frontend + backend origins conections >>
app.use(cors({
    origin: [
        "http://localhost:5173",
        "https://resume-builder-rb-cloud.vercel.app"
    ],
    credentials:true // imp
}))

app.use(express.json())
connectDB() // db >>

app.use("/auth", authRoutes)
app.use("/user", userRoutes)
app.use("/resume", resumeRoutes)

app.get("/", (req, res, next) => {
    res.send("<h1>Resume Builder Application</h1>")
})

app.use(globalErrorMid) // error middleware >>

export default app 

