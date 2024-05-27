let titolo= document.getElementById('titolo');
let tipologia= document.getElementById('tipologia');
let caratteristiche= document.getElementById('carateristiche');
let descrizione= document.getElementById('descrizione');
let luogoEvento= document.getElementById('luogo');
let coordinate= document.getElementById('coordinate');
let disponibilità= document.getElementById('disponibilità');
let posti= document.getElementById('posti');
let dataEvento= document.getElementById('data');
let locandinaUrl= document.getElementById('locandina');
let prezzoListino= document.getElementById('prezzo');
let btnCrea=document.getElementById('btnCrea');

let utente=localStorage.getItem('UtenteId')

const url = `localhost:8080/api/evento/utente/${utente}`;

class Evento{
    constructor(titolo,tipologia,caratteristiche,descrizione,luogoEvento,coordinate,disponibilità,posti,dataEvento,locandinaUrl,prezzoListino){
        
        this.titolo=titolo;
        this.tipologia=tipologia;
        this.caratteristiche=caratteristiche;
        this.descrizione=descrizione;
        this.luogoEvento=luogoEvento;
        this.coordinate=coordinate;
        this.disponibilità=disponibilità;
        this.posti=posti;
        this.dataEvento=dataEvento;
        this.locandinaUrl=locandinaUrl;
        this.prezzoListino=prezzoListino;
    }
}

function creaEvento() {
    let evento= new Evento(titolo.value,tipologia.value,caratteristiche.value,descrizione.value,luogoEvento.value,coordinate.value,disponibilità.value,posti.value,dataEvento.value,locandinaUrl.value,prezzoListino.value);

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
btnCrea.addEventListener('click',creaEvento)