// function sum(valor1, valor2) {
//     return valor1 + valor2;
// }

// let num1 = 1;
// let num2 = 2;
// sum(num1, num2);


function calcularMedia(array) {
    let soma = 0;

    for (numero of array) {
        soma += numero;
    }

    let media = soma / array.length;
    return media;
}

let notasPessoaEstudante1 = [8, 7, 2, 10, 6];
let notasPessoaEstudante2 = [3, 1.5, 2];

let mediaPE1 = calcularMedia(notasPessoaEstudante1);
let mediaPE2 = calcularMedia(notasPessoaEstudante2);