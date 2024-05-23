let ruoloUtente = localStorage.getItem('ruolo');
let administration = document.querySelector('#adminSection');
let username = localStorage.getItem('nome');

if(ruoloUtente == null) {
    window.location.href = '../index.html';
} else if (ruoloUtente == 'ROLE_USER') {
    window.location.href = '../PAGES/errore.html';
} else {
    administration.innerHTML = `
                                <h1>Benvenuto ${username}.</h1>
                                <button id="creation" type="button" class="btn btn-primary" style="margin-bottom: 8px">Vai alla sezione creazione evento.</button>
                                <button id="update" type="button" class="btn btn-secondary">Vai alla sezione modifica evento.</button>
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

// sezione per le car di tutti gli eventi
let cardBody= document.querySelector('#cardBody');
let btn=document.querySelector('#btnAltreInfo');

let allArray=[];

function scegliConcerti() {
    let all='https://dummyjson.com/products/category/skincare'
    fetch(all)
    .then(response =>{
        if (response != null) {
            return response.json();
        }else{
            console.log("error response riga 41");
        }
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
                                    <div class="imgProdotto" style="background-image: url(${element.thumbnail})"></div>
                                    <div class="card-body d-flex flex-column">
                                    <h5 id="nomeSkincare" class="card-title">${element.title}</h5>
                                    <p id="brandSkincare" class="card-text">${element.brand}</p>
                                    <p id="descrizioneSkincare" class="card-text">${element.description}</p>
                                    <p id="prezzoSkincare" class="card-text">${element.price}€</p>
                                    <button id="btnAltreInfo" type="button" class="btn btn-primary mt-auto" data-bs-toggle="modal" data-bs-target="#prodotto1Modal"> Altre info </button>
                                    </div>
                                </div>
    </div>`;
    cardBody.innerHTML+=card
    });
}