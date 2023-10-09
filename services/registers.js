import Registers from "../models/registers.js";

export const findRegisterById = async (id) => {
  return await Registers.findOne({ where: { id } });
};

export const createRegister = async (userName, password, fullName, email, phone) => {
  return await Registers.create({ userName, password, fullName, email, phone});
  await createRegister(userName, password, fullName, email, phone); 
}; 