let btnCheckout = document.querySelector('#btnCheckout');
let listaProdotti = document.querySelector('#listaProdotti');
let checkboxDelete = document.querySelector('#checkboxDelete');
let calcoloTotale = document.querySelector('#calcoloTotale');


let carrello = JSON.parse(localStorage.getItem('carrello'));


popolaCarrello();

function popolaCarrello(){
    carrello.forEach(elemento => {
        listaProdotti.innerHTML += `<li class="d-flex justify-content-between align-items-start mb-3" carrello_id="${elemento.carrello_id}"> <span> <img src="${elemento.prodotto.thumbnail}" class="img-fluid" pe-0" style="width: 25%" id="imgCart"> ${elemento.prodotto.title} - ${elemento.prodotto.price}€ <button class="btn btn-lg btnElimina"> </button></span></li>
        `; 
    });
    
    let btnElimina = document.querySelectorAll('.btnElimina');
    
    [...btnElimina].forEach(btnElimina => {
        btnElimina.addEventListener('click', eliminaProdotto);
    })
    
    calcolaTotale();
}

function calcolaTotale(totale = 0){
    
    carrello.forEach(elemento =>{
        totale += elemento.prodotto.price;
        calcoloTotale.innerHTML = totale;
    })
}


function eliminaProdotto(event){
    console.log(event.target); 
    
    let parent = this.parentNode;
    let idRiga = parent.getAttribute("carrello_id");
    console.log(idRiga);
    
    console.log(this);
    
    this.parentNode.remove();
    
    cercaProdottoLocalStorage(idRiga);

    calcolaTotale();

    calcoloTotale.innerHTML ='';
}


function cercaProdottoLocalStorage(idRiga){

    let elFiltrati = carrello.filter((el) => idRiga != el.carrello_id);

    console.log(elFiltrati);

    localStorage.setItem('arrayCarrello', JSON.stringify(elFiltrati)); 

    carrello = elFiltrati; 
}
