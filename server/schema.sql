CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
    message_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    text text,
    created_at DATETIME
);

CREATE TABLE roomnames (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name text
);

CREATE TABLE usernames (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name text
);

CREATE TABLE joinTable (
    user_id INT,
    room_id text,
    message_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT
);



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

