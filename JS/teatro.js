let cardBody= document.querySelector('#cardBody');
let teatroArray=[];
// cambiare le fetch con quelle di hernan 
function scegliTeatro() {
    let teatro='https://dummyjson.com/products/category/fragrances';
    fetch(teatro)
    .then(response =>{
        return response.json();
        
    })
    .then(prodotto=>{
        teatroArray.push(prodotto.products);
        stampa(prodotto.products);
        console.log(teatroArray);
    })
}
scegliTeatro();
// cambiare i .title ecc con quelle di hernan
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
        <button class="btnAltreInfo" id="${teatro.id}" type="button" class="btn btn-primary mt-auto" data-bs-toggle="modal" data-bs-target="#prodotto1Modal"> Altre info </button>
        </div>
        </div>
        </div>`;
        cardBody.innerHTML+=card;
        return teatro;
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