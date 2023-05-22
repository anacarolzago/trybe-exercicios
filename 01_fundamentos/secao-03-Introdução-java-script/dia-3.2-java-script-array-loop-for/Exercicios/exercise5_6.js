// 5 - Com base no código que acabou de gerar, faça com que: caso o valor final seja maior que 20, imprima a mensagem “Valor maior que 20”; e, caso não seja maior que 20, imprima a mensagem “Valor menor ou igual a 20”.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (let index = 0; index < numbers.length; index += 1){
    soma += numbers[index];
}

let media = soma / numbers.length;
console.log(media);

if (media > 20){
    console.log('Valor maior que 20');
} else {
    console.log('Valor menor ou igual a 20');
}

// 6 - Utilizando for, descubra o maior valor contido no array e imprima-o.

let maiorNumero = numbers[0];

for (let index = 1; index < numbers.length; index += 1){

    if(numbers[index] > maiorNumero){
        maiorNumero = numbers[index];
    }
}

console.log(maiorNumero);