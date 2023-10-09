import  express  from "express";
import { createLogin, findLoginById } from "../services/logins.js";
import { httpStatusMesage } from "../constants/httpStatusMessage.js"; 
/**
 *
 * @param {express.Request} request
 * @param {express.Response} response   
 */
export const postCreateLogin = async (request, response) => {
    const { userName, password } = request.body;
    const login = await createLogin(userName, password);

    
  response.json({
    data: login,
    message: httpStatusMesage[response.status],
  });
};
