const data = require('../data/zoo_data');

// getSchedule('lions');
// o retorno será [ 'Tuesday', 'Wednesday', 'Thursday', ' Friday', 'Saturday', 'Sunday'

const cronograma = {
  Tuesday: {
    officeHour: 'Open from 8am until 6pm',
    exhibition: [
      'lions',
      'tigers',
      'bears',
      'penguins',
      'elephants',
      'giraffes',
    ],
  },
  Wednesday: {
    officeHour: 'Open from 8am until 6pm',
    exhibition: [
      'tigers',
      'bears',
      'penguins',
      'otters',
      'frogs',
      'giraffes',
    ],
  },
  Thursday: {
    officeHour: 'Open from 10am until 8pm',
    exhibition: ['lions', 'otters', 'frogs', 'snakes', 'giraffes'],
  },
  Friday: {
    officeHour: 'Open from 10am until 8pm',
    exhibition: [
      'tigers',
      'otters',
      'frogs',
      'snakes',
      'elephants',
      'giraffes',
    ],
  },
  Saturday: {
    officeHour: 'Open from 8am until 10pm',
    exhibition: [
      'lions',
      'tigers',
      'bears',
      'penguins',
      'otters',
      'frogs',
      'snakes',
      'elephants',
    ],
  },
  Sunday: {
    officeHour: 'Open from 8am until 8pm',
    exhibition: ['lions', 'bears', 'penguins', 'snakes', 'elephants'],
  },
  Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
};

const diasDaSema = ['Tuesday', 'Wednesday', 'Thursday', ' Friday', 'Saturday', 'Sunday', 'Monday'];

const getSchedule = (scheduleTarget) => {
  const nomeAnimal = data.species.find((especie) => especie.name === scheduleTarget);
  const dias = diasDaSema.find((dia) => dia === scheduleTarget);

  if (scheduleTarget === undefined) return cronograma;
  if (!nomeAnimal && !dias) return cronograma;
  if (nomeAnimal) return nomeAnimal.availability;
  return { [scheduleTarget]: cronograma[scheduleTarget] };
};
console.log(getSchedule('lions'));
module.exports = getSchedule;
