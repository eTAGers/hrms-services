module.exports = {
  storePresentQuery: (storename) =>
    `SELECT s.storename, s.storecategory, s.storeid, u.userName, u.email, u.mobile FROM store s
    INNER JOIN userdetails u on u.userid = s.userid
    WHERE s.storename = '${storename}'`,
  store: (
    userId
  ) => `SELECT s.storename, s.storecategory, s.storeid, u.userName, u.email, u.mobile FROM store s
    INNER JOIN userdetails u on u.userid = s.userid
    WHERE s.userid = '${userId}'`,
};
