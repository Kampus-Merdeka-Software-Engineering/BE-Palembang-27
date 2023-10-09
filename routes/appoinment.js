import { Router } from "express";
import { postCreateAppoinment } from "../controllers/appoinments.js";

const appoinmentsRouter = Router();

appoinmentsRouter.get("/", (request, response) => 
response.json({
    message: "appoinment",
})
);

appoinmentsRouter.post("/", postCreateAppoinment);

export default appoinmentsRouter; 