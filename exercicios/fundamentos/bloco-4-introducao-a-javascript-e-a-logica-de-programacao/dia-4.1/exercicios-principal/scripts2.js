// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// Exemplo: bishop (bispo) -> diagonals (diagonais)

let pecaDeXadrez = "BUNDA";
if (pecaDeXadrez.toLowerCase() === "king") {
    console.log("all directions, one space");
} else if (pecaDeXadrez.toLowerCase() === "queen") {
    console.log("all directions, all free spaces");
} else if (pecaDeXadrez.toLowerCase() === "tower") {
    console.log("verticals and diagonals");
} else if (pecaDeXadrez.toLowerCase() === "bishop") {
    console.log("diagonals");
} else if (pecaDeXadrez.toLowerCase() === "horse") {
    console.log("L");
} else if (pecaDeXadrez.toLowerCase() === "pawn") {
    console.log("in front");
} else {
    console.log("Your piece can't move on.");
}

let nota = 30;
if (nota >= 90) {
    console.log ("A");
} else if (nota >= 80) {
    console.lof("B");
} else if (nota >= 70) {
    console.log ("C");
} else if (nota >= 60) {
    console.log("D");
} else if (nota >= 50) {
    console.log("E");
} else {
    console.log("F")
}

const ehPar = 3;
const ehPaar = 5;
const ehPaaar = 53;

if (ehPar % 2 == 0 || ehPaar % 2 == 0 || ehPaaar % 2 == 0) {
    console.log("true");
} else {
    console.log("false");
}

const ehImpar = 1;
const ehImpaar = 3;
const ehImpaaar = 5;

if (ehImpar % 2 == 1 || ehImpaar % 2 == 1 || ehImpaaar % 2 == 1) {
    console.log("true");
} else {
    console.log("false");
}

