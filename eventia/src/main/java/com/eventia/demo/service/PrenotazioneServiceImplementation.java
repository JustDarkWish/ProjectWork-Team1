package com.eventia.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.eventia.demo.entity.Evento;
import com.eventia.demo.entity.Prenotazione;
import com.eventia.demo.entity.Utente;
import com.eventia.demo.repository.PrenotazioneRepository;

@Service
public class PrenotazioneServiceImplementation implements PrenotazioneService {

	@Autowired
	PrenotazioneRepository prenotazioneRepository;

	@Override
	public List<Prenotazione> getAll() {
		List<Prenotazione> prenotazioni = prenotazioneRepository.findAll();
		return prenotazioni;
	}

	@Override
	public Optional<Prenotazione> getById(Long prenotazioneId) {
		Optional<Prenotazione> prenotazioneOptional = prenotazioneRepository.findById(prenotazioneId);
		return prenotazioneOptional;
	}

	@Override
	public Optional<Prenotazione> findByUtenteAndEvento(Utente utente, Evento evento) {

		try {
			return prenotazioneRepository.findByUtenteAndEvento(utente, evento);
		} catch (Exception e) {
			System.out.println(e);
		}
		return null;
	}

	@Override
	public List<Prenotazione> getByUtente(Utente utente) {
		try {
			return prenotazioneRepository.getByUtente(utente);
		} catch (Exception e) {
			System.out.println(e);
		}
		return null;
	}

	@Override
	public Prenotazione addOrUpdate(Prenotazione prenotazione) {
		return prenotazioneRepository.save(prenotazione);
	}

	@Override
	public void delete(Prenotazione prenotazione) {
		prenotazioneRepository.delete(prenotazione);
	}

}
