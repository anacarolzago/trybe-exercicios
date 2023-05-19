/* Desenvolver uma função que recebe um array de números e retorna 
    todos os números ímpares do array original. */

const arrayOfNumbers = [1, 5, 2, 25, 0];

const filtraImpares = (arrayOfNumbers) => {
    // const arrayImpares = [];

    // for (let index =0; index < arrayOfNumbers.length; index += 1) {
    //     if (arrayOfNumbers[index] % 2 === 1 || arrayOfNumbers[index] % 2 === -1) {
    //         arrayImpares.push(arrayOfNumbers[index]);
    //     }
    // }
    // return arrayImpares;

    return arrayOfNumbers.filter((numero) => numero % 2 !== 0);
};

module.exports = filtraImpares;