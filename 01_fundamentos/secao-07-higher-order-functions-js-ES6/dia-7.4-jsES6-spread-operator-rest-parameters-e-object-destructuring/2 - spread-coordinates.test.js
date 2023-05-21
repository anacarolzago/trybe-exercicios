const { printCoordinates } = require('./2 - spread-coordinates');

const point = [1.0, 2.2, -6.6, 3]; // Point coordinates are x = 1, y = 2.2 and z = -6.6 
const otherPoint = [0.1, 3.5, -99.6]; // Point coordinates are x = 0.1, y = 3.5 and z = -99.6

describe('testa a funcao printCoordinates', () => {
    it('inserindo coordenadas é impresso a frase contendo as coordenadas inseridas', () => {
        expect( printCoordinates(...point)).toBe('Point coordinates are x = 1, y = 2.2 and z = -6.6');
        expect( printCoordinates(...otherPoint)).toBe('Point coordinates are x = 0.1, y = 3.5 and z = -99.6');
    });
})