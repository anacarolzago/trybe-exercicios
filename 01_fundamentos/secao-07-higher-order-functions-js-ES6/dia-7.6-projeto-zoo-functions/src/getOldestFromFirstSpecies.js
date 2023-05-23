const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const encontraColaboradora = data.employees.find((pessoa) => pessoa.id === id);
  const encontraEspecie = data.species.find((especie) => especie
    .id === encontraColaboradora.responsibleFor[0]);
  const maisVelho = encontraEspecie.residents
    .reduce((acc, curr) => (acc.age > curr.age ? acc : curr));
  return Object.values(maisVelho);
};

console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

module.exports = getOldestFromFirstSpecies;
