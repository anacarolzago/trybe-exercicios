const {formatDate} = require('./4 - rest-spread-juntos');

describe('testa a funcao formatDate', () => {
    it('ao inserir is dados de uma data valida, retorna a data formatada em dd/mm/aaaa', () => {
        let dados = [1999, 5, 8];
        expect(formatDate(...dados)).toBe('5/8/1999');

        dados = [1999, 5, 8, 15, 16, 22];
        expect(formatDate(...dados)).toBe('5/8/1999 15:16:22');
    });
});