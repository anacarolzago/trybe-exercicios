/* Desenvolver uma função que recebe um array de números e retorna 
    todos os números ímpares do array original. */

const arrayOfNumbers = [1, 5, 2, 25, 0];

const filtraImpares = (arrayOfNumbers) => {
    // const arrayImpares = [];

    // for (const elemento of arrayOfNumbers) {
    //     if (elemento % 2 !== 0) {
    //         arrayImpares.push(elemento);
    //     }
    // }

    return arrayOfNumbers.filter((numero) => numero % 2 !== 0);
}

module.exports = filtraImpares;