const { query } = require("../../helper/executequery");

module.exports.createStoreSP = async (values) => {
  let sql = `CALL create_store(?,?,?)`;
  await query(sql, [values.userId, values.storeName, values.storeCategory]);
};
