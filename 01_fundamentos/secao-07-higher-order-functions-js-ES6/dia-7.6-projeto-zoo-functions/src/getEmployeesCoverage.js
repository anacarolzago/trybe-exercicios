const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const pegaColaborador = data.employees.map((funcionario) => {
  const objeto = {
    id: funcionario.id,
    fullName: `${funcionario.firstName} ${funcionario.lastName}`,
    species: funcionario.responsibleFor.map(
      (id) => species.find((specie) => specie.id === id).name,
    ),
    locations: funcionario.responsibleFor.map(
      (id) => species.find((specie) => specie.id === id).location,
    ),
  };
  return objeto;
});
// console.log(pegaColaborador);

const getEmployeesCoverage = (parametro) => {
  if (parametro === undefined) return pegaColaborador;
  const verificaSeTem = pegaColaborador.find((elemento) =>
    elemento.fullName.split(' ')[0] === Object.values(parametro)[0]
    || elemento.fullName.split(' ')[1] === Object.values(parametro)[0]
    || elemento.id === Object.values(parametro)[0]);

  if (!verificaSeTem) throw new Error('Informações inválidas');
  return verificaSeTem;
};

getEmployeesCoverage({ name: 'carol' });
module.exports = getEmployeesCoverage;
