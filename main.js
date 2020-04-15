// Un alert espone 5 numeri casuali (univoci). 
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l’ utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati
// Assicuratevi di saper fare correttamente l’ esercizio con output base (alert() , prompt() , console.log() )

var numRandom = [];


// Ciclo FOR per la creazione di 5 numeri random dell'alert
for ( var i = 0; numRandom.length < 5 ; i++ ) {
    var random = randomNumber(1,50);

    if (numRandom.includes(random)){
        i--;
      } else{
        numRandom.push(random);
      }
    
}
console.log(numRandom);
alert('Ricorda questi numeri '+ numRandom);


//  Ciclo FOR per i 5 Prompt

var numeriUtente= [];
var numUguali = [];

setTimeout(pause, 15000);

function pause(){

    for ( var i = 0; i < numRandom.length ; i++ ){
        var inseriti = parseInt(prompt('Inserisci i numeri visti precedentemente'));
    
        if (numeriUtente.includes(inseriti)) {
            alert('Ops, Numero già inserito in precedenza')
            i--;
    
        } else {
            numeriUtente.push(inseriti);
        }
    
        if ( numRandom.includes(inseriti) ){
            numUguali.push(inseriti);
          }
        
    }
    console.log('I numeri inseriti da te sono ' , numeriUtente);
    console.log('I numeri uguali sono', numUguali.length , 'ovvero ', numUguali);
}



/* FUNCTIONS */

function randomNumber (min, max){
    return Math.floor(Math.random() * (max - min) + min)
}

