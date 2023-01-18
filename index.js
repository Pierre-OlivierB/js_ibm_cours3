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
