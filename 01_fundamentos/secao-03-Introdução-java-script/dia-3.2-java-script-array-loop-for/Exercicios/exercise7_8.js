let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 7 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “Nenhum valor ímpar encontrado”.

let numerosImpar = 0;

for (let index = 0; index < numbers.length; index += 1) {

    if (numbers[index] % 2 !== 0) {
        numerosImpar += 1;
    }
}

if (numerosImpar === 0) {
    console.log('Nenhum valor ímpar encontrado');
} else {
    console.log(numerosImpar);
}

// 8 - Utilizando for, descubra o menor valor contido no array e imprima-o.

let menorNumero = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
    if (numbers[0] < menorNumero) {
        menorNumero = numbers[index];
    }
}

console.log(menorNumero);
