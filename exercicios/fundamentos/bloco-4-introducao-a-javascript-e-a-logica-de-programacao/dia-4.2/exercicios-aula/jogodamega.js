//Fazer o jogo
let jogoDoYas = [14, 18, 29, 37, 43, 46];

//sorteio da loteria
// let numero1 = 14; 
// let numero2 = 19;
// let numero3 = 29;
// let numero4 = 37;
// let numero5 = 44;
// let numero6 = 60;
// let numeroMegasena = [];
// numeroMegasena.push(numero1);
// numeroMegasena.push(numero2);
// numeroMegasena.push(numero3);
// numeroMegasena.push(numero4);
// numeroMegasena.push(numero5);
// numeroMegasena.push(numero6);
let numeroMegasena = [];
for (let i = 0; i <= 5; i += 1) {
    numeroMegasena.push(Math.floor(Math.random( )* 60) + 1);
}

//conferir o resultado
let acertos = 0;
for(let i = 0; i < jogoDoYas.length; i += 1) {

    for (let i2 = 0; i2 < numeroMegasena.length; i2 += 1) {
        if(jogoDoYas[i] === numeroMegasena[i2]) {
            acertos = acertos + 1
        }
    }
}
//se der bom, comemorar!
console.log("Os números sorteados foram: " + numeroMegasena)
console.log("Yasmin acertou " + acertos + " numero(s)")

if (acertos === 6){
    console.log("Ihuu! To milionario!!! \o/")
} else if (acertos > 0) {
    console.log("Quase lá :(")
} else {
    console.log("Nem passou perto, aff.")
}