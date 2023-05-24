/* 

    Função addItemToArray
    - Deve receber um array e um valor a ser adicionado no array
    - Deve retornar o array com o novo valor adicionado na ultima posicao (teste)
    - Verificar se um item está sendo adicionado ao array a cada vez que chama a função  (teste)

    Exemplos:
    - Ao receber um array vazio, deve retornar o array 1 item;
    - Ao receber um array com 1 item;, deve retornar o array com 2 itens;
    - E assim sucessivamente.

*/

const addItemToArray = (array, valor) => {
    array.push(valor);
};
module.exports = addItemToArray;