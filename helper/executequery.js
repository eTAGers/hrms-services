const { con } = require("../config/mysqldb");
const query = async (QUERY) => {
  return new Promise((res, rej) => {
    con.query(QUERY, function (err, result) {
      if (err) {
        rej(err);
        // console.log(err);
        throw err;
      }
      res(result);
    });
  });
};
module.exports = { query };
