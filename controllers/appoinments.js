import  express  from "express";
import { createAppoinment, findAppoinmentById } from "../services/appoinments.js";
import { httpStatusMesage } from "../constants/httpStatusMessage.js"; 
/**
 *
 * @param {express.Request} request
 * @param {express.Response} response   
 */
export const postCreateAppoinment = async (request, response) => {
    const { yourName, yourNumber, yourEmail, birthDate } = request.body;
    const appoinment = await createAppoinment(yourName, yourNumber, yourEmail, birthDate);

    
  response.json({
    data: appoinment,
    message: httpStatusMesage[response.status],
  });
};