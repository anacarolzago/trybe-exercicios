const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Essa função retorna informações referentes aos elefantes conforme o argumento passado:', () => {
    // Retorna a quantidade de elefantes. Argumento: count. Deve retornar o número inteiro 4
    // Retorna um array com a relação dos nomes de todos os elefantes. Argumento: names. Deve retornar um array de nomes que possui o nome Jefferson
    // Retorna a média de idade dos elefantes. Argumento: averageAge. Deve retornar um número próximo a 10.5
    // Retorna a localização dos elefantes dentro do Zoológico. Argumento: location
    // Retorna a popularidade dos elefantes. Argumento: popularity
    // Retorna um array com a relação de dias em que é possível visitar os elefantes. Argumento: availability

    expect(handlerElephants('count')).toBe(4);
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
    expect(handlerElephants('averageAge')).toBe(10.5);
    expect(handlerElephants('location')).toBe('NW');
    expect(handlerElephants('popularity')).toBe(5);
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
  it('Retorna Null para valor inválido', () => {
    expect(handlerElephants('trybe')).toBe(null);
  });
  it('Retorna undefined para valor não definido', () => {
    expect(handlerElephants()).toBe(undefined);
  });
  it('Retorna erro se o valor for diferente de string', () => {
    expect(handlerElephants(1)).toBe('Parâmetro inválido, é necessário uma string');
  });
});
