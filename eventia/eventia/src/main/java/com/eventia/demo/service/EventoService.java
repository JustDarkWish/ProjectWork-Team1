package com.eventia.demo.service;

import java.util.List;
import java.util.Optional;

import com.eventia.demo.entity.Evento;

public interface EventoService {

	// Read
	List<Evento> getAll();
	Optional<Evento> getById(Long eventoId);
	boolean getByTitoloExists(String titolo);

	// Create, Update
	Evento addOrUpdate(Evento evento);

	// Delete
	void deleteById(Evento evento);

}
