let nameUtente = document.querySelector('#name');
let surname = document.querySelector('#surname');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let passwordDue = document.querySelector('#passwordDue');
let dataNascita= document.getElementById('data');
// let ruolo = document.querySelector('#ruolo');
let btn = document.querySelector('.btn');
let btnLogout = document.querySelector('.btnLogout');
const form = document.getElementById('registerForm');

const controlloPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&]{8,}$/i;
const url="http://localhost:8080/api/utente"

class Utente{
    constructor(nome,cognome,dataNascita,email,password,ruolo){
        this.nome=nome;
        this.cognome=cognome;
        this.dataNascita=dataNascita;
        this.email=email;
        this.password=password;
        this.ruolo=ruolo;    
    }
}
function creaUtente(event) {
    event.preventDefault();
    let ruolo="RUOLO_UTENTE";
    if (nameUtente.value !== '' && surname.value !== ''&& email.value !== '') {
        if(password.value === passwordDue.value) {
            if (controlloPass()) {
                let utente= new Utente(nameUtente.value,surname.value,dataNascita.value,email.value,password.value,ruolo)
                console.log(JSON.stringify(utente));
                window.location.href ='../index.html';
                fetch(url, {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    
                    },
                    body: JSON.stringify(utente),
            },
            // window.location.reload()
            );
            } 
        else {
            alert('I dati inseriti non sono corretti, riprova.');
        }} else {
            alert("Le password non coincidono.");
        }
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

form.addEventListener('submit', creaUtente);