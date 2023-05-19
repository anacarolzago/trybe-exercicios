const filtraImpares = require('./2 - filter-Impares');

describe('Testes filtraImpares', () => {
    it('Is a function', () => {
        expect(typeof filtraImpares).toBe('function');
    });

    it('Return an array only with odd numbers', () => {
        expect(filtraImpares([1,3,4,5])).toEqual([1,3,5]);
        expect(filtraImpares([11,13,14,15])).toEqual([11,13,15]);
        expect(filtraImpares([2,4,6])).toEqual([]);
        expect(filtraImpares([1,3,5])).toEqual([1,3,5]);
        expect(filtraImpares([1,-3,0])).toEqual([1,-3]);
    });
});
