package com.eventia.demo.service;

import java.util.List;
import java.util.Optional;

import com.eventia.demo.DTO.EsitoLogin;
import com.eventia.demo.entity.Utente;

public interface UtenteService {

	List<Utente> getAllUtenti();

	Optional<Utente> getById(Long utente_id);

	Utente findByEmail(String email);

	boolean findByEmailExists(String email);

	Utente addOrUpdate(Utente utente);

	void deleteById(Utente utente);

	EsitoLogin login(String email, String password);

}
