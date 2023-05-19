const filtraImpares = require('./2 - filter-Impares');

describe('Testes filtraImpares', () => {
    it('Verifica se [1, 3, 4, 5] retorna [1, 3, 5]', () => {
        expect(filtraImpares([1,3,4,5])).toEqual([1,3,5]);
    });

    it('Verifica se [15, 36, 49, 5] retorna [15, 49, 5]', () => {
        expect(filtraImpares([15, 36, 49, 5])).toEqual([15, 49, 5]);
    });
});
