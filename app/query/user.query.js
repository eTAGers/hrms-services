module.exports = {
  loginByEmail: (email) =>
    `SELECT userid, userName, email, mobile, hashedpassword FROM userdetails WHERE email = '${email}'`,
  loginByMobile: (mobile) =>
    `SELECT userid, userName, email, mobile, hashedpassword FROM userdetails WHERE mobile = '${mobile}'`,
};
