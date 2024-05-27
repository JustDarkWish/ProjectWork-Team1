package com.eventia.demo.DTO;

import java.time.LocalDate;

import com.eventia.demo.entity.Utente;
import com.eventia.demo.entity.Utente.Ruolo;

import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;

public class UtenteDTO {

	private long utenteId;
	private String nome;
	private String cognome;
	private LocalDate dataNascita;
	private String email;
	private String password;
	
	@Enumerated(EnumType.STRING)
	private Ruolo ruolo;
	
	public UtenteDTO(long utenteId2, String nome2, String email2, String password2) {
	}

	public UtenteDTO() {
		super();
	}

	public Utente toUtenteEntity() {
		return new Utente(
				this.getUtenteId(),
				this.getNome(),
				this.getCognome(),
				this.getDataNascita(),
				this.getEmail(),
				this.getPassword(),
				this.getRuolo()
				);
	}
	
	public static UtenteDTO toUtenteDTO(Utente utente) {
		if (utente == null) {
			throw new IllegalArgumentException("L'entità utente non puo essere nulla");
		}
		return new UtenteDTO(
				utente.getUtenteId(),
				utente.getNome(),
				utente.getEmail(),
				utente.getPassword()
				);
	}

	public long getUtenteId() {
		return utenteId;
	}

	public void setUtenteId(long utenteId) {
		this.utenteId = utenteId;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getCognome() {
		return cognome;
	}

	public void setCognome(String cognome) {
		this.cognome = cognome;
	}

	public LocalDate getDataNascita() {
		return dataNascita;
	}

	public void setDataNascita(LocalDate dataNascita) {
		this.dataNascita = dataNascita;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Ruolo getRuolo() {
		return ruolo;
	}

	public void setRuolo(Ruolo ruolo) {
		this.ruolo = ruolo;
	}
	
}
