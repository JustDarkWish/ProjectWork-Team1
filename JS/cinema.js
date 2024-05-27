let cardBody= document.querySelector('#cardBody');
let filmArray=[];
// cambiare le fetch con quelle di hernan 
function scegliFilm() {
    let film='http://localhost:8080/api/evento'
    fetch(film)
    .then(response =>{
        return response.json();
        
    })
    .then(prodotto=>{
        prodotto.forEach(elemento => {
            if(elemento.tipologia==='cinema'){
                filmArray.push(elemento);
            }else{
                console.log('elemento non valido');
            }
        });
        stampa(filmArray);
    })
}
scegliFilm();

function stampa(filmArray) {
    filmArray.forEach(film => {
        let card= `<div class="swiper-slide">
        <div class="card">
        <img src="${film.locandinaURL}" alt="">
        <div class="card-body d-flex flex-column">
        <h5 id="nomeSkincare" class="card-title">${film.titolo}</h5>
        <p id="brandSkincare" class="card-text">Numero di posti: ${film.posti}</p>
        <p id="descrizioneSkincare" class="card-text">${film.descrizione}</p>
        <p id="descrizioneSkincare" class="card-text">${film.luogoEvento}</p>
        <p id="descrizioneSkincare" class="card-text">${film.dataEvento}</p>
        <p id="prezzoSkincare" class="card-text">${film.prezzoListino}€</p>
        <button class="btnAltreInfo" id="${film.eventoId}" type="button" class="btn btn-primary mt-auto" data-bs-toggle="modal" data-bs-target="#prodotto1Modal"> Altre info </button>
        </div>
        </div>
        </div>`;
        cardBody.innerHTML+=card;
        return film;
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

