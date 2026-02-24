import express from "express"
import { register, login } from "../controllers/authController.js"
import validations from "../middlewares/validate.js"
import {authValidations} from "../validations/auth.Validate.js"

const routes  = express.Router()

routes.route("/register").post(validations(authValidations), register)
routes.route("/login").post(login)


export default routes