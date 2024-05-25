let cardBody= document.querySelector('#cardBody');
let concertiArray=[];
// cambiare le fetch con quelle di hernan 
function scegliConcerti() {
    let concerti='https://dummyjson.com/products/category/smartphones'

    fetch(concerti)
    .then(response =>{
            return response.json();
    })
    .then(prodotto=>{
        concertiArray.push(prodotto.products);
        stampa(prodotto.products);
        console.log(concertiArray);
    })
}
scegliConcerti();
// cambiare i .title ecc con quelle di hernan
function stampa(concertiArray) {
    concertiArray.forEach(concerto => {
        let card= `<div class="swiper-slide">
                                <div class="card">
                                    <div class="imgProdotto" style="background-image: url(${concerto.thumbnail})"></div>
                                    <div class="card-body d-flex flex-column">
                                    <h5 id="nomeSkincare" class="card-title">${concerto.title}</h5>
                                    <p id="brandSkincare" class="card-text">${concerto.brand}</p>
                                    <p id="descrizioneSkincare" class="card-text">${concerto.description}</p>
                                    <p id="prezzoSkincare" class="card-text">${concerto.price}€</p>
                                    <button class="btnAltreInfo" id="${concerto.id}" type="button" class="btn btn-primary mt-auto" data-bs-toggle="modal" data-bs-target="#prodotto1Modal"> Altre info </button>
                                    </div>
                                </div>
    </div>`;
    cardBody.innerHTML+=card
    return concerto;
});
document.querySelectorAll('.btnAltreInfo').forEach(btn => {
    btn.addEventListener('click', altreInfo);
});
function altreInfo(event) {
    let prodottoId = event.target.getAttribute('id');
    localStorage.setItem('id', prodottoId);
    console.log(prodottoId);
    window.location.href="/PAGES/evento.html"
}
}