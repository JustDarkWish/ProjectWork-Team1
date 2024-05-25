let cardBody= document.querySelector('#cardBody');
let filmArray=[];

function scegliConcerti() {
    let film='https://dummyjson.com/products/category/groceries'
    fetch(film)
    .then(response =>{
        return response.json();
        
    })
    .then(prodotto=>{
        filmArray.push(prodotto.products);
        stampa(prodotto.products);
        console.log(filmArray);
    })
}
scegliConcerti();
function stampa(filmArray) {
    filmArray.forEach(film => {
        let card= `<div class="swiper-slide">
        <div class="card">
        <div class="imgProdotto" style="background-image: url(${film.thumbnail})"></div>
        <div class="card-body d-flex flex-column">
        <h5 id="nomeSkincare" class="card-title">${film.title}</h5>
        <p id="brandSkincare" class="card-text">${film.brand}</p>
        <p id="descrizioneSkincare" class="card-text">${film.description}</p>
        <p id="prezzoSkincare" class="card-text">${film.price}€</p>
        <button id="btnAltreInfo" type="button" class="btn btn-primary mt-auto" data-bs-toggle="modal" data-bs-target="#prodotto1Modal"> Altre info </button>
        </div>
        </div>
        </div>`;
        cardBody.innerHTML+=card;
        return film;
    });
    document.querySelectorAll('#btnAltreInfo').forEach(btn => {
        btn.addEventListener('click', altreInfo);
    });


}
function altreInfo() {
    let prodottoId = event.target.getAttribute(film.id);
    localStorage.setItem('id', prodottoId);
    console.log(prodottoId);
}

