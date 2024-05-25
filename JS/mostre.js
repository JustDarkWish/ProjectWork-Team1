let cardBody= document.querySelector('#cardBody');
let mostreArray=[];
// cambiare le fetch con quelle di hernan 
function scegliMostra() {
    let mostre='https://dummyjson.com/products/category/laptops'
    fetch(mostre)
    .then(response =>{
        return response.json();
        
    })
    .then(prodotto=>{
        mostreArray.push(prodotto.products);
        stampa(prodotto.products);
        console.log(mostreArray);
    })
}
scegliMostra();
// cambiare i .title ecc con quelle di hernan
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
        <button class="btnAltreInfo" id="${mostra.id}" type="button" class="btn btn-primary mt-auto" data-bs-toggle="modal" data-bs-target="#prodotto1Modal"> Altre info </button>
        </div>
        </div>
        </div>`;
        cardBody.innerHTML+=card;
        return mostra;
    });
    document.querySelectorAll('.btnAltreInfo').forEach(btn => {
        btn.addEventListener('click', altreInfo);
    });


}
function altreInfo(event) {
    let prodottoId = event.target.getAttribute('id');
    localStorage.setItem('id', prodottoId);
    console.log(prodottoId);
    window.location.href="/PAGES/evento.html"
}