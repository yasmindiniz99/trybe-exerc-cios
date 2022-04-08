let numero = 6
for (let coluna = 0; coluna <= numero; coluna += 1) {
    let linhaAsterisco = "";
    for (let linha = 0; linha <= numero; linha += 1){
        linhaAsterisco =linhaAsterisco + "*";
    }
    console.log(linhaAsterisco) 
}