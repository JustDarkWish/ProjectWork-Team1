let nameUtente= document.querySelector('#name');
let surname= document.querySelector('#surname');
let email= document.querySelector('#email');
let password= document.querySelector('#password');
let ruolo= document.querySelector('#ruolo');
let btn= document.querySelector('.btn');
let btnLogout= document.querySelector('.btnLogout');

const controlloPassword =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&]{8,}$/i;

function login() {
    if (nameUtente!= '' && surname!=''&& password!=''&& email!='') {
        localStorage.setItem('nome',nameUtente);
        localStorage.setItem('cognome',surname);
        localStorage.setItem('email',email);
        localStorage.setItem('password',password);
        localStorage.setItem('ruolo',ruolo);
    }else{
        alert('Non hai inserito i valori corretti');
        event.preventDefault();
    }
}
function logout() {
    localStorage.clear();
}
function controlloPass() {
    if (password.value.match(controlloPassword)) {
        localStorage.setItem("password",password)
        return true
    }else{
        document.getElementById("erroriPassword").innerHTML=`<ul class="text-danger">
        <li class="point">La tua password deve contenere:</li>
        <li>Almeno 8 caratteri</li>
        <li>Almeno una maiuscola</li>
        <li>Almeno una minuscola</li>
        <li>Almeno un numero</li>
        <li>Almeno un carattere speciale</li></ul>`;
        return false
    }
}

btn.addEventListener('click',login);
btnLogout.addEventListener('click',logout);