import  express  from "express";
import { createQualification, findQualificationById } from "../services/qualifications.js";
import { httpStatusMesage } from "../constants/httpStatusMessage.js"; 
/**
 *
 * @param {express.Request} request
 * @param {express.Response} response
 */
export const postCreateQualification = async (request, response) => {
    const { doctors_id, qualification_name, institute_name } = request.body;
    const qualification = await createQualification(doctors_id, qualification_name, institute_name);

    
  response.json({
    data: qualification,
    message: httpStatusMesage[response.status],
  });
};
