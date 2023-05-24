// Criar dois arrays, um com números sorteados e outro com os números escolhidos por uma pessoa
// comparar os números de cada array
// somar o número de acertos quando houverem números iguais
// mostrar o total de acertos


let numerosJogador = [12, 22, 29, 35, 55, 59];

// Abandonamos isso aqui abaixo para usar funcoes gerarNumerosSorteados e alimentarArray
// let numero1 = Math.floor(Math.random() * 60);
// let numero2 = Math.floor(Math.random() * 60);
// let numero3 = Math.floor(Math.random() * 60);
// let numero4 = Math.floor(Math.random() * 60);
// let numero5 = Math.floor(Math.random() * 60);
// let numero6 = Math.floor(Math.random() * 60);
// let numerosSorteados = [numero1, numero2, numero3, numero4, numero5, numero6];

let numerosSorteados = [];

function gerarNumerosSorteados() {
    return (Math.floor(Math.random() * 60));
}

function alimentarArray() {
    for (let repeticao = 0; repeticao <= 5; repeticao += 1) { // repeticao < 6 produz o mesmo resultado
        numerosSorteados.push(gerarNumerosSorteados());
    }
}

let contadorAcertos = 0;
while (contadorAcertos < 4) {
    contadorAcertos = 0; // limpa o contador para garantir que na proxima execucao, nao terá o valor anterior
    numerosSorteados = []; // limpa o array para garantir que na proxima execucao, nao terá o jogo anterior

    alimentarArray();

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