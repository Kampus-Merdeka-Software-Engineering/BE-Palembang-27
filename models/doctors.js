import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

const Doctors = sequelize.define("Doctors", {
  first_name: DataTypes.STRING,
  last_name: DataTypes.STRING,
  professional_statement: DataTypes.STRING, 
  practicing_from: DataTypes.DATE, 
});

export default Doctors; 