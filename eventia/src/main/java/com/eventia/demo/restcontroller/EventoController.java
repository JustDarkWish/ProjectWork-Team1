package com.eventia.demo.restcontroller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.eventia.demo.DTO.EventoDTO;
import com.eventia.demo.entity.Evento;
import com.eventia.demo.entity.Utente;
import com.eventia.demo.entity.Utente.Ruolo;
import com.eventia.demo.service.EventoService;
import com.eventia.demo.service.UtenteService;

@CrossOrigin
@RestController
@RequestMapping("api/evento")
public class EventoController {

	@Autowired
	EventoService eventoService;

	@Autowired
	UtenteService utenteService;

	@GetMapping
	public ResponseEntity<List<Evento>> getallEventi() {
		try {
			List<Evento> eventi = eventoService.getAll();
			return new ResponseEntity<>(eventi, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/{evento-id}")
	public ResponseEntity<Evento> getByIdEvento(@PathVariable("evento-id") Long eventoId) {

		Optional<Evento> eventoOptional = eventoService.getById(eventoId);
		if (eventoOptional.isEmpty()) {
			return new ResponseEntity<Evento>(new Evento(), HttpStatus.NOT_FOUND);
		} else {
			return new ResponseEntity<Evento>(eventoOptional.get(), HttpStatus.OK);
		}
	}

	@PostMapping("/utente/{utenteId}")
	public ResponseEntity<?> addEvento(@RequestBody EventoDTO eventoDTO, @PathVariable("utenteId") Long utenteId) {
		Optional<Utente> utenteOptional = utenteService.getById(utenteId);
		if (!utenteOptional.isEmpty() && utenteOptional.get().getRuolo() == Ruolo.RUOLO_ADMIN) {
			Evento evento = eventoDTO.toEventoEntity();
			Evento eventoNew = eventoService.addOrUpdate(evento);
			return new ResponseEntity<Evento>(eventoNew, HttpStatus.OK);
		} else {
			return new ResponseEntity<EventoDTO>(eventoDTO, HttpStatus.NOT_FOUND);
		}
	}

	@PutMapping("/{eventoId}/utente/{utenteId}")
	public ResponseEntity<?> updateEvento(@RequestBody EventoDTO eventoDTO, @PathVariable("utenteId") Long utenteId,
			@PathVariable("eventoId") Long eventoId) {
		try {
			Optional<Utente> utenteOptional = utenteService.getById(utenteId);
			if (!utenteOptional.isEmpty() && utenteOptional.get().getRuolo() == Ruolo.RUOLO_ADMIN) {
				Evento evento = eventoDTO.toEventoEntity();
				evento.setEventoId(eventoId);
				Evento eventoNew = eventoService.addOrUpdate(evento);
				return new ResponseEntity<>(eventoNew, HttpStatus.OK);
			} else {
				return new ResponseEntity<>(eventoDTO, HttpStatus.NOT_FOUND);
			}
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@DeleteMapping("/{evento-id}")
	public ResponseEntity<Evento> deleteEvento(@PathVariable("evento-id") Long eventoId) {
		try {
			Optional<Evento> eventoOptional = eventoService.getById(eventoId);
			if (eventoOptional.isEmpty()) {
				return new ResponseEntity<Evento>(new Evento(), HttpStatus.NOT_FOUND);
			} else {
				eventoService.deleteById(eventoOptional.get());
				return new ResponseEntity<Evento>(eventoOptional.get(), HttpStatus.OK);
			}
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

}