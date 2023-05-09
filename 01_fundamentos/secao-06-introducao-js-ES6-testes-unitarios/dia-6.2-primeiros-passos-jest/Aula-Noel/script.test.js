const { soma, summationOf } = require('./script');

describe('The function soma()', () => {

    test('adds 1 + 2 to be equal 3', () => {
        expect(soma(1, 2)).toBe(3);
    });
    
    test('adds 5.1 + 6.55 to be equal 3', () => {
        expect(soma(5.1, 6.55)).toBeCloseTo(11.65);
    });
    
    test('adds 0 + 0 to be equal 0', () => {
        expect(soma(0, 0)).toBe(0);
    });
    
    test('adds -5 + -39 to be equal -44', () => {
        expect(soma(-5, -39)).toBe(-44);
    });
    
    test('adds 0 + -10 to be equal -10', () => {
        expect(soma(0, -10)).toBe(-10);
    });
})

// Função summationOf - recebe um número e retorna a somatória. Ex.:
// summationOf(1) --> 1
// summationOf(3) --> 6
// summationOf(5) --> 15

describe('The summationOf()', () => {
    
    it('summationOf is a function', () => {
        expect(typeof summationOf).toBe('function');
    });
    
    it('summationOf(1) return 1', () => {
        expect(summationOf(1)).toBe(1);
    });
    
    it('summationOf(3) return 6', () => {
        expect(summationOf(3)).toBe(6);
    });
    
    it('summationOf(5) return 15', () => {
        expect(summationOf(5)).toBe(15);
    });
});

