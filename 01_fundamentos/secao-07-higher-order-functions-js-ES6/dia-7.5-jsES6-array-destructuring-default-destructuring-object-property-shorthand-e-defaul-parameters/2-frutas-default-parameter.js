const { fruits } = require('./data');

const findFruit = (fruitFind) => fruits.find(({commonName}) =>  commonName === fruitFind);

const fruitDescription = ({name, commonName, weightRange : { min, max, measurementUnit = 'g'}}) => {
    // const { min, max, measurementUnit = 'g' } = weightRange;
    return `${commonName} (${name}) weighs around ${min}-${max} ${measurementUnit}`
};

const retornoObj = findFruit('Strawberries');
console.log(fruitDescription(retornoObj));