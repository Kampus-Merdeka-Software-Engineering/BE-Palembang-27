import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

const Qualifications = sequelize.define("Qualifications", {
  doctors_id: DataTypes.STRING,
  qualification_name: DataTypes.STRING,
  institute_name: DataTypes.STRING, 
});

export default Qualifications;