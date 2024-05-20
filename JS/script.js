let nomeUtente = localStorage.getItem('nome');
let loginUtente= document.getElementById('login');
let text= document.getElementById('text');
loginUtente.innerHTML=nomeUtente;
if (nomeUtente==null) {
    loginUtente.innerHTML="Login";
    loginUtente.addEventListener('click',login)
}else{
    loginUtente.innerHTML="Logout";
    loginUtente.addEventListener('click',logout);
    text.innerHTML=`Salve ${nomeUtente}, benvenuto ad Eventia con noi ti droghi pesante `;
    let carrello= document.createElement('button');
    carrello.innerHTML="vai al tuo carrello";
    text.appendChild(carrello);
    carrello.addEventListener('click',vaiCarrello);
}
function vaiCarrello() {
    window.location.href="PAGES/carello.html";
}
function logout() {
    localStorage.clear();
    window.location.reload();
}
function login(){
    window.location.href ='PAGES/login.html';
}
