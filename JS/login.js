let nameUtente = document.querySelector('#name');
let surname = document.querySelector('#surname');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let ruolo = document.querySelector('#ruolo');
let btn = document.querySelector('.btn');
let btnLogout = document.querySelector('.btnLogout');
const form = document.getElementById('loginForm');

const controlloPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&]{8,}$/i;

function login(event) {
    event.preventDefault();

    if (nameUtente.value !== '' && surname.value !== ''&& email.value !== '') {
        if (controlloPass()) {
            localStorage.setItem('nome', nameUtente.value);
            localStorage.setItem('cognome', surname.value);
            localStorage.setItem('email', email.value);
            localStorage.setItem('password', password.value);
            localStorage.setItem('ruolo','ROLE_USER');
            window.location.href ='../index.html';
        } 
    } else {
        alert('I dati inseriti non sono corretti, riprova.');
    }
}

function controlloPass() {
    if (password.value.match(controlloPassword)) {
        document.getElementById("erroriPassword").innerHTML="";
        return true;
    } else {
        document.getElementById("erroriPassword").innerHTML = `<ul class="text-danger">
        <li class="point">La tua password deve contenere:</li>
        <li>Almeno 8 caratteri</li>
        <li>Almeno una maiuscola</li>
        <li>Almeno una minuscola</li>
        <li>Almeno un numero</li>
        <li>Almeno un carattere speciale</li></ul>`;
        return false;
    }
}

form.addEventListener('submit', login);
btnLogout.addEventListener('click', logout);
