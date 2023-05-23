const data = require('../data/zoo_data');

const isManager = (id) => data.employees.some((employe) => employe.managers.includes(id));

const getRelatedEmployees = (managerId) => {
  if (isManager(managerId) === true) {
    const funcionariosGerenciados = data.employees
      .filter((funcionario) => funcionario.managers.includes(managerId));
    return funcionariosGerenciados
      .map((funcionario) => `${funcionario.firstName} ${funcionario.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
};

module.exports = { isManager, getRelatedEmployees };
