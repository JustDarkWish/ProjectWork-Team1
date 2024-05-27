package com.eventia.demo.restcontroller;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.eventia.demo.entity.Evento;
import com.eventia.demo.entity.Prenotazione;
import com.eventia.demo.entity.Utente;
import com.eventia.demo.service.EventoService;
import com.eventia.demo.service.PrenotazioneService;
import com.eventia.demo.service.UtenteService;

@RestController
@RequestMapping("api/prenotazione")
public class PrenotazioneController {

	private final PrenotazioneService prenotazioneService;
	private final UtenteService utenteService;
	private final EventoService eventoService;

	public PrenotazioneController(PrenotazioneService prenotazioneService, UtenteService utenteService,
			EventoService eventoService) {
		this.prenotazioneService = prenotazioneService;
		this.utenteService = utenteService;
		this.eventoService = eventoService;
	}

	@GetMapping
	public List<Prenotazione> getAllPrenotazioni() {
		return prenotazioneService.getAll();
	}
	
	@GetMapping("/{prenotazione-id}")
	public ResponseEntity<Prenotazione> getPrenotazioneById(@PathVariable("prenotazione-id") long prenotazioneId) {
		Optional<Prenotazione> prenotazioneOptional = prenotazioneService.getById(prenotazioneId);

		if (prenotazioneOptional.isEmpty()) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		} else {
			return ResponseEntity.ok(prenotazioneOptional.get());
		}
	}

	@PostMapping("/utente/{utenteId}/evento/{eventoId}")
	public ResponseEntity<Prenotazione> addPrenotazione(@RequestBody Prenotazione prenotazione,
			@PathVariable Long utenteId,
			@PathVariable Long eventoId) {
		try {
			Utente utente = utenteService.getById(utenteId).get();
			Evento evento = eventoService.getById(eventoId).get();
			if (utente == null || evento == null) {
				return ResponseEntity.badRequest().build();
			}
			prenotazione.setUtente(utente);
			prenotazione.setEvento(evento);

			prenotazioneService.addOrUpdate(prenotazione);

			return ResponseEntity.ok(prenotazione);
		} catch (Exception e) {
			return ResponseEntity.internalServerError().build();
		}
	}

	@DeleteMapping("/utente/{utenteId}/evento/{eventoId}")
	public ResponseEntity<Void> deletePrenotazione(@PathVariable("utenteId") Long utenteId,
			@PathVariable("eventoId") Long eventoId) {
		try {
			Utente utente = utenteService.getById(utenteId).get();
			Evento evento = eventoService.getById(eventoId).get();

			Optional<Prenotazione> prenotazione = prenotazioneService.findByUtenteAndEvento(utente, evento);

			prenotazioneService.delete(prenotazione.get());
			return ResponseEntity.noContent().build();
		} catch (Exception e) {
 			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
	}

}
