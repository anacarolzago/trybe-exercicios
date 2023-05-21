/*  Ordenando um array numérico */

const arrayNumeros = [9, 11, 3, 0, 1];

const comparacao = (a, b) => {
    if (a < b) { // 9 e 11
        return -1; // Não troca
    } else if (a > b) {
        return 1; // Troca
    }
    
    return 0; // Nao troca
//     /* a < b = negativo 
//        a > b = positivo
//        a === b = 0
//     */
};

// const comparacao = (a, b) =>  (a - b);
arrayNumeros.sort( (a, b) =>  (a - b) );  

console.log(arrayNumeros);