const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const encontraEspecie = data.species.find((especie) => especie.name === animal);

  const comparaIdade = encontraEspecie
    .residents.every((objetoResident) => objetoResident.age >= age);
  return comparaIdade;
};

console.log(getAnimalsOlderThan('lions', 7));
module.exports = getAnimalsOlderThan;
