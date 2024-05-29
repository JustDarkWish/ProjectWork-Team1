let ruoloUtente = localStorage.getItem('UtenteRuolo');
let administration = document.querySelector('#adminSection');

if(ruoloUtente == null) {
    window.location.href = '../index.html';
} else if (ruoloUtente == 'RUOLO_UTENTE') {
    window.location.href = '../PAGES/errore.html';
} else {
    administration.innerHTML = `
                                <h1 class="adminTitle">Benvenuto nella sezione admin</h1>
                                <button id="creation" type="button" class="btn btn-success fs-4" style="margin-bottom: 32px">Crea Evento</button>
                                <button id="update" type="button" class="btn btn-info fs-4">Modifica Evento</button>
                           
                                `;
    let bottoneCreazione = document.getElementById('creation');
    let bottoneModifica = document.getElementById('update');

    function crea() {
        window.location.href = '../PAGES/creaEvento.html';
    }

    function modifica() {
        window.location.href = '../PAGES/modificaEvento.html';
    }

    bottoneCreazione.addEventListener('click', crea);
    bottoneModifica.addEventListener('click', modifica);
}

let cardBody= document.querySelector('#cardBody');
let btn=document.querySelector('#btnAltreInfo');

let allArray=[];

function scegliConcerti() {
    let all='localhost:8080/api/evento'
    fetch(all)
    .then(response =>{
        return response.json();
    })
    .then(prodotto=>{
        allArray.push(prodotto.products);
        stampa(prodotto.products);
        console.log(allArray);
    })
}
scegliConcerti();
function stampa(allArray) {
    allArray.forEach(element => {
        let card= `<div class="swiper-slide">
                                <div class="card">
                                    <div class="imgProdotto" style="background-image: url(${element.locandinaUrl})"></div>
                                    <div class="card-body d-flex flex-column">
                                    <h5 id="nomeSkincare" class="card-title">${element.titolo}</h5>
                                    <p id="brandSkincare" class="card-text">${element.tipologia}</p>
                                    <p id="descrizioneSkincare" class="card-text">${element.descrizione}</p>
                                    <p id="prezzoSkincare" class="card-text">${element.prezzoListino}€</p>
                                    <button id="btnAltreInfo" type="button" class="btn btn-primary mt-auto" data-bs-toggle="modal" data-bs-target="#prodotto1Modal"> Altre info </button>
                                    </div>
                                </div>
    </div>`;
    cardBody.innerHTML+=card
    });
}