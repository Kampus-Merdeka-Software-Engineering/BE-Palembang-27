import { Router } from "express";
import { postCreateLogin } from "../controllers/logins.js";

const loginsRouter = Router();

loginsRouter.get("/", (request, response) => 
response.json({
    message: "login",
})
);

loginsRouter.post("/", postCreateLogin);

export default loginsRouter; 