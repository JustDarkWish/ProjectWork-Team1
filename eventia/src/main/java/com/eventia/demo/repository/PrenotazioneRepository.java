package com.eventia.demo.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.eventia.demo.entity.Evento;
import com.eventia.demo.entity.Prenotazione;
import com.eventia.demo.entity.Utente;

@Repository
public interface PrenotazioneRepository extends JpaRepository<Prenotazione, Long>{

	Optional<Prenotazione> findByUtenteAndEvento(Utente utente, Evento evento);
	
	List<Prenotazione> getByUtente(Utente utente);


}
