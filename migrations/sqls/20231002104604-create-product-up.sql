CREATE TABLE `products` (
  `storeid` INT,
  `productid` INT AUTO_INCREMENT PRIMARY KEY,
  `productJson` JSON,
  FOREIGN KEY (`storeid`) REFERENCES `store`(`storeid`)
);
