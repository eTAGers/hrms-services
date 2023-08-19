const utilityQuery = {
  selectUserDetails: `select userid, userName, email, mobile from userdetails where email = ?`,
};

module.exports = utilityQuery;
