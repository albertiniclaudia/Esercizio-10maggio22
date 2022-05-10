var domanda1 = prompt('4 + 3 =');
var domanda2 = prompt('3 - 1 =');
var domanda3 = prompt('1 * 4 =');
var domanda4 = prompt('4 / 2 =');
document.getElementById('domanda1').innerHTML = domanda1;
document.getElementById('domanda2').innerHTML = domanda2;
document.getElementById('domanda3').innerHTML = domanda3;
document.getElementById('domanda4').innerHTML = domanda4;

var fullName = domanda1 + ' ' + domanda2 + ' ' + domanda3 + ' ' + domanda4 ;
document.write( 'Ecco le tue risposte: ' + fullName);
console.log( 'Ecco le tue risposte: ' + fullName);

if (domanda1 == 7) {
    document.getElementById('domanda1').innerHTML = '7';
    console.log(domanda1 + ' ');
}
else {
    document.getElementById('domanda1').innerHTML = 'Hai sbagliato';
    console.log(domanda1 + ' ' + 'Hai sbagliato');
}

if (domanda2 == 2) {
    document.getElementById('domanda2').innerHTML = '2';
    console.log(domanda2 + ' ');
}
else {
    document.getElementById('domanda2').innerHTML = 'Hai sbagliato';
    console.log(domanda2 + ' ' + 'Hai sbagliato');
}

if (domanda3 == 4) {
    document.getElementById('domanda3').innerHTML = '4';
    console.log(domanda1 + ' ');
}
else {
    document.getElementById('domanda3').innerHTML = 'Hai sbagliato';
    console.log(domanda3 + ' ' + 'Hai sbagliato');
}

if (domanda4 == 2) {
    document.getElementById('domanda4').innerHTML = '2';
    console.log(domanda1 + ' ');
}
else {
    document.getElementById('domanda4').innerHTML = 'Hai sbagliato';
    console.log(domanda4 + ' ' + 'Hai sbagliato');
}


/* const n1 = '1';
const n2 = '2';
const n3 = '3';
const n4 = '4';

let s1 = n1 + n3;
document */