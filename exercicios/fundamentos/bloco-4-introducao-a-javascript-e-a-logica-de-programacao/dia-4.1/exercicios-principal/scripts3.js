const valorProduto = 15;
const imposto = valorProduto * 1.20 - valorProduto;
const valorProdutoTotal = valorProduto + imposto;
const valorVenda = valorProdutoTotal * 1.80;
const lucro = valorVenda - valorProdutoTotal;
if (valorProduto > 0) {
    console.log(lucro.toFixed(2));
} else {
    console.log("Erro\nPrograma finalizado.")
}

