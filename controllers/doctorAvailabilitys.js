import  express  from "express";
import { createDoctorAvailability, findDoctorAvailabilityById } from "../services/doctorAvailabilitys.js";
import { httpStatusMesage } from "../constants/httpStatusMessage.js"; 
/**
 *
 * @param {express.Request} request
 * @param {express.Response} response
 */
export const postCreateDoctorAvailability = async (request, response) => {
    const { day_of_week, start_time, end_time, is_available } = request.body;
    const doctorAvailability = await createDoctorAvailability(day_of_week, start_time, end_time, is_available);

    
  response.json({
    data: doctorAvailability,
    message: httpStatusMesage[response.status],
  });
};
