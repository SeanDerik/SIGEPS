const { Sequelize } = require("sequelize");

// Create a new instance of Sequelize for your MySQL database
const connection = new Sequelize("sigeps", "root", "", {
    host: "localhost",
    dialect: "mysql",
});

// Test the connection
connection.authenticate()
    .then(() => console.log('Connected to the database'))
    .catch(err => console.error('Unable to connect to the database:', err));

module.exports = connection;
