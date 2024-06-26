let titolo= document.getElementById('titolo');
let tipologia= document.getElementById('tipologia');
let descrizione= document.getElementById('descrizione');
let luogoEvento= document.getElementById('luogo');
let disponibilità= document.getElementById('disponibilità');
let posti= document.getElementById('posti');
let dataEvento= document.getElementById('data');
let locandinaURL= document.getElementById('locandina');
let prezzoListino= document.getElementById('prezzo');
let btnCrea=document.getElementById('btnCrea');

let utente=localStorage.getItem('UtenteId');

const url = `http://localhost:8080/api/evento/utente/${utente}`;

class Evento{
    constructor(titolo,tipologia,descrizione,luogoEvento,disponibilità,posti,dataEvento,locandinaURL,prezzoListino){
        this.titolo=titolo;
        this.tipologia=tipologia;
        this.descrizione=descrizione;
        this.luogoEvento=luogoEvento;
        this.disponibilità=disponibilità;
        this.posti=posti;
        this.dataEvento=dataEvento;
        this.locandinaURL=locandinaURL;
        this.prezzoListino=prezzoListino;
    }
}

function creaEvento() {
    let evento= new Evento(titolo.value,tipologia.value,descrizione.value,luogoEvento.value,disponibilità.value,posti.value,dataEvento.value,locandinaURL.value,prezzoListino.value);
    // console.log(JSON.stringify(evento));
    fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        
        },
        body: JSON.stringify(evento),
},
window.location.reload()
);
}
btnCrea.addEventListener('click',creaEvento);