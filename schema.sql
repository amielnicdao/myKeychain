DROP DATABASE IF EXISTS keychainDB;
CREATE DATABASE keychainDB;

USE keychainDB;

CREATE TABLE users
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
    password varchar(255) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE passwords
(
	id int NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (id),
	type varchar(255) NOT NULL,
    password varchar(255) NOT NULL,
    user_id int NOT NULL REFERENCES users(id)
);