const voters = [
    {name: 'Bob' , age: 30, voted: true},
    {name: 'Jake' , age: 32, voted: true},
    {name: 'Kate' , age: 25, voted: false},
    {name: 'Sam' , age: 20, voted: false},
    {name: 'Phil' , age: 21, voted: true},
    {name: 'Ed' , age: 55, voted: true},
    {name: 'Tami' , age: 54, voted: true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 42, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

// 1 - Somar quantas pessoas votaram e quantas não votaram = objeto {votosTrue: x, votosFalse: x}
// 2 - Calcular a média de idades das pessoas 

const callback = (acumulador, valorAtual, index, array) => {

    if (valorAtual.voted) {
        return { voteFalse : acumulador.voteFalse, voteTrue: acumulador.voteTrue + 1, average: acumulador.average + valorAtual.age / array.length};
    }

    return { voteFalse : acumulador.voteFalse + 1, voteTrue: acumulador.voteTrue, average: acumulador.average + valorAtual.age / array.length};
};
const valorInicial = {voteTrue: 0, voteFalse: 0, average: 0};

const resultado = voters.reduce(callback, valorInicial);

console.log(resultado);
