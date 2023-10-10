import Appoinments from "../models/appoinments.js";

export const findAppoinmentById = async (id) => {
  return await Appoinments.findOne({ where: { id } });
};

export const createAppoinment = async (yourName, yourNumber, yourEmail, birthDate) => {
  return await Appoinments.create({ yourName, yourNumber, yourEmail, birthDate });
  await createAppoinment(yourName, yourNumber, yourEmail, birthDate); 
}; 