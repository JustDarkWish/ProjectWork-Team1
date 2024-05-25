// le funzioni qui presenti non possono  funzionare essendo la fetch di riga 15 vuota (da errore)

let img = document.querySelector('#img');
let description = document.querySelector('#descrizioneEvento');
let btnAggiungi = document.querySelector('#btnCarello'); 

const parametriURL = window.location.search;
const parametriParsURL = new URLSearchParams(parametriURL);

let prodottoId = parametriParsURL.get('id');
let arrayCarrello = [];
const URLRICERCA = `https://dummyjson.com/products/${prodottoId}`;

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

    img.setAttribute('src', prodotto.images);
    description.innerHTML = `<div id="info" class="h-100">
    <p> ${prodotto.title} </p>
    <p> Categoria: ${prodotto.category} </p> 
    <p> Brand: ${prodotto.brand} </p> 
    <p> ${prodotto.description} </p> 
    <p> Prezzo: ${prodotto.price}€</p> 
    <p> Rating: ${prodotto.rating} </p> 
    <p> Stock: ${prodotto.stock} </p> 
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
