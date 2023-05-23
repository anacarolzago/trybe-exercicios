/*  Definição do map()
    Mapear o array

    Comparação com outras HOFs vistas até o momento:

    find = retorna um elemento 
    every = retorna boolean
    some = retorna boolean
    sort = o proprio array ordenado (altera o original)
    foreach = nao retorna nada

    map = retorna um array - com mesmo tamanho do array que chamou o map
*/

const users = [
    { firstName: 'Homer', lastName: 'Simpson', isDriver: true },
    { firstName: 'Marge', lastName: 'Simpson', isDriver: true },
    { firstName: 'Bart',  lastName: 'Simpson', isDriver: false },
    { firstName: 'Lisa',  lastName: 'Simpson', isDriver: false },
    { firstName: 'Maggie', lastName: 'Simpson', isDriver: false },
];

// Requisito 1: enviar uma mensagem pra todos users, mas só precisamos do primeiro nome para uma mensagem mais personalizada

// const novoArray = [];
// for (const elemento of users) {
//     novoArray.push(elemento.firstName);
// }
const novoArray = users.map((elemento) => elemento.firstName);
console.log(novoArray);