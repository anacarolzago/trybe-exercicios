const { encode, decode } = require('./encodeDecode');

// Teste se encode e decode são funções;
// Para a função encode, teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;
// Para a função decode, teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u, respectivamente;
// Teste se as demais letras/números não são convertidos para cada caso;
// Teste se a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro.

describe('testa a função encode e decode', () => {

    test('encode is a function', () => {
        expect(typeof encode).toBe('function');
    });

    test('decode is a function', () => {
        expect(typeof decode).toEqual('function');
    });

    test('vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5', () => {
        expect(encode('a, e, i, o, u')).toEqual('1, 2, 3, 4, 5');
    });

    test('se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u', () => {
        expect(decode('1, 2, 3, 4, 5')).toEqual('a, e, i, o, u');
    });

    // test('se letras/números não são convertidos para cada caso', () => {
    //     expect(decode('1, 2, 3, 4 e 5')).toBe('a, e, i, o, u');
    // });

    test('se a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro', () => {
        expect(encode('trybe').length).toEqual(5);
    });

    test('se a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro', () => {
        expect(decode('trybe').length).toEqual(5);
    });
})