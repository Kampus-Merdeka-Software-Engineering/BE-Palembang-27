import Doctors from "../models/doctors.js";

export const findDoctorById = async (id) => {
  return await Doctors.findOne({ where: { id } });
};

export const createDoctor = async (first_name, last_name, professional_statement, practicing_from) => {
  return await Doctors.create({ first_name, last_name, professional_statement, practicing_from });
  await createDoctor(first_name, last_name,professional_statement, practicing_from); 
}; 