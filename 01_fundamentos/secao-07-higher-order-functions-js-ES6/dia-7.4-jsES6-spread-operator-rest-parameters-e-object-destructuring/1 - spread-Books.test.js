const { awesomeBooks } = require('./1 - spread-books');

describe('Teste de awesomeBooks', () => {
    it('Testa a concatenacao de horrorBooks e scifiBooks ', () => {
        expect(awesomeBooks).toEqual(['It, a coisa',
        'Aprenda Java em 21 dias',
        'O Iluminado',
        'Duna',
        'Ganhe 30 mil reais como programador em 3 semanas']);
    })
});