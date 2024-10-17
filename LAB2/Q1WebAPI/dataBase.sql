create database Lab2Mobile;
use Lab2Mobile;
CREATE TABLE LibraryManager  (
	bookID int,
	bookName varchar(100),  
	bookDescription varchar(512),
    price decimal(18,2),
    bookNote varchar(128)
);
ALTER TABLE LibraryManager
ADD PRIMARY KEY (bookID);