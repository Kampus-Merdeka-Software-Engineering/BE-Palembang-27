import Qualifications from "../models/qualifications.js";

export const findQualificationById = async (id) => {
  return await Qualifications.findOne({ where: { id } });
};

export const createQualification = async (doctors_id, qualification_name, institute_name) => {
  return await Qualifications.create({ doctors_id, qualification_name, institute_name });
  await createQualification(doctors_id, qualification_name, institute_name); 
}; 