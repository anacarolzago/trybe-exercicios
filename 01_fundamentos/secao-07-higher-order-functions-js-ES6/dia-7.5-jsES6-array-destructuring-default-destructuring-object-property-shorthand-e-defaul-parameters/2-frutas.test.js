describe('testa concatenação de dados de um objeto', () => {
    test('verifica se é possível concatenar os dados dos objetos apple, strawberries, watermelon', () => {
      expect(fruitDescription('Apple')).toBe('Apple (Malus) weighs around 70-100 g');
      expect(fruitDescription('Strawberries')).toBe('Strawberries (Fragaria × ananassa) weighs around 9-10 g');
      expect(fruitDescription('Watermelon')).toBe('Watermelon (Citrullus lanatus) weighs around 9-12 kg');
    });
});
