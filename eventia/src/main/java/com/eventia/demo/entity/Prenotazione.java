package com.eventia.demo.entity;

import java.math.BigDecimal;
import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Prenotazione {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "prenotazione_id")
	private Long prenotazioneId;
	
	@Column(name = "prezzo_vendita")
	private BigDecimal prezzoVendita;

	@Column(name = "data_prenotazione")
	private LocalDate dataPrenotazione;

	@Column(name = "quantita_posti")
	private int quantitaPosti;

	@ManyToOne
	@JoinColumn(name = "utente_id")
	private Utente utente;

	@ManyToOne
	@JoinColumn(name = "evento_id")
	private Evento evento;

	public Prenotazione(Long prenotazioneId, BigDecimal prezzoVendita, LocalDate dataPrenotazione, int quantitaPosti,
			Utente utente, Evento evento) {
		super();
		this.prenotazioneId = prenotazioneId;
		this.prezzoVendita = prezzoVendita;
		this.dataPrenotazione = dataPrenotazione;
		this.quantitaPosti = quantitaPosti;
		this.utente = utente;
		this.evento = evento;
	}

	public Prenotazione() {
	}

	public Long getPrenotazioneId() {
		return prenotazioneId;
	}

	public void setPrenotazioneId(Long prenotazioneId) {
		this.prenotazioneId = prenotazioneId;
	}

	public BigDecimal getPrezzoVendita() {
		return prezzoVendita;
	}

	public void setPrezzoVendita(BigDecimal prezzoVendita) {
		this.prezzoVendita = prezzoVendita;
	}

	public LocalDate getDataPrenotazione() {
		return dataPrenotazione;
	}

	public void setDataPrenotazione(LocalDate dataPrenotazione) {
		this.dataPrenotazione = dataPrenotazione;
	}

	public int getQuantitaPosti() {
		return quantitaPosti;
	}

	public void setQuantitaPosti(int quantitaPosti) {
		this.quantitaPosti = quantitaPosti;
	}

	public Utente getUtente() {
		return utente;
	}

	public void setUtente(Utente utente) {
		this.utente = utente;
	}

	public Evento getEvento() {
		return evento;
	}

	public void setEvento(Evento evento) {
		this.evento = evento;
	}

}
