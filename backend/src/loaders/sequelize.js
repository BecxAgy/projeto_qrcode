import { Sequelize } from "sequelize";
//import { db_name, db_user, db_host, db_password } from "../config/index.js";
//import tedious from "tedious";

const sequelize = new Sequelize({
  dialect: "mysql",
  host: "localhost", // Altere para o host do seu servidor MySQL
  port: "3306", // Altere para o host do seu servidor MySQL
  username: "root", // Substitua pelo seu nome de usuário do MySQL
  password: null, // Substitua pela sua senha do MySQL
  database: "portal_qrcode", // Substitua pelo nome do seu banco de dados
  define: {
    timestamps: true,
    underscored: true,
  },

  // dialect: "mssql",
  // dialectModule: tedious,
  // dialectOptions: {
  //   options: {
  //   },
  // },
  // host: db_host,
  // port: 1433,
  // define: {
  //   timestamps: true,
  //   underscored: true,
  // }
});

export default sequelize;
