CREATE SEQUENCE UserIdSequence
    START WITH 1
    INCREMENT BY 1;
    
    
CREATE TABLE userdetails (
    userid INT PRIMARY KEY DEFAULT (NEXT VALUE FOR UserIdSequence),
    userName NVARCHAR(255),
    email NVARCHAR(255),
    mobile NVARCHAR(15),
    password NVARCHAR(255),
    hashedpassword NVARCHAR(255)
);

DELIMITER //

CREATE PROCEDURE create_user (
    IN p_userName NVARCHAR(255),
    IN p_email NVARCHAR(255),
    IN p_mobile NVARCHAR(15),
    IN p_password NVARCHAR(255),
    IN p_hashedpassword NVARCHAR(255)
)
BEGIN
    INSERT INTO userdetails (userName, email, mobile, password, hashedpassword)
    VALUES (p_userName, p_email, p_mobile, p_password, p_hashedpassword);
END;

//

DELIMITER ;



CREATE TABLE store (
  storeid INT AUTO_INCREMENT PRIMARY KEY,
  storename VARCHAR(255) NOT NULL,
  userid INT,
  FOREIGN KEY (userid) REFERENCES userdetails(userid)
);



CREATE OR REPLACE PROCEDURE create_store(
  IN p_userId INT,
  IN p_storeName VARCHAR(255),
  IN p_storeCategory VARCHAR(255)
)
BEGIN
    INSERT INTO store (userid, storename, storecategory)
    VALUES (p_userId, p_storeName, p_storeCategory);
END
