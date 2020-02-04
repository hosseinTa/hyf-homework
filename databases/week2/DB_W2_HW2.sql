-- Create a new database containing the following tables
CREATE DATABASE school;

USE school;

-- Class: with the columns: id, name, begins (date), ends (date)
DROP TABLE class;
CREATE TABLE class 
(id INT UNSIGNED NOT NULL AUTO_INCREMENT,
name VARCHAR(50),
begin_date DATETIME NOT NULL,
end_date DATETIME,
PRIMARY KEY (id));

-- Student: with the columns: id, name, email, phone, class_id (foreign key)
CREATE TABLE student 
(id INT UNSIGNED NOT NULL AUTO_INCREMENT,
name VARCHAR(50) NOT NULL,
email VARCHAR(50),
phone INTEGER(8),
class_id INT UNSIGNED,
PRIMARY KEY (id),
FOREIGN KEY (class_id) REFERENCES class(id));

-- Create an index on the name column of the student table.
INSERT INTO class 
( name , begin_date)
VALUES
( 'FRONT END DEVELOPMENT' ,
'2019-11-23 21:32:13');

INSERT INTO student
( name , email , class_id)
VALUES 
('John Doe',
'JD@example.dk',
1);

-- Add a new column to the class table named status which can only have 
-- the following values: not-started, ongoing, finished (hint: enumerations).
ALTER TABLE class
ADD status ENUM ('not-started' , 'ongoing' , 'finished');