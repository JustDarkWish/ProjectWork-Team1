let img = document.querySelector('#img');
let description = document.querySelector('#descrizioneEvento');
let btnAggiungi = document.querySelector('#btnCarello'); 
let prodottoId=localStorage.getItem('id');
let btn=document.getElementById("btnBack");
const parametriURL = window.location.search;
const parametriParsURL = new URLSearchParams(parametriURL);


let arrayCarrello = [];
const URLRICERCA = `http://localhost:8080/api/evento/${prodottoId}`;

fetch(URLRICERCA)
    .then(response => {
        if (response != null) {
            return response.json();
        }
        console.log('errore nella response riga 18');
    })
    .then(prodotto => {
        console.log(prodotto);
        stampa(prodotto);
    })

function stampa(prodotto) {

    img.setAttribute('src', prodotto.locandinaURL);
    description.innerHTML = `<div id="info" class="h-100">
    <p> ${prodotto.titolo} </p>
    <p> Numero di posti: ${prodotto.posti} </p> 
    <p> Luogo evento: ${prodotto.luogoEvento} </p> 
    <p> ${prodotto.descrizione} </p> 
    <p> Prezzo: ${prodotto.prezzoListino}€</p> 
    </div>`;
}

function aggiungi() {
    fetch(URLRICERCA)
    .then(response=>{
        return response.json();
    })
    .then(prodotto=>{
        arrayCarrello.push(prodotto);
        console.log(arrayCarrello);
        localStorage.setItem("carrello",JSON.stringify(arrayCarrello));
    })
}

function torna(){
    window.location.href="/index.html";
}
btn.addEventListener('click',torna)