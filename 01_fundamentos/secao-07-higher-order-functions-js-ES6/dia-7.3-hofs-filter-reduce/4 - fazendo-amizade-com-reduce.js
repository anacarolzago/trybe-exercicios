/* O reduce é uma função muito poderosa que permite 
   combinar todo o resultado da aplicação da função 
   passada como parâmetro nos elementos do array em
   um único resultado.

   Existem várias maneiras de usarmos o reduce */

/* Tarefa do dia: construir um somatório a partir de um array de números
   1 - Temos um conjunto de números (no caso o array) é informado.
   2 - Teremos apenas um número como resposta (no caso, a soma de todos os números).
   3 - A princípio, a soma é 0. 
   4 - A cada elemento do array, nós acumulamos esse valor à soma final. */

const arrayValoresDaConta = [1, 2, 3, 4];

const totalizador = arrayValoresDaConta.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual;
}, 0);

console.log(totalizador);
