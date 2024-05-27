package com.eventia.demo.DTO;

import com.eventia.demo.entity.Utente;

public class EsitoLogin {

	private Utente utente;
	private boolean esitoLogin;

	public Utente getUtente() {
		return utente;
	}

	public void setUtente(Utente utente) {
		this.utente = utente;
	}

	public boolean isEsitoLogin() {
		return esitoLogin;
	}

	public void setEsitoLogin(boolean esitoLogin) {
		this.esitoLogin = esitoLogin;
	}

}
