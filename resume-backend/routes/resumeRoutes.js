import express from "express";
import {protect} from "../middlewares/protect.js"
import { generateResumePDF } from "../controllers/resumeController.js";

const router = express.Router();

router.post("/pdf", protect, generateResumePDF); 


export default router;
  