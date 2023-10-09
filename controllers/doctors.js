import  express  from "express";
import { createDoctor, findDoctorById } from "../services/doctors.js";
import { httpStatusMesage } from "../constants/httpStatusMessage.js"; 
/**
 *
 * @param {express.Request} request
 * @param {express.Response} response   
 */
export const postCreateDoctor = async (request, response) => {
    const { first_name, last_name, professional_statement, practicing_from } = request.body;
    const doctor = await createDoctor(first_name, last_name, professional_statement, practicing_from);

    
  response.json({
    data: doctor,
    message: httpStatusMesage[response.status],
  });
};
