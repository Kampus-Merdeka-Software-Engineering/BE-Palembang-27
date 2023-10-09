import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

const Logins = sequelize.define("Logins", {
  userName: DataTypes.STRING, 
  password: DataTypes.STRING,
});

export default Logins; 