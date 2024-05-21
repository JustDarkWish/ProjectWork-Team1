let cardBody= document.querySelector('#cardBody');
let btn=document.querySelector('#btnAltreInfo');

let mostreArray=[];

function scegliConcerti() {
    let mostre='https://dummyjson.com/products/category/laptops'
    fetch(mostre)
    .then(response =>{
        if (response != null) {
            return response.json();
        }else{
            console.log("error response riga 10");
        }
    })
    .then(prodotto=>{
        mostreArray.push(prodotto.products);
        stampa(prodotto.products);
        console.log(mostreArray);
    })
}
scegliConcerti();
function stampa(mostreArray) {
    mostreArray.forEach(mostra => {
        let card= `<div class="swiper-slide">
                                <div class="card">
                                    <div class="imgProdotto" style="background-image: url(${mostra.thumbnail})"></div>
                                    <div class="card-body d-flex flex-column">
                                    <h5 id="nomeSkincare" class="card-title">${mostra.title}</h5>
                                    <p id="brandSkincare" class="card-text">${mostra.brand}</p>
                                    <p id="descrizioneSkincare" class="card-text">${mostra.description}</p>
                                    <p id="prezzoSkincare" class="card-text">${mostra.price}€</p>
                                    <button id="btnAltreInfo" type="button" class="btn btn-primary mt-auto" data-bs-toggle="modal" data-bs-target="#prodotto1Modal"> Altre info </button>
                                    </div>
                                </div>
    </div>`;
    cardBody.innerHTML+=card
    });
}