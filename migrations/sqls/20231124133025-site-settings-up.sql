CREATE TABLE sitesettings (
    id INT PRIMARY KEY AUTO_INCREMENT,
    storeId INT NOT NULL,
    settingsJson LONGTEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
