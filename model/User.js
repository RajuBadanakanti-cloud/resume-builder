import mongoose from "mongoose"
import bcrypt from "bcryptjs"

const userSchema = new mongoose.Schema({
    fullName:{
        type:String,
        minlength:3,
        trim:true,
        required:true,
    },
    age:{
        type:Number,
        min:5,
        max:100,
        required:true,
    },
    email:{
        type:String,
        lowercase:true,
        unique:true,
        trim:true,
        required:true,
    },  
    password:{
        type:String,
        minlength:6,
        select:false, // << important
        required:true,
    },

}, {timestamps:true})



// password pre hasing >>
userSchema.pre("save", async function(){
    if(!this.isModified("password"))return ;
    this.password = await bcrypt.hash(this.password, 12)
    
}) 

// compare password method >> 
userSchema.methods.comparePassword = async function(candidatePassword){
    return await bcrypt.compare(candidatePassword, this.password)
}





const User = mongoose.model("User", userSchema)
export default User