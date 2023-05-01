let numeriHtml = document.getElementById("numeri");
let bottone = document.getElementById("button");
let risultatoHTML = document.getElementById("risultato");
// devo inserire 5 numeri che non ho in un array
let numeriBanco = [];
let numBCiclo;
// questi numeri devono essere casuali
for (let i = 0; i < 5; i++) {
    numBCiclo = parseInt(Math.random() * 100);
    console.log(numBCiclo);
    pushoNumeri(numeriBanco,numBCiclo);
}
// vanno poi mostrati a schermo
numeriHtml.innerHTML=numeriBanco;

// questi numeri devono sparire dopo 30 secondi
function rimuovinumeri(){
    numeriHtml.style.display="none";
}
const timerNumeri = setInterval(rimuovinumeri, 30 * 1000);

// devo ricevere 5 numeri dell utente
let numeriUtente = [];
let numUCiclo;
// imposto il timer di 3 sec per ora
setTimeout(cicloNumeri, 30.1 * 1000);

function cicloNumeri(){
    for (let i = 0; i < 5; i++) {
        numUCiclo = parseInt(prompt("inserisci numeri"));
        pushoNumeri(numeriUtente,numUCiclo);
    }
}
// funzione che puscia i numeri in un array

function pushoNumeri(arr,val){
    arr.push(val);
}

console.log(numeriBanco);

function comparoNumeri (a, b){
    if (a.length !== b.length) return false;
    else {
      // Confronto ogni elemento dell'array
    for (var i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            return false;
        }
    }
    return true;
    }
};

bottone.addEventListener("click",function(){
    let paragone = comparoNumeri(numeriBanco,numeriUtente);
    console.log(paragone);

    if( paragone == true){
        risultatoHTML.innerHTML=`hai vinto!! i numeri del banco sono ${numeriBanco} i tuoi ${numeriUtente}`;
    clearInterval(timerNumeri)
}
else{
    clearInterval(timerNumeri)
    risultatoHTML.innerHTML=`hai perso!! i numeri del banco sono ${numeriBanco} i tuoi ${numeriUtente}`;
}
console.log(numeriUtente);
})