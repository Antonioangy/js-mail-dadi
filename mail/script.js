var listaMail= ["antonio@gmail.com", "matteo@gmail.com", "lorenzo@gmail.com", "mario@gmail.com", "@gmail.com"];

// chiedo mail all'utente
var userMail = prompt("Inserisci la tua mail");

var trovato = false
//controllo se esiste la mail
for (let i = 0; i < listaMail.length; i++) {
    
    if(listaMail[i] === userMail ) {
        trovato = true;
    }
}

if (trovato === true) {
        document.getElementById("emailRisultato").innerHTML = "Mail trovata!"
}else {
        document.getElementById("emailRisultato").innerHTML = "Mail non trovata!"
}