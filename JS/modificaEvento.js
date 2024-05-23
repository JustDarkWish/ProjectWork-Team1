
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
let btnModifica=document.getElementById('btnModifica');
let btnElimina=document.getElementById('btnElimina');


let test= document.getElementById('test');


let eventoOg=localStorage.getItem('Evento');
console.log(eventoOg);

test.innerHTML=``
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

function elimina() {
    localStorage.removeItem('Evento');
    window.location.href='../PAGES/pannello.html';
}
function modifica() {
    let evento= new Evento(titolo.value,tipologia.value,caratteristiche.value,descrizione.value,luogoEvento.value,coordinate.value,disponibilità.value,posti.value,dataEvento.value,locandinaUrl.value,prezzoListino.value);
    localStorage.setItem('Evento',JSON.stringify(evento));
    console.log(evento);
}

btnElimina.addEventListener('click',elimina);
btnModifica.addEventListener('click',modifica);