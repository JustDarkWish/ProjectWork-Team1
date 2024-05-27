package com.eventia.demo.entity;

import java.time.LocalDate;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "utente")
public class Utente {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "utente_id")
	private long utenteId;
	private String nome;
	private String cognome;
	@Column(name = "data_nascita")
	private LocalDate dataNascita;
	private String email;

	@JsonIgnore
	private String password;

	@Enumerated(EnumType.STRING)
	private Ruolo ruolo;

	@JsonIgnore
	@OneToMany(mappedBy = "utente")
	private List<Prenotazione> prenotazioni;

	public Utente(long utenteId, String nome, String cognome, LocalDate data_nascita, String email, String password,
			Ruolo ruolo) {
		this.utenteId = utenteId;
		this.nome = nome;
		this.cognome = cognome;
		this.dataNascita = data_nascita;
		this.email = email;
		this.password = password;
		this.ruolo = ruolo;
	}

	public Utente() {
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

	public enum Ruolo {
		RUOLO_ADMIN, RUOLO_UTENTE
	}

	public Ruolo getRuolo() {
		return ruolo;
	}

	public void setRuolo(Ruolo ruolo) {
		this.ruolo = ruolo;
	}

	public List<Prenotazione> getPrenotazioni() {
		return prenotazioni;
	}

	public void setPrenotazioni(List<Prenotazione> prenotazioni) {
		this.prenotazioni = prenotazioni;
	}

}
