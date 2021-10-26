// far inserire all'utente una mail e controllare se è nell'array, che contiene quelle valide.
var btn = document.getElementById('btn');
var listaMail = ["pippo@gmail.com", "pippo1@gmail.com", "andrea@gmail.com", "pippo3@gmail.com"];
var emailRisultato = document.getElementById('emailRisultato');

btn.addEventListener("click",function () {
var emailInserita = document.getElementById('emailPrincipale').value;
var emailTrovata = false;

for (var i = 0; i < listaMail.length; i++) {
    if (emailInserita == listaMail[i]) {
        emailTrovata = true;
    }
}

if (emailTrovata == true) {
    emailRisultato.innerHTML = "La tua email è presente in elenco";
} else {
    emailRisultato.innerHTML = "La tua email non è presente in elenco";
}

});