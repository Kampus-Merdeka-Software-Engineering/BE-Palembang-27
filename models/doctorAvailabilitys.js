import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

const doctorAvailabilitys = sequelize.define("doctorAvailabilitys", {
  day_of_week: DataTypes.STRING,
  start_time: DataTypes.TIME, 
  end_time: DataTypes. TIME, 
  is_available: DataTypes.CHAR, 
});

export default doctorAvailabilitys;