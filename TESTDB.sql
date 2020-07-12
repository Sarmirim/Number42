CREATE DATABASE newdb;

USE newdb;

CREATE TABLE models (
  id INT(11) NOT NULL,
  username VARCHAR(45) NOT NULL,
  role VARCHAR(45),
  email VARCHAR(45) NOT NULL,
  password VARCHAR(100) NOT NULL,
  created VARCHAR(60) NOT NULL,

);

ALTER TABLE models
  ADD PRIMARY KEY (id);

ALTER TABLE models
  MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;