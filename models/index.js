const Sequelize = require("sequelize");

//Credentials for database connection
const conn = new Sequelize('db_havehajs', 'root', '', {
    host: "localhost",
    dialect: "mysql",
    port: 3307
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = conn;

db.rental = require("./rental.model.js")(conn, Sequelize);


module.exports = db;
