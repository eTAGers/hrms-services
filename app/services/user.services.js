const { query } = require("../../helper/executequery");

module.exports.signUpUser = async (values) => {
  let sql = `CALL create_user(?,?,?,?,?)`;
  await query(sql, [
    values.userName,
    values.email,
    values.mobile,
    values.password,
    values.pass,
  ]);
};
