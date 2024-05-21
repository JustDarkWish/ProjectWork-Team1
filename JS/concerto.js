let cardBody= document.querySelector('#cardBody');
let btn=document.querySelector('#btnAltreInfo');

let concerti=[];

function scegliConcerti() {
    let concerti='https://dummyjson.com/products/category/groceries'
    fetch(concerti)
    .then(response =>{
        return response.json();
    })
    .then(prodotto=>{
        concerti.push(prodotto);
        stampa(prodotto);
        console.log(concerti);
    })
}
scegliConcerti();
function stampa(concerti) {
    concerti.forEach(concerto => {
        let card= `<div class="swiper-slide">
                                <div class="card">
                                    <div class="imgProdotto" style="background-image: url(${concerto.thumbnail})"></div>
                                    <div class="card-body d-flex flex-column">
                                    <h5 id="nomeSkincare" class="card-title">${concerto.title}</h5>
                                    <p id="brandSkincare" class="card-text">${concerto.brand}</p>
                                    <p id="descrizioneSkincare" class="card-text">${concerto.description}</p>
                                    <p id="prezzoSkincare" class="card-text">${concerto.price}€</p>
                                    <button id="btnAltreInfo" type="button" class="btn btn-primary mt-auto" data-bs-toggle="modal" data-bs-target="#prodotto1Modal"> Altre info </button>
                                    </div>
                                </div>
    </div>`;
    cardBody.innerHTML+=card
    });
}