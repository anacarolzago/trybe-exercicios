const { fruits } = require('./data');

const findFruits = (...fruitsFind) => fruits.filter(({commonName}) =>  fruitsFind.includes(commonName));

const maisPesada = (retornoObjs) => {
   return retornoObjs.reduce((acc, curr) => { return ( curr.weightRange.max > acc.weightRange.max ) ? curr : acc }).commonName;
};

const retornoObjs = findFruits('Strawberries', 'Apple', 'Watermeloon');
console.log(maisPesada(retornoObjs));