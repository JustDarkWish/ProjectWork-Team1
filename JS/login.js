let email = document.querySelector("#email");
let password = document.querySelector("#password");
let btn = document.getElementById("btnLogin");
const form = document.getElementById("loginForm");

let registeredUsername = localStorage.getItem("email");
let registeredPassword = localStorage.getItem("password");


async function login() {
  /* this.preventDefault(); */

  const getLoginURL = "http://localhost:8080/api/login";

  let login = {
    email: email.value,
    password: password.value,
  };

  const response = await fetch(getLoginURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(login),
  });
  const utente = await response.json();
  
  if (utente.email == "" && utente.password == "") {
      console.log("login fallito");
    } else {
        console.log("login ok");
    localStorage.setItem("Utente", JSON.stringify(utente));
    localStorage.setItem("UtenteRuolo", utente.ruolo);
  }
}
btn.addEventListener("click", login);

/* function login(event) {
    event.preventDefault();

    if (adasdasdasdsdasdas === email.value) {
        
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
 */
