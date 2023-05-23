// Desenvolva cada exercício a seguir com o uso de funções.

// Considere a variável saldo, que representa a quantia em conta de determinada(o) cliente do TrybeBank e escreva quatro programas que:

// Adicione um valor ao saldo.
// Subtraia um valor do saldo.
// Multiplique o valor do saldo por uma taxa.
// Divida o valor do saldo.

let saldo = 100;

function somaSaldo(valor) {
    return valor + saldo;
};

function subtraiaSaldo(valor) {
    return saldo - valor;
};

function multiplicaSaldo(valor) {
    return valor * saldo;
};

function divideSaldo(valor) {
    return saldo / valor;
};

console.log(somaSaldo(300));
console.log(subtraiaSaldo(50));
console.log(multiplicaSaldo(2));
console.log(divideSaldo(5));
