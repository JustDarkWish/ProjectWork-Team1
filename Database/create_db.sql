-- project work
create database if not exists eventiaDB;
create user 'app_generation'@'localhost' identified by 'generation_2024';
grant all on eventiaDB.* to 'app_generation'@'localhost';
flush privileges;
