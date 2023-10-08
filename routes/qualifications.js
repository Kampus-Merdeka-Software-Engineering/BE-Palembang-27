import { Router } from "express";
import { postCreateQualification } from "../controllers/qualifications.js";

const qualificationsRouter = Router();

qualificationsRouter.get("/", (request, response) => 
response.json({
    message: "qualification",
})
);

qualificationsRouter.post("/", postCreateQualification);

export default qualificationsRouter;