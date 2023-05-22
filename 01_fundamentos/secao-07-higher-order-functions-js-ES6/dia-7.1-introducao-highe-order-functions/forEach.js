/* Vamos pegar um array de números e retornar um novo array 
com cada elemento multiplicado por 3. 

    FOR EACH = PARA CADA
    NAO ALTERA O ARRAY ORIGINAL ❌
*/

const numeros = [1, 2, 3, 4, 5, 6];

const gerarNovoArrayMult3 = (array) => {
    const novoArray = [];
    // for (const numero of array) {
    //     novoArray.push(numero * 3);    
    // }
    array.forEach( ( elemento ) =>  novoArray.push(elemento * 3) );
    return novoArray;
}
console.log(gerarNovoArrayMult3(numeros));

// ForEach com 1, 2 ou 3 parametros:
numeros.forEach((elemento, index, array) => { console.log(elemento, index, array)})
