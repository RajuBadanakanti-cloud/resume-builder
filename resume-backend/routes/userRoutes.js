import express from "express"
import { getUsers, deleteUserById } from "../controllers/userController.js"
import { protect } from "../middlewares/protect.js"


const routes  = express.Router()

routes.route("/").get(getUsers) // GET ALL USERS >>
routes.route("/:id").delete(deleteUserById) // DELETE USER BY ID >>

export default routes 