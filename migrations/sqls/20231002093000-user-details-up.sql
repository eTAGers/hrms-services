-- u682599449_ECOMMERCEDB.userdetails definition

CREATE TABLE `userdetails` (
  `userid` INT AUTO_INCREMENT PRIMARY KEY,
  `userName` VARCHAR(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `email` VARCHAR(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `mobile` VARCHAR(15) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `password` VARCHAR(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `hashedpassword` VARCHAR(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  UNIQUE KEY `unique_email` (`email`),
  UNIQUE KEY `unique_mobile` (`mobile`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;



INSERT INTO u682599449_ECOMMERCEDB.userdetails
(userid, userName, email, mobile, password, hashedpassword)
VALUES(1, 'Admin', 'admin@mail.com', '1234567890', '123456', '$2b$10$7F6QXC627xW00gbiXgvgjea3vfDWaT6R10k6sDf/qzLtgfuaaH9VO');
