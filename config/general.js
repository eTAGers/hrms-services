let dbConfig = {};
dbConfig = {
  host: "154.41.233.204",
  user: "u682599449_hrms",
  password: "Etagers@123",
  database: "u682599449_hrms",
};
let s3Bucket = "";
s3Bucket = "ecom/dev";
module.exports = {
  ...dbConfig,
  s3Bucket,
};
