let ruoloUtente = localStorage.getItem('ruolo');
let loginUtente= document.getElementById('login');
let text= document.getElementById('text');
loginUtente.innerHTML=nomeUtente;
if (ruoloUtente==null) {
    loginUtente.innerHTML="Login";
    loginUtente.addEventListener('click',login)
}else if(ruoloUtente=='ROLE_USER'){
    loginUtente.innerHTML="Logout";
    loginUtente.addEventListener('click',logout);
    text.innerHTML=`Benvenuto ad Eventia`;
    let carrello= document.createElement('button');
    carrello.innerHTML="vai al tuo carrello";
    text.appendChild(carrello);
    carrello.addEventListener('click',vaiCarrello);
}else{
    loginUtente.innerHTML="Logout";
    loginUtente.addEventListener('click',logout);
    text.innerHTML=`Sezione Admin per creare e aggiungere eventi`;
    let redirect = document.createElement('button');
    text.appendChild(redirect);
    redirect.addEventListener('click',redirectPannello);
}
function redirectPannello() {
    window.location.href="PAGES/pannello.html";
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
