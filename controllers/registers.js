import  express  from "express";
import { createRegister, findRegisterById } from "../services/registers.js";
import { httpStatusMesage } from "../constants/httpStatusMessage.js"; 
/**
 *
 * @param {express.Request} request
 * @param {express.Response} response
 */
export const postCreateRegister = async (request, response) => {
    const { userName, password, fullName, email, phone} = request.body;
    const register = await createRegister(userName, password, fullName, email, phone);

    
  response.json({ 
    data: register,
    message: httpStatusMesage[response.status],
  });
};