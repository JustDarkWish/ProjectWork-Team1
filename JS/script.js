let ruoloUtente = localStorage.getItem('UtenteRuolo');
let loginUtente= document.getElementById('login');
let text= document.getElementById('text');
loginUtente.innerHTML=ruoloUtente;
if (ruoloUtente=="RUOLO_ADMIN") {
    loginUtente.innerHTML="Logout";
    loginUtente.addEventListener('click',logout);
    // text.innerHTML=`Sezione Admin per creare e aggiungere eventi`;
    let redirect = document.createElement('button');
    redirect.innerHTML=" Sezione pannello Admin";
    redirect.setAttribute("class","adminBtn");
    text.appendChild(redirect);
    redirect.addEventListener('click',redirectPannello);
}else if(ruoloUtente=='RUOLO_UTENTE'){
    loginUtente.innerHTML="Logout";
    loginUtente.addEventListener('click',logout);
    // text.innerHTML=`Benvenuto ad Eventia `;
    let carrello= document.createElement('button');
    carrello.innerHTML=" Il tuo carrello";
    carrello.setAttribute("class","adminBtn");
    text.appendChild(carrello);
    carrello.addEventListener('click',vaiCarrello);
}else{
    loginUtente.innerHTML="Login";
    loginUtente.addEventListener('click',login)
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

console.log(`

                             -SUS
           ⡾⠛⠛⠛⠛⠛⠛⠿⣾
         ⠏⠀⠀⠀⠀⠀⠀⣀⣀⡀⣙
        ⡟⠀⠀⠀⣰⡾⠟⠛⠛⠛⠛⠛⠛⠿
       ⣽⠇⠀⠀⠀⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢿
  ⡟⠉⠉⣿⠀⠀⠀⠀⢿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼
 ⣿⠁⠀⠀⣿⠀⠀⠀⠀⠘⢿⣦⣄⣀⣀⣀⣀⣤⡴
 ⣿⠀⠀⠀⣿⠀⠀⠀⠀⠀⠀⠈⠉⠛⠋⠉⠉⠀⠀⢻
 ⣿⠀⠀⠀⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸
 ⣿⠀⠀⠀⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸
 ⣿⠀⠀⠀⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿
 ⡸⢷⣤⣤⣿⡀⠀⠀⠀⠀⢠⣤⣄⣀⣀⣀⠀⠀⣿
       ⣿⡇⠀⠀⠀⠀⢸    ⡏⠀⠀⠀⢸
       ⢼⡇⠀⠀⠀⠀⣸⡇   ⣆⣀⣀⣀⣼
        ⠿⢦⣤⣤⡾⢟         `)