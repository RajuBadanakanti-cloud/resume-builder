import Joi from "joi"

export const authValidations = Joi.object({
    fullName:Joi.string().trim().min(3).max(30).required(),
    age:Joi.number().integer().min(5).max(100).required(),
    email:Joi.string().email().trim().lowercase().required(),
    password:Joi.string().min(6).required()
})