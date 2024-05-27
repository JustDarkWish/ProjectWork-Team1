package com.eventia.demo.restcontroller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.eventia.demo.DTO.UtenteDTO;
import com.eventia.demo.entity.Utente;
import com.eventia.demo.service.UtenteService;

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

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("api/utente")
public class UtenteController {

	@Autowired
	UtenteService utenteService;

	@GetMapping
	public List<Utente> getAllUtenti() {
		return utenteService.getAllUtenti();
	}

	@GetMapping("/{utente-id}")
	public ResponseEntity<Utente> getUtenteById(@PathVariable("utente-id") long utenteId) {
		Optional<Utente> utenteOptional = utenteService.getById(utenteId);

		if (utenteOptional.isEmpty()) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		} else {
			return ResponseEntity.ok(utenteOptional.get());
		}
	}

	@PostMapping
	public ResponseEntity<?> addUtente(@RequestBody UtenteDTO utenteDTO) {
		Utente utente = utenteDTO.toUtenteEntity();

		boolean esiste = utenteService.findByEmailExists(utente.getEmail());

		if (esiste) {
			return new ResponseEntity<UtenteDTO>(utenteDTO, HttpStatus.BAD_REQUEST);
		} else {
			Utente utenteNew = utenteService.addOrUpdate(utente);
			return new ResponseEntity<Utente>(utenteNew, HttpStatus.OK);
		}
	}

	@PutMapping("/{utenteId}")
	public ResponseEntity<?> updateUtente(@RequestBody UtenteDTO utenteDTO, @PathVariable("utenteId") Long utenteId) {
		try {
			Optional<Utente> utenteOptional = utenteService.getById(utenteId);
			if(utenteOptional != null) {
				Utente utente = utenteDTO.toUtenteEntity();
				utente.setUtenteId(utenteId);
				Utente utenteNew = utenteService.addOrUpdate(utente);
				return new ResponseEntity<>(utenteNew, HttpStatus.OK);
			} else {
				return new ResponseEntity<>(utenteDTO, HttpStatus.NOT_FOUND);
			}
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@DeleteMapping("/{utente-id}")
	public ResponseEntity<Utente> deleteUtente(@PathVariable("utente-id") Long utenteId) {
		try {
			Optional<Utente> utenteOptional = utenteService.getById(utenteId);
			if (utenteOptional.isEmpty()) {
				return new ResponseEntity<Utente>(new Utente(), HttpStatus.NOT_FOUND);
			} else {

				utenteService.deleteById(utenteOptional.get());
				return new ResponseEntity<Utente>(utenteOptional.get(), HttpStatus.OK);
			}
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

}
