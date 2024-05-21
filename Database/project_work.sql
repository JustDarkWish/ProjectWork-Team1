CREATE TABLE IF NOT EXISTS utente (
    utenteId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(75) DEFAULT NULL,
    cognome VARCHAR(75) DEFAULT NULL,
    data_nascita DATE DEFAULT NULL,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(20) NOT NULL,
    ruolo ENUM('RUOLO_ADMIN', 'RUOLO_UTENTE') NOT NULL
);

INSERT INTO utente (nome,cognome,data_nascita,email,password,ruolo)
VALUES ('Paolo','Rossi','1994-06-07','admin@email.com','admin','RUOLO_ADMIN'),
('Carlo','Verdi','2001-03-19','utente@email.com','utente','RUOLO_UTENTE');

SELECT 
    *
FROM
    utente;

CREATE TABLE IF NOT EXISTS evento (
    eventoId INT PRIMARY KEY AUTO_INCREMENT,
    tipologia ENUM('concerto', 'film', 'teatro', 'mostre artistiche'),
    caratteristiche VARCHAR(200),
    descrizione VARCHAR(500),
    luogo_evento VARCHAR(200),
    coordinate VARCHAR(200),
    disponibilita BOOLEAN,
    posti SMALLINT,
    data_evento DATE,
    locandina VARCHAR(500),
    prezzo_listino DECIMAL(6.2)
);