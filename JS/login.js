let email = document.querySelector("#email");
let password = document.querySelector("#password");
let btn = document.getElementById("btnLogin");
const form = document.getElementById("loginForm");

let registeredUsername = localStorage.getItem("email");
let registeredPassword = localStorage.getItem("password");


async function login() {


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
      alert("Utente non trovato");
    } else {
    console.log("login ok");
    localStorage.setItem("Utente", JSON.stringify(utente));
    localStorage.setItem("UtenteRuolo", utente.ruolo);
    localStorage.setItem("UtenteId", utente.utenteId);
    window.location.href="/index.html";
  }
}
btn.addEventListener("click", login);

