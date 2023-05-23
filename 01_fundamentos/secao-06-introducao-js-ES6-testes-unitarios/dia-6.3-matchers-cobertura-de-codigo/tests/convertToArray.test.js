const exp = require('constants');
const convertToArray = require('../src/convertToArray');


describe('Testes convertToArray', () => {
    it('Retornar um array contendo cada palavra da string recebida em uma posição', () => {
        expect( convertToArray('A turma 32 é demais') ).toEqual(['A', 'turma', '32', 'é', 'demais']);
    });

    it('Ao receber uma string vazia, deve lançar um erro', () => {
        expect(() => convertToArray() ).toThrow();
    });

    it('Verificar se ao informar uma string não vazia, retorna de fato um tipo array', () => {
        const retorno = convertToArray('A turma 32 é demais');
        expect(convertToArray('A turma 32 é demais')).toHaveLength(5);
        expect(Array.isArray(retorno)).toBe(true);
    });
});