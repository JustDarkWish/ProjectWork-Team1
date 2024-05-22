let cardBody= document.querySelector('#cardBody');
let btn=document.querySelectorAll('#btnAltreInfo');


let concertiArray=[];

function scegliConcerti() {
    let concerti='https://dummyjson.com/products/category/groceries'
    fetch(concerti)
    .then(response =>{
        if (response != null) {
            return response.json();
        }else{
            console.log("error response riga 10");
        }
    })
    .then(prodotto=>{
        concertiArray.push(prodotto.products);
        stampa(prodotto.products);
        console.log(concertiArray);
    })
}
scegliConcerti();
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
                                    <a href="evento.html"> Altre info </a>
                                    
                                    </div>
                                </div>
    </div>`;
    cardBody.innerHTML+=card
});
}
btn.addEventListener('click',info);

function info() {
    window.location.href='../PAGES/evento.html';
}