import { Router } from "express";
import { postCreateRegister } from "../controllers/registers.js";

const registersRouter= Router();

registersRouter.get("/", (request, response) => 
response.json({
    message: "register",
})
);

registersRouter.post("/", postCreateRegister);

export default registersRouter; 