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
