import User from "../model/User.js"
import AppError from "../utils/AppError.js"
import catchAsync from "../utils/catchAsync.js"
import { signAccessToken } from "../utils/jwtToken.js"

export const register = catchAsync(async (req, res, next) => {
    const {fullName, age, email, password} = req.body
    if(!fullName || !age || !email || !password){
        return next(new AppError("All feilds are required!", 400))
    }

    // email checking >> 
    const existEmail = await User.findOne({email})
    if(existEmail)return next(new AppError("Email already exist!", 400))

    // password checking >> 
    if(password.length < 6)return next(new AppError("Password must be 6 characters", 400))

    const user = await User.create({
        fullName,
        age,
        email, 
        password
    })

    const token = signAccessToken(user._id) // imp

    res.status(201).json({
        success:true,
        message:"User registered Successfully!",
        token,
        user:{
            name: user.fullName,
            age: user.age,
            email: user.email
        }
    })
    
})


export const login = catchAsync(async (req, res, next) => {
    const {email, password} = req.body
    if(!email || !password){
        return  next(new AppError("Invalid email or password!", 400))
    }

    // email checking >> 
    const user = await User.findOne({email}).select("+password") // important >>
    if(!user)return next(new AppError("Invalid email!", 400))

    // password compare >> 
    const isMatch = await user.comparePassword(password) // send to the methods
    if(!isMatch)return next(new AppError("Invalid email or password!", 400))

    // token >> 
    const token  = signAccessToken(user._id)
    res.status(200).json({
        success:true,
        token,
        message:"User Login Successfully!",
        user:{
            name: user.fullName,
            age: user.age,
            email: user.email
        }
    })

}) 



