CREATE TABLE `store` (
  `storeid` INT AUTO_INCREMENT PRIMARY KEY,
  `storename` VARCHAR(255) NOT NULL,
  `storecategory` VARCHAR(255) NOT NULL,
  `userid` INT(11),
  `createdDate` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (`userid`) REFERENCES `userdetails`(`userid`)
);
