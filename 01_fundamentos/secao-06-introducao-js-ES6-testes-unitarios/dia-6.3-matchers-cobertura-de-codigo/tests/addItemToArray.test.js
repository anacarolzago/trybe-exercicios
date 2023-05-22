const exp = require('constants');
const addItemToArray = require('../src/addItemToArray');

describe('Testes addItemToArray', () => {
    const meuArray = [1, 2, 3];
    const valor = 4;
    const tamanhoArrayAntes = meuArray.length;
    addItemToArray(meuArray, valor);
    const ultimoValordoArray = meuArray[meuArray.length - 1];

    it('Retornar o array com o novo valor adicionado na ultima posicao', () => {
        expect(ultimoValordoArray).toBe(valor);
    });

    test('Verificar se um item está sendo adicionado ao array a cada vez que chama a função', () => {
        expect(meuArray.length).toBe(tamanhoArrayAntes + 1);
    });
});