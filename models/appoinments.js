import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

const Appoinments = sequelize.define("Appoinments", {
  yourName: DataTypes.STRING,
  yourNumber: DataTypes.STRING,
  yourEmail: DataTypes.STRING, 
  dateBooking: DataTypes.DATE, 
});

export default Appoinments; 