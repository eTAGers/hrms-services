const { pool } = require("../config/mysqldb");
const query = async (QUERY, params) => {
  return new Promise((res, rej) => {
    pool.query(QUERY, params, function (err, result) {
      if (err) {
        rej(err);
        console.log(err);
        throw err;
      }
      console.log("Query:", QUERY, "params:", params, "query result:", result);
      res(result);
    });
  });
};
module.exports = { query };
