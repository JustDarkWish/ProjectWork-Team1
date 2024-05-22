let ruoloUtente = localStorage.getItem('ruolo');
let administration = document.querySelector('#adminSection');
let username = localStorage.getItem('nome');

if(ruoloUtente == null) {
    window.location.href = '../index.html';
} else if (ruoloUtente == 'ROLE_USER') {
    window.location.href = '../PAGES/errore.html';
} else {
    administration.innerHTML = `
                                <h1>Benvenuto ${username}.</h1>
                                <button id="creation" type="button" class="btn btn-primary" style="margin-bottom: 8px">Vai alla sezione creazione evento.</button>
                                <button id="update" type="button" class="btn btn-secondary">Vai alla sezione modifica evento.</button>
                                `;
    let bottoneCreazione = document.getElementById('creation');
    let bottoneModifica = document.getElementById('update');

    function crea() {
        window.location.href = '../PAGES/creaEvento.html';
    }

    function modifica() {
        window.location.href = '../PAGES/modificaEvento.html';
    }

    bottoneCreazione.addEventListener('click', crea);
    bottoneModifica.addEventListener('click', modifica);
}
