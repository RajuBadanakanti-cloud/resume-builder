import mongoose from "mongoose";
import User from "../model/User.js";
import AppError from "../utils/AppError.js";


export const getUsers = async (req, res, next) => {
    try{
        const user = await User.find().lean()
        res.status(200).json({
            success:true,
            message:"All Users",
            user
        })
    }catch(err){
        next(err)
    }
}

export const deleteUserById = async (req, res, next) => {
    try{
        const id = req.params.id // important >>
        if(!mongoose.Types.ObjectId.isValid(id)){
            return next(new AppError("invalid User", 400))
        }


        const user = await User.findByIdAndDelete(id)
        if(!user){
            return next(new AppError("User not found", 404))
        }

        res.status(200).json({
            success:true,
            message:"User Deleted!",
            user:{
                name:user.fullName,
                email:user.email
            }
        })
    }catch(err){
        next(err)
    }
}


