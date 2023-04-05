// 9 - Utilizando for, crie um array que vá de 1 a 25 e imprima o resultado.

let numeros = [];

for (let index = 1; index <= 25; index += 1) {
    numeros.push(index);
}

console.log(numeros);


// 10 - Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.

for (let index = 0; index < numeros.length; index += 1) {
    console.log(numeros[index] / 2);
}
