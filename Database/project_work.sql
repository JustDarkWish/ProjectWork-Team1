CREATE TABLE IF NOT EXISTS utente (
utente_id int NOT NULL AUTO_INCREMENT primary key,
nome varchar(75) DEFAULT NULL,
cognome varchar(75) DEFAULT NULL,
data_nascita date DEFAULT NULL,
email varchar(50) NOT NULL,
password varchar(20) NOT NULL,
ruolo enum('RUOLO_ADMIN','RUOLO_UTENTE') NOT NULL
);

INSERT INTO `utenti`(nome,cognome,data_nascita,email,password,ruolo)
VALUES ('Paolo','Rossi','1994-06-07','admin@email.com','admin','RUOLO_ADMIN'),
('Carlo','Verdi','2001-03-19','utente@email.com','utente','RUOLO_UTENTE');

select * from utenti;

create table if not exists evento (
	evento_id int primary key auto_increment,
    tipologia enum ('concerto','film','teatro','mostre artistiche'),
    caratteristiche varchar(200),
    descrizione varchar(500),
    luogo_evento varchar(200),
    coordinate varchar(200),
    disponibilita boolean,
    posti smallint,
    data_evento date,
    locandina varchar(500),
    prezzo_listino decimal(6.2)
);