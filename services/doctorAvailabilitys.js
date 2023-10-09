import doctorAvailabilitys from "../models/doctorAvailabilitys.js";

export const findDoctorAvailabilityById = async (id) => {
  return await doctorAvailabilitys.findOne({ where: { id } });
};

export const createDoctorAvailability = async (day_of_week, start_time, end_time, is_available) => {
  return await doctorAvailabilitys.create({ day_of_week, start_time, end_time, is_available });
  await createDoctorAvailability(day_of_week, start_time, end_time, is_available);
};