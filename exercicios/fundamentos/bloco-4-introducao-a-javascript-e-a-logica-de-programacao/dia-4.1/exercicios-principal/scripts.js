const a = 5;
const b = 10;
let adicao = a + b;
console.log(adicao);
let subtracao = a - b;
console.log(subtracao);
let multiplicacao = a * b;
console.log(multiplicacao);
let divisao = a / b;
console.log(divisao);
let modulo = a % b;
console.log(modulo);

if (a > b) {
    console.log(a);
}else if (b > a) {
    console.log(b);
}

const x = 34;
const y = 23;
const z = 390;

if (x > y && x > z) {
    console.log(x);
} else if (y > x && y > z) {
    console.log(y);
} else {
    console.log (z);
}

const g = -56;
if (g <= -1) {
    console.log("Negative");
} else if (g == 0) {
    console.log("Zero");
} else {
    console.log ("Positive");
}

let angulo1 = -90;
let angulo2 = -80;
let angulo3 = -40;
let anguloTotal = angulo1 + angulo2 + angulo3;

if (anguloTotal === 180) {
    console.log("true");
} else if ((anguloTotal < 180 && anguloTotal > 0)|| (anguloTotal > 180)) {
    console.log("false");
} else if (anguloTotal <= -1){
    console.log("erro")
}

