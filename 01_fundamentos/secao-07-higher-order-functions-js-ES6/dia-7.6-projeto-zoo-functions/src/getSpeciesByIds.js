const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => ids.map((elemento) => {
  const encontraEspecie = data.species.find((especie) => especie.id === elemento);
  return encontraEspecie;
});

getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce');
module.exports = getSpeciesByIds;
