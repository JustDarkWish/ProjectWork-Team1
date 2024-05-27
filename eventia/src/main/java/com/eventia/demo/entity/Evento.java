package com.eventia.demo.entity;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

@Entity
public class Evento {

	@Id
	@Column(name = "evento_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long eventoId;

	private String titolo;
	private String tipologia;
	private String descrizione;
	
	@Column(name = "luogo_evento")
	private String luogoEvento;
	
	private boolean disponibilita;
	private int posti;

	@Column(name = "data_evento")
	private LocalDate dataEvento;

	@Column(name = "locandina_url")
	private String locandinaURL;

	@Column(name = "prezzo_listino")
	private BigDecimal prezzoListino;

	@JsonIgnore
	@OneToMany(mappedBy = "evento")
	private List<Prenotazione> prenotazioni;

	public Evento(Long eventoId, String titolo, String tipologia, String descrizione, String luogoEvento,
			boolean disponibilita, int posti, LocalDate dataEvento, String locandinaURL, BigDecimal prezzoListino) {
		super();
		this.eventoId = eventoId;
		this.titolo = titolo;
		this.tipologia = tipologia;
		this.descrizione = descrizione;
		this.luogoEvento = luogoEvento;
		this.disponibilita = disponibilita;
		this.posti = posti;
		this.dataEvento = dataEvento;
		this.locandinaURL = locandinaURL;
		this.prezzoListino = prezzoListino;
	}

	public Evento() {
	}

	public Long getEventoId() {
		return eventoId;
	}

	public void setEventoId(Long eventoId) {
		this.eventoId = eventoId;
	}

	public String getTitolo() {
		return titolo;
	}

	public void setTitolo(String titolo) {
		this.titolo = titolo;
	}

	public String getTipologia() {
		return tipologia;
	}

	public void setTipologia(String tipologia) {
		this.tipologia = tipologia;
	}

	public String getDescrizione() {
		return descrizione;
	}

	public void setDescrizione(String descrizione) {
		this.descrizione = descrizione;
	}

	public String getLuogoEvento() {
		return luogoEvento;
	}

	public void setLuogoEvento(String luogoEvento) {
		this.luogoEvento = luogoEvento;
	}

	public boolean isDisponibilita() {
		return disponibilita;
	}

	public void setDisponibilita(boolean disponibilita) {
		this.disponibilita = disponibilita;
	}

	public int getPosti() {
		return posti;
	}

	public void setPosti(int posti) {
		this.posti = posti;
	}

	public LocalDate getDataEvento() {
		return dataEvento;
	}

	public void setDataEvento(LocalDate dataEvento) {
		this.dataEvento = dataEvento;
	}

	public String getLocandinaURL() {
		return locandinaURL;
	}

	public void setLocandinaURL(String locandinaURL) {
		this.locandinaURL = locandinaURL;
	}

	public BigDecimal getPrezzoListino() {
		return prezzoListino;
	}

	public void setPrezzoListino(BigDecimal prezzoListino) {
		this.prezzoListino = prezzoListino;
	}

	public List<Prenotazione> getPrenotazioni() {
		return prenotazioni;
	}

	public void setPrenotazioni(List<Prenotazione> prenotazioni) {
		this.prenotazioni = prenotazioni;
	}

	
}
