const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  if (!employeeName) {
    return {};
  }

  const funcionarios = data.employees
    .find((nome) => nome.firstName === employeeName || nome.lastName === employeeName);
  return funcionarios;
};

console.log(getEmployeeByName('Orloff'));
module.exports = getEmployeeByName;
