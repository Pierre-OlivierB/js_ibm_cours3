// console.log("test");

//!-------------------------
//*IMC
var height = 1.8;
var weight = 80;
var result = 0;

function imc(h, w) {
  result = w * h * h;
  return result;
}
var people = imc(height, weight);
console.log(
  "Votre IMC : " + people + ".",
  "Votre poids : " + weight + "kg.",
  "Votre taille : " + height + "m."
);
//!---------------------------
//*Fontion 1
//TODO: display tot to pay, use fct and log at the end, has var already calc, wants to return %, has choice of return

var price = 50;
var percent = 50;
var tot;

function calc(e) {
  tot = price - price * (e / 100);
  return tot;
}

var hasToPay = calc(percent);

// console.log(hasToPay);

//!-------------------------------
//*Fonction 2
//TODO: display has to pay,var percent and price,

var price2 = 50;
var percent2 = 25;
// var price2 = prompt("Donner le montant :");
// var percent2 = prompt("Donner la ristourne :");
var tot2;

function calc2(pric, perc) {
  tot = pric - pric * (perc / 100);
  return tot;
}

var hasToPay2 = calc2(price2, percent2);

// console.log(hasToPay2);
//!-------------------------------------
//*Fonction 3
//TODO: add older
var price3 = 50;
var percent3 = 25;
var older = 0;
// var price3 = prompt("Donner le montant :");
// var percent3 = prompt("Donner la ristourne :");
// var older = prompt("Donner votre anciennetée :");
var tot3;

function calc3(pric, perc, age) {
  if (age != 0) {
    tot = pric - pric * ((perc + age) / 100);
    return tot;
  }
  tot = pric - pric * (perc / 100);
  return tot;
}

var hasToPay3 = calc3(price3, percent3, older);
console.log(hasToPay3);
