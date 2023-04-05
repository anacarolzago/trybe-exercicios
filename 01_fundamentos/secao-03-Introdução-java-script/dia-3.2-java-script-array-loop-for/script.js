// Considere esse array para realizar os próximos exercícios

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

/* 1 - Percorra o array imprimindo todos os valores contidos nele com a função console.log() */

// console.log(numbers); 
// console.log(numbers.sort());
// console.log(numbers.length);

for (let index = 0; index < numbers.length; index +=1) {
    console.log(numbers[index])
} 
    
/* 2 - Some todos os valores contidos no array e imprima o resultado. */

let soma = 0;

for (let index = 0; index < numbers.length; index += 1) {
    soma += numbers[index];
}

console.log(soma);

// 3 - Calcule e imprima a média aritmética dos valores contidos no array.
// 4 - A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.
// 5 - Com base no código que acabou de gerar, faça com que: caso o valor final seja maior que 20, imprima a mensagem “Valor maior que 20”; e, caso não seja maior que 20, imprima a mensagem “Valor menor ou igual a 20”.
// 6 - Utilizando for, descubra o maior valor contido no array e imprima-o.
// 7 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “Nenhum valor ímpar encontrado”.
// 8 - Utilizando for, descubra o menor valor contido no array e imprima-o.
// 9 - Utilizando for, crie um array que vá de 1 a 25 e imprima o resultado.
// 10 - Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.