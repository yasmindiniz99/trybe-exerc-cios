const salarioBruto = 3000;

let inss;
if (salarioBruto <= 1556.94) {
    inss = 0.08;
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    inss = 0.09;
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    inss = 0.11;
} else {
    inss = 570.88;
}

let irAliquota;
let irDeduzir;
let descobreINSS;
if (inss < 1){
    descobreINSS = salarioBruto * inss;
} else {
    descobreINSS = salarioBruto - inss;
}

const removeINSS = salarioBruto - descobreINSS;

if (removeINSS <= 1903.98) {
    irAliquota = 0;
    irDeduzir = 0;
} else if (removeINSS >= 1903.99 && removeINSS <= 2826.65) {
    irAliquota = 0.075;
    irDeduzir = 142.80;
} else if (removeINSS >= 2826.66 && removeINSS <= 3751.05) {
    irAliquota = 0.15;
    irDeduzir = 354.80;
} else if (removeINSS >= 3751.06 && removeINSS <= 4664.68) {
    irAliquota = 0.225;
    irDeduzir = 636.13;
} else {
    irAliquota = 0.275;
    irDeduzir = 869.36;
}


const contaIR = (removeINSS * irAliquota)- irDeduzir;
const salarioLiquido = removeINSS - contaIR;
console.log(salarioLiquido.toFixed(2))