const { createSuperhero } = require('./4-abbreviation-object-literal');

const response = {
    name: 'Bruce Wayne',
    superheroName: 'Batman',
    nickname: 'The Caped Crusader',
    powers: 'Determination and money'
};

describe('testa a função createSuperhero', () => {
    test('cria o superhero Bruce Wayne', () => {
      expect(createSuperhero('Bruce Wayne', 'Batman', 'The Caped Crusader', 'Determination and money')).toEqual(response);
    });
});