let email = document.querySelector('#email');
let password = document.querySelector('#password');
let btn = document.querySelector('.btn');
const form = document.getElementById('loginForm');

let registeredUsername = localStorage.getItem('email');
let registeredPassword = localStorage.getItem('password');

let utenti='https://dummyjson.com/products/category/groceries'
fetch(utenti)
.then(utenti=>{
    login();
    forEach(utente => {
        if(utenti.email==email){

        }
    });
})




function login() {
    event.preventDefault();

    if (registeredUsername === email.value) {
        
        if(registeredPassword === password.value) {

            window.location.href = '../index.html';

        }
         else {
            alert("Password errata, controlla che la password sia corretta e riprova.")
         }
    } else {
        alert('Non risulta nessun utente registrato con questi dati.');
    }
}

form.addEventListener('submit', login);
