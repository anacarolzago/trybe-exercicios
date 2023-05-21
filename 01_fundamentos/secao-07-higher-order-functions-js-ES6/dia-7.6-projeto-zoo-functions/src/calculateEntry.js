const data = require('../data/zoo_data');

// prices: {
//   adult: 49.99,
//   senior: 24.99,
//   child: 20.99,

const countEntrants = (entrants) => {
  const child = entrants.filter((entrada) => entrada.age < 18).length;
  const adult = entrants.filter((entrada) => entrada.age >= 18 && entrada.age < 50).length;
  const senior = entrants.filter((entrada) => entrada.age >= 50).length;

  return { child, adult, senior };
};

const calculateEntry = (entrants) => {
  if (entrants === undefined || entrants.length === undefined) {
    return 0;
  } return countEntrants(entrants).child * 20.99
    + countEntrants(entrants).adult * 49.99 + countEntrants(entrants).senior * 24.99;
};
console.log(calculateEntry());
module.exports = { calculateEntry, countEntrants };
