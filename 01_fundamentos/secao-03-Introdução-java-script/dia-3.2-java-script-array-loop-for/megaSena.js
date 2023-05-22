// Criar dois arrays, um com números sorteados e outro com os números escolhidos por uma pessoa
// comparar os números de cada array
// somar o número de acertos quando houverem números iguais
// mostrar o total de acertos

// 1 - Definir array de numeros escolhidos, 6 numeros inteiros de 1 - 60
let numerosJogador = [12, 22, 29, 35, 55, 59];
// console.log( numerosJogador[indice] ); // Acessa uma posicao do array especifica
// console.log( numerosJogador.length ); // Retorna o tamanho do array

// 2- Sortear os numeros

let numero1 = Math.floor(Math.random() * 60);
let numero2 = Math.floor(Math.random() * 60);
let numero3 = Math.floor(Math.random() * 60);
let numero4 = Math.floor(Math.random() * 60);
let numero5 = Math.floor(Math.random() * 60);
let numero6 = Math.floor(Math.random() * 60);

let numerosSorteados = [numero1, numero2, numero3, numero4, numero5, numero6];


// 3 - Comparar os números de cada array
// somar o número de acertos quando houverem números iguais

// console.log("Numeros escolhidos: " + numerosJogador);
// console.log("Numeros sorteados: " + numerosSorteados);

// for ( inicializacao ; condicao-de-parada ; passos ) { }

let contadorAcertos = 0;
while (contadorAcertos < 4) {
    contadorAcertos = 0;

    let numero1 = Math.floor(Math.random() * 60);
    let numero2 = Math.floor(Math.random() * 60);
    let numero3 = Math.floor(Math.random() * 60);
    let numero4 = Math.floor(Math.random() * 60);
    let numero5 = Math.floor(Math.random() * 60);
    let numero6 = Math.floor(Math.random() * 60);

    numerosSorteados = [numero1, numero2, numero3, numero4, numero5, numero6];

    for (let index = 0; index < numerosSorteados.length; index += 1) {
        for (let index02 = 0; index02 < numerosJogador.length; index02 += 1) {
            if (numerosSorteados[index] === numerosJogador[index02]) {
                contadorAcertos += 1;
            }
        }
    }

}

console.log("Numeros escolhidos: " + numerosJogador);
console.log("Numeros sorteados: " + numerosSorteados);
console.log("Total de acertos: " + contadorAcertos);