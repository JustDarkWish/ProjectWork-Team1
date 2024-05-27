package com.eventia.demo.DTO;

import java.math.BigDecimal;
import java.time.LocalDate;

import com.eventia.demo.entity.Evento;

public class EventoDTO {

	private long eventoId;
	private String titolo;
	private String tipologia;
	private String descrizione;
	private String luogoEvento;
	private boolean disponibilita;
	private int posti;
	private LocalDate dataEvento;
	private String locandinaURL;
	private BigDecimal prezzoListino;
	
	public Evento toEventoEntity() {
		return new Evento(
				this.getEventoId(),
				this.getTitolo(),
				this.getTipologia(),
				this.getDescrizione(),
				this.getLuogoEvento(),
				this.isDisponibilita(),
				this.getPosti(),
				this.getDataEvento(),
				this.getLocandinaURL(),
				this.getPrezzoListino()				
				);
	}

	public long getEventoId() {
		return eventoId;
	}

	public void setEventoId(long eventoId) {
		this.eventoId = eventoId;
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

	public String getTitolo() {
		return titolo;
	}

	public void setTitolo(String titolo) {
		this.titolo = titolo;
	}

}
