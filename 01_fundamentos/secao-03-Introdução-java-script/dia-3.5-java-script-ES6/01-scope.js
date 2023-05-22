// let, const e var

// HOISTING = Içamento

imprimir();

function imprimir() {
    console.log('Ola mundo');
}

console.log(nome); // posso usar a variavel antes de declarar
var nome = 'Enza'; // trocar por let e const

// Escopo

function minhaFuncao() {
    //escopo da funcao
}

if (condicao) {
    //escopo do if
} else {
    // escopo do else
}

// escopo global


// VAR, LET E CONST se comportam no escopo
if (true) {
    var xablau = 'vaza escopo'; // escopo local do if
    // testar com let e const
}
console.log(xablau); // escopo global



var numero = 3;

function func(booleano) {
    if (booleano) {
        var numero = 23;
    }

    return numero;
}
// console.log(func(true)); // 23
console.log(func(false)); //undefined