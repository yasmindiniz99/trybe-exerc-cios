let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let i = 0; i < numbers.length; i += 1) {
    console.log(numbers[i]);
}

//https://www.horadecodar.com.br/2021/01/18/como-somar-elementos-de-um-array-de-maneira-performaica/ --> Peguei uma referencia para me situiar. Embora a lógica estivesse indo pelo lugar certo, não estava sabendo como colocar ela em prática da forma correta.
let soma = 0;
let media;
let arm;
let arm2 = 0;
let numeroMaior = [];
let numeroMenor = []
for (let i = 0; i <numbers.length; i += 1) {
    soma += numbers[i];
}
console.log("Esse é o total da soma de todos os numeros do array: " + soma);

for (let i = 0; i <numbers.length; i += 1) {
    soma += numbers[i]
    media = soma / numbers.length
}
console.log("A média desses números é " + media)
if (media > 20) {
    console.log("Valor maior que 20")
} else {
    console.log("Valor menor ou igual a 20")
}

for (let i = 0; i < numbers.length; i += 1) {
    arm = numbers[i];
    if (arm > numeroMaior) {
        numeroMaior[0] = arm
    }
}
console.log(numeroMaior[0]);

for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 === 1) {
        arm2 = arm2 + 1;
    } else if (numbers[i] % 2 === 0) {
        arm2 = arm2;
    }
}

if (arm2 > 0) {
    console.log(arm2)
} else {
    console.log("Nenhum valor impar encontrado.")
}

numeroMenor[0] = numbers[0];
for (let i = 0; i < numbers.length; i += 1) {
    //a cada number que passar, verificar se é menor que o anterior
        if (numbers[i] < numeroMenor) {
            //Caso seja menor, adicionar a um array
            numeroMenor[0] = numbers[i];
        } else {
            //caso seja igual, manter
            numeroMenor[0]
        }
}
console.log(numeroMenor[0])

//msc@betrybe.com --> email do msc da trybe
//banco central do brasil registrato
//ligar pra instituição financeira e cancelar as contas que n usa

let newArray = []
for (let i = 1; i <= 25; i += 1) {
    newArray.push(i)
}
console.log(newArray)

let division = [];
for (let i = 0; i < newArray.length; i += 1){
    let elements = newArray[i] % 2;
    division.push(elements);
}
console.log(division);
