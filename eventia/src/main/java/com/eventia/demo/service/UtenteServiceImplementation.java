package com.eventia.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.eventia.demo.DTO.EsitoLogin;
import com.eventia.demo.entity.Utente;
import com.eventia.demo.repository.UtenteRepository;

@Service
public class UtenteServiceImplementation implements UtenteService {

	@Autowired
	UtenteRepository utenteRepository;

	@Override
	public List<Utente> getAllUtenti() {
		List<Utente> utenti = utenteRepository.findAll();
		return utenti;
	}

	@Override
	public Optional<Utente> getById(Long utenteId) {
		Optional<Utente> utenteOptional = utenteRepository.findByUtenteId(utenteId);
		return utenteOptional;
	}

	@Override
	public Utente findByEmail(String email) {
		return utenteRepository.findByEmail(email);
	}

	@Override
	public Utente addOrUpdate(Utente utente) {
		Utente nuovoUtente = utenteRepository.save(utente);
		return nuovoUtente;
	}

	@Override
	public void deleteById(Utente utente) {
		utenteRepository.delete(utente);
	}

	@Override
	public EsitoLogin login(String email, String password) {
		Optional<Utente> utenteOptional = utenteRepository.findByEmailAndPassword(email, password);
		EsitoLogin esito = new EsitoLogin();

		if (utenteOptional.isEmpty()) {
			esito.setEsitoLogin(false);
			esito.setUtente(utenteOptional.get());
		} else {
			esito.setEsitoLogin(true);
			esito.setUtente(utenteOptional.get());
		}
		return esito;
	}

	@Override
	public boolean findByEmailExists(String email) {
		return false;
	}

}
