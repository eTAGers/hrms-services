module.exports = {
  loginByEmail: (email) =>
    `SELECT userid, userName, email, mobile, hashedpassword FROM userdetails WHERE email = '${email}'`,
  loginByMobile: (mobile) =>
    `SELECT userid, userName, email, mobile, hashedpassword FROM userdetails WHERE mobile = '${mobile}'`,
  store: (userid) =>
    `SELECT storename, storecategory, storeid FROM store WHERE userid = '${userid}'`,
};
