const mysql = require("mysql");
const { mySQLconfig } = require("./index");

const pool = mysql.createPool(mySQLconfig);

const connectToDB = () => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        reject(err);
        return;
      }
      console.log("Connected to DB");
      resolve(connection);
    });
  });
};
exports.connectToDB = connectToDB;
exports.pool = pool;
