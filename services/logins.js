import Logins from "../models/logins.js";

export const findLoginById = async (id) => {
  return await Logins.findOne({ where: { id } });
};

export const createLogin = async (userName, password) => {
  return await Logins.create({ userName, password });
  await createLogin(userName, password); 
}; 