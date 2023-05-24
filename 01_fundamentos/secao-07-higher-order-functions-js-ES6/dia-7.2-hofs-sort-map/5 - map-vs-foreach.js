/* Vamos pegar um array de números e retornar um novo array 
com cada elemento multiplicado por 3. 

    forEach()
        FOR EACH = PARA CADA
        Altera o array original: ❌
        Tem retorno: ❌

    map()
        Altera o array original: ❌
        Tem retorno: um array do mesmo tamanho do original
*/

const numeros = [1, 2, 3, 4, 5, 6];

const gerarNovoArrayMult3 = (array) => {
    // const novoArray = [];
    // for (const numero of array) {
    //     novoArray.push(numero * 3);    
    // }
    // array.forEach( ( elemento ) =>  novoArray.push(elemento * 3) );

    return array.map((numero) => numero * 3);
}
console.log(gerarNovoArrayMult3(numeros));