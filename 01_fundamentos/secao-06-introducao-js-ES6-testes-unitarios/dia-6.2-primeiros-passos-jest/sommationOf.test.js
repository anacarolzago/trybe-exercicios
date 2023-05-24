const {summationOf} = require('./script');
    
describe('TESTE DA FUNCTION SUMMATIONOF', () => {
    test('Espera que a função summationOf exista', () => {
        expect(typeof summationOf).toBe('function');
    });
    
    test('Espera que a função summationOf retorne 1 quando receber 1', () => {
        expect( summationOf(1) ).toBe(1);
    });
    
    test('Espera que a função summationOf retorne 6 quando receber 3', () => {
        expect( summationOf(3) ).toBe(6);
    });
    
    test('Espera que a função summationOf retorne 15 quando receber 5', () => {
        expect( summationOf(5) ).toBe(15);
    });
    
    test('Espera que a função summationOf retorne 10 quando receber 4', () => {
        expect( summationOf(4) ).toBe(10);
    });
});



