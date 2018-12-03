var mysql = require('mysql2');
var dbConf = require('./database').mysql;
module.exports = mysql.createPool(dbConf).promise();
