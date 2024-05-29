
let titolo= document.getElementById('titolo');
let tipologia= document.getElementById('tipologia');
let descrizione= document.getElementById('descrizione');
let luogoEvento= document.getElementById('luogo');
let disponibilità= document.getElementById('disponibilità');
let posti= document.getElementById('posti');
let dataEvento= document.getElementById('data');
let locandinaURL= document.getElementById('locandina');
let prezzoListino= document.getElementById('prezzo');
let btnModifica=document.getElementById('btnModifica');
let btnElimina=document.getElementById('btnElimina');

let utente=localStorage.getItem('UtenteId');
let test= document.getElementById('test');
// CARD

let eventoOg=localStorage.getItem('Evento');
console.log(eventoOg);

let cardBody= document.querySelector('#cardBody');
let filmArray=[];
function scegliFilm() {
    let film='http://localhost:8080/api/evento';
    fetch(film)
    .then(response =>{
        return response.json();
        
    })
    .then(prodotto=>{
        prodotto.forEach(elemento => {
         filmArray.push(elemento);
 
        });
        stampa(filmArray);
    });
}
scegliFilm();

function stampa(filmArray) {
    filmArray.forEach(film => {
        let card= `<div class="swiper-slide">
        <div class="card">
        <img src="${film.locandinaURL}" alt="">
        <div class="card-body d-flex flex-column">
        <h5 id="nomeSkincare" class="card-title">${film.titolo}</h5>
        <p id="brandSkincare" class="card-text">Numero di posti: ${film.posti}</p>
        <p id="descrizioneSkincare" class="card-text">${film.descrizione}</p>
        <p id="descrizioneSkincare" class="card-text">${film.luogoEvento}</p>
        <p id="descrizioneSkincare" class="card-text">${film.dataEvento}</p>
        <p id="prezzoSkincare" class="card-text">${film.prezzoListino}€</p>
        <button class="btnAltreInfo" id="${film.eventoId}" type="button" class="btn btn-primary mt-auto" data-bs-toggle="modal" data-bs-target="#prodotto1Modal"> prendi id per modificare o eliminare</button>
        </div>
        </div>
        </div>`;
        cardBody.innerHTML+=card;
        return film;
    });
    document.querySelectorAll('.btnAltreInfo').forEach(btn => {
        btn.addEventListener('click', altreInfo);
    });


}
function altreInfo() {
    let prodottoId = event.target.getAttribute('id');
    localStorage.setItem('id', prodottoId);
    console.log(prodottoId);
    return prodottoId;
}
// FUNZIONI ELIMINA MODIFICA

test.innerHTML=``
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

async function elimina() {
    event.preventDefault();
    let Id=localStorage.getItem('id')
    let urlElimina=`http://localhost:8080/api/evento/${Id}`;
    fetch(urlElimina, {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json',
    },
})
window.location.reload();
}
async function modifica() {
    event.preventDefault();
    let Id=localStorage.getItem('id')
    let urlModifica = `http://localhost:8080/api/evento/${Id}/utente/${utente}`;
    let evento= new Evento(titolo.value,tipologia.value,descrizione.value,luogoEvento.value,disponibilità.value,posti.value,dataEvento.value,locandinaURL.value,prezzoListino.value);
    fetch(urlModifica, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(evento),
      }); 
      window.location.reload();
}

btnElimina.addEventListener('click',elimina);
btnModifica.addEventListener('click',modifica);