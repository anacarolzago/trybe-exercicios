// Considere esse array para realizar os próximos exercícios

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1 - Percorra o array imprimindo todos os valores contidos nele com a função console.log()

// console.log(numbers); 
// console.log(numbers.sort());
// console.log(numbers.length);

for (let index = 0; index < numbers.length; index +=1) {
    console.log(numbers[index])
} 
    
// 2 - Some todos os valores contidos no array e imprima o resultado.

let soma = 0;

for (let index = 0; index < numbers.length; index += 1) {
    soma += numbers[index];
}

console.log(soma);
