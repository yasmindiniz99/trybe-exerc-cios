let statusPessoa = "Aprovada";

switch (statusPessoa) {
    case "Aprovada":
        console.log("Parabéns, você foi aprovada(o)!");
        break;
    case "Lista de espera":
        console.log("Você está na nossa lista de espera.");
        break;
    case "Reprovada":
        console.log("Você foi reprovada(o).")
        break;
    default:
        console.log("Não se aplica.")
}