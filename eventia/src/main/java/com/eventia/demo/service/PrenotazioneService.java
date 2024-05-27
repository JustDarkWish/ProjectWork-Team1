package com.eventia.demo.service;

import java.util.List;
import java.util.Optional;

import com.eventia.demo.entity.Evento;
import com.eventia.demo.entity.Prenotazione;
import com.eventia.demo.entity.Utente;

public interface PrenotazioneService {

	List<Prenotazione> getAll();
	
	Optional<Prenotazione> getById(Long prenotazioneId);
	
	Optional<Prenotazione> findByUtenteAndEvento(Utente utente, Evento evento);
	List<Prenotazione> getByUtente(Utente utente);
	
	Prenotazione addOrUpdate(Prenotazione prenotazione);
	
	void delete(Prenotazione prenotazione);
	
}
