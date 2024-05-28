let btnCheckout = document.querySelector('#btnCheckout');
let listaProdotti = document.querySelector('#listaProdotti');
let checkboxDelete = document.querySelector('#checkboxDelete');
let calcoloTotale = document.querySelector('#calcoloTotale');


let utenteId = localStorage.getItem('UtenteId');

let carrello = JSON.parse(localStorage.getItem('carrello'));
console.log(carrello);


popolaCarrello();

function popolaCarrello() {
    listaProdotti.innerHTML = '';
    carrello.forEach(elemento => {
        listaProdotti.innerHTML += `<div class="swiper-slide">
        <div class="card">
        <img src="${elemento.locandinaURL}" alt="">
        <div class="card-body d-flex flex-column">
        <h5 id="nomeSkincare" class="card-title">${elemento.titolo}</h5>
        <p id="brandSkincare" class="card-text">Numero di posti: ${elemento.posti}</p>
        <p id="descrizioneSkincare" class="card-text">${elemento.descrizione}</p>
        <p id="descrizioneSkincare" class="card-text">${elemento.luogoEvento}</p>
        <p id="data-${elemento.eventoId}" class="card-text">${elemento.dataEvento}</p>
        <p id="prezzo-${elemento.eventoId}" class="card-text">${elemento.prezzoListino}</p>
        <button class="btnElimina" id="${elemento.eventoId}" type="button" class="btn btn-primary mt-auto" data-bs-toggle="modal" data-bs-target="#prodotto1Modal">elimina dal carrello</button>
        <button class="btnAggiungi" id="${elemento.eventoId}" type="button" class="btn btn-primary mt-auto" data-bs-toggle="modal" data-bs-target="#prodotto1Modal">effetua ordine</button>
        </div>
        </div>
        </div>`;
    });
    document.querySelectorAll('.btnAggiungi').forEach(btn => {
        btn.addEventListener('click', aggiungi);
    });
    document.querySelectorAll('.btnElimina').forEach(btnElimina => {
        btnElimina.addEventListener('click', elimina);
    });
    calcolaTotale();
}
class Prenotazione {
    constructor(prezzoVendita, dataPrenotazione, quantitaPosti) {
        this.prezzoVendita = prezzoVendita;
        this.dataPrenotazione = dataPrenotazione;
        this.quantitaPosti = quantitaPosti;
    }
}

function aggiungi() {
    let prodottoId = event.target.getAttribute('id');
    let prezzoVendita = document.getElementById("prezzo-" + prodottoId);
    let dataPrenotazione = document.getElementById("data-" + prodottoId);
    let quantitaPosti = 1;

    const dateString = dataPrenotazione.innerHTML;
    console.log(dateString);
   
    moment();
    dataPrenotazione = moment(dateString, "YYYY-MM-DD").toDate();
    // const year=
    // const month=
    // const day=
    console.log(dataPrenotazione);


    prezzoVendita = parseInt(prezzoVendita.innerHTML);
    let urlAggiungi = `http://localhost:8080/api/prenotazione/utente/${utenteId}/evento/${prodottoId}`
    let prenotazione = new Prenotazione(prezzoVendita.value, dataPrenotazione, quantitaPosti);
    fetch(urlAggiungi, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(prenotazione),
    });
}

function calcolaTotale(totale = 0) {
    carrello.forEach(elemento => {
        totale += elemento.price;
        calcoloTotale.innerHTML = totale;
    })
}

function elimina() {
    event.preventDefault();
    let prodottoId = event.target.getAttribute('id');
    let urlElimina = `http://localhost:8080/api/prenotazione/utente/${utenteId}/evento/${prodottoId}`;
    fetch(urlElimina, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    })
}
