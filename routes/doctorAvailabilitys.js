import { Router } from "express";
import { postCreateDoctorAvailability } from "../controllers/doctorAvailabilitys.js";

const doctorAvailabilitysRouter = Router();

doctorAvailabilitysRouter.get("/", (request, response) => 
response.json({
    message: "doctorAvailability",
})
);

doctorAvailabilitysRouter.post("/", postCreateDoctorAvailability);

export default doctorAvailabilitysRouter;