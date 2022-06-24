function comparacao(n1, n2) {
    if (!n1 || !n2) return "Defina dois números!";

    const frase1 = Numeros1(n1, n2);
    const frase2 = numeros2(n1, n2);

    return `${frase1} ${frase2}`;
}

function Numeros1(n1, n2) {

    if (n1 == n2) {
        iguais = "";
    }

    return `Os numeros ${n1} e ${n2} ${iguais} são iguais`;
}

function numeros2(n1, n2) {
    const soma = n1 + n2;
    const compara10 = soma > 10;
    const compara20 = soma > 20;

    let resultado10 = "menor";
    let resultado20 = "menor";

    if (compara10) {
        resultado10 = "maior";
    }

    if (compara20) {
        resultado20 = "maior";
    }

    return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20`;
}

console.log(comparacao());