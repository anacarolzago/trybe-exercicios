/*
    Função convertToArray
    - Deve receber uma string contendo uma frase
    - Deve retornar um array contendo cada palavra da string recebida em uma posição
    - Se receber uma string vazia, deve lançar um erro;
    - Deve verificar se ao informar uma string não vazia, retorna de fato um array
*/

const convertToArray = (string) => {
    if (!string) {
        throw new Error;
    }

    return string.split(' ');
};

module.exports = convertToArray;