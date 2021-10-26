

var numeroUtente = Math.floor(Math.random() * 6) + 1;

document.getElementById('io').innerHTML = "Il tuo dado ha segnato " + numeroUtente;

var numeroComputer = Math.floor(Math.random() * 6) + 1;

document.getElementById('computer').innerHTML = "Il dado dell'avversario ha segnato " + numeroComputer;

// gioco 
if (numeroUtente > numeroComputer){
    document.getElementById('risultato').innerHTML = "Hai vinto!";
} else if ( numeroComputer > numeroUtente ){
    document.getElementById('risultato').innerHTML = "Hai perso";
} else{
    document.getElementById('risultato').innerHTML = "Pareggio!";
}