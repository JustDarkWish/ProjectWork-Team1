let cardBody= document.querySelector('#cardBody');
let btn=document.querySelector('#btnAltreInfo');

let teatroArray=[];

function scegliConcerti() {
    let teatro='https://dummyjson.com/products/category/laptops'
    fetch(teatro)
    .then(response =>{
        if (response != null) {
            return response.json();
        }else{
            console.log("error response riga 10");
        }
    })
    .then(prodotto=>{
        teatroArray.push(prodotto.products);
        stampa(prodotto.products);
        console.log(teatroArray);
    })
}
scegliConcerti();
function stampa(teatroArray) {
    teatroArray.forEach(teatro => {
        let card= `<div class="swiper-slide">
                                <div class="card">
                                    <div class="imgProdotto" style="background-image: url(${teatro.thumbnail})"></div>
                                    <div class="card-body d-flex flex-column">
                                    <h5 id="nomeSkincare" class="card-title">${teatro.title}</h5>
                                    <p id="brandSkincare" class="card-text">${teatro.brand}</p>
                                    <p id="descrizioneSkincare" class="card-text">${teatro.description}</p>
                                    <p id="prezzoSkincare" class="card-text">${teatro.price}€</p>
                                    <button id="btnAltreInfo" type="button" class="btn btn-primary mt-auto" data-bs-toggle="modal" data-bs-target="#prodotto1Modal"> Altre info </button>
                                    </div>
                                </div>
    </div>`;
    cardBody.innerHTML+=card
    });
}