package com.eventia.demo.restcontroller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.eventia.demo.DTO.EsitoLogin;
import com.eventia.demo.DTO.LoginDTO;
import com.eventia.demo.entity.Utente;
import com.eventia.demo.service.UtenteService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("api/login")
public class LoginController {

	@Autowired
	UtenteService utenteService;

	@PostMapping
	public Utente login(@RequestBody LoginDTO login) {
		EsitoLogin esito = utenteService.login(login.getEmail(), login.getPassword());

		if (esito.isEsitoLogin()) {
			return esito.getUtente();
		} else {
			Utente utente = new Utente();
			return utente;
		}
	}

}
