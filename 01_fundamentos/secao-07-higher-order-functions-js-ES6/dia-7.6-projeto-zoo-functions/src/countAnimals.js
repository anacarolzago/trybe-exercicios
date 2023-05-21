const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  const resultado = {};
  if (!animal) {
    data.species.forEach((specie) => {
      resultado[specie.name] = specie.residents.length;
    });
    return resultado;
  }
  const encontraEspecie = data.species.find((especie) => especie.name === animal.species);
  const encontraPorSexo = encontraEspecie.residents.filter((sexo) => sexo.sex === animal.sex);

  if (animal.sex) {
    return encontraPorSexo.length;
  } return encontraEspecie.residents.length;
};

console.log(countAnimals({ species: 'giraffes', sex: 'female' }));
module.exports = countAnimals;
