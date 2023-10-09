import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

const Registers= sequelize.define("Registers", {
  userName: DataTypes.STRING,
  password: DataTypes.STRING,
  fullName: DataTypes.STRING, 
  email: DataTypes.STRING, 
  phone: DataTypes.STRING,
});

export default Registers;