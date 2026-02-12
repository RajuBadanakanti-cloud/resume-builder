import User from "../model/User.js";
import AppError from "../utils/AppError.js";
import catchAsync from "../utils/catchAsync.js";
import jwt from "jsonwebtoken"


export const protect = catchAsync(async (req, res, next) => {
        let token;
        if(req.headers.authorization && req.headers.authorization.startsWith("Bearer ")){
            token = req.headers.authorization.split(" ")[1] //important
        }

        if(!token)return next(new AppError("User not logged, Please login!", 401))

        // decode token >> 
        let decode 
        try{
            decode = jwt.verify(token, process.env.JWT_SECRET)
        }catch(err){
            return next(new AppError("Token invalid or expired!", 401))
        }


        const currentUser = await User.findById(decode.id) // imp >> 
        if(!currentUser)return next(new AppError("User no longer exist!", 401))

        req.user = currentUser // imp >> 
        next() 
})

