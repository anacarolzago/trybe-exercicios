const sum = (a, b) => a + b;

test('sums two values', () => {
  expect(sum(2, 3)).toEqual(5);
});

const {soma} = require('./script');

// Estrutura basica do test
// test('', () => {}) 

describe('TESTE DA FUNCTION SOMA', () => {
 test('Soma 4 + 2 e espera que seja = 6', () => {
     expect( soma(4, 2) ).toBe(6);
 });

 test('Soma 3 + 2 e espera que seja = 5', () => {
     expect( soma(3, 2) ).toBe(5);
 });

 test('Soma 0 + 0 e espera que seja = 0', () => {
     expect( soma(0, 0) ).toBe(0);
 });

 test('Soma -1 + -3 e espera que seja = -4', () => {
     expect( soma(-1, -3) ).toBe(-4);
 });

 test('Soma 5.23 + 1.12 e espera que seja = 6.35', () => {
     expect( soma(5.23, 1.12) ).toBeCloseTo(6.35);
 });
});