import { Router } from "express";
import { postCreateDoctor } from "../controllers/doctors.js";

const doctorsRouter = Router();

doctorsRouter.get("/", (request, response) => 
response.json({
    message: "doctor",
})
);

doctorsRouter.post("/", postCreateDoctor);

export default doctorsRouter; 