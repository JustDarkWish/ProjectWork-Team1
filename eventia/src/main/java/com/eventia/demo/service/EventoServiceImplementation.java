package com.eventia.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.eventia.demo.entity.Evento;
import com.eventia.demo.repository.EventoRepository;

@Service
public class EventoServiceImplementation implements EventoService{

	@Autowired
	EventoRepository eventoRepository;
	
	@Override
	public List<Evento> getAll() {
		List<Evento> eventi = eventoRepository.findAll();
		return eventi;
	}

	@Override
	public Optional<Evento> getById(Long eventoId) {
		Optional<Evento> eventoOptional = eventoRepository.findById(eventoId);
		return eventoOptional;
	}

	@Override
	public boolean getByTitoloExists(String titolo) {
		Optional<Evento> eventoOptional = eventoRepository.findByTitolo(titolo);
		return eventoOptional.isPresent();
		
	}

	@Override
	public Evento addOrUpdate(Evento evento) {
		Evento eventoNew = eventoRepository.save(evento);
		return eventoNew;
	}

	@Override
	public void deleteById(Evento evento) {
		eventoRepository.delete(evento);
	}


}
