/* Queremos encontrar uma pessoa dessa família que ainda não pode dirigir. 
    Retorna o PRIMEIRO elemento que encontrar que satisfaça a condiçao
*/

const users = [
    { firstName: 'Homer',  lastName: 'Simpson', isDriver: false },
    { firstName: 'Marge',  lastName: 'Simpson', isDriver: true },
    { firstName: 'Bart',   lastName: 'Simpson', isDriver: false },
    { firstName: 'Lisa',   lastName: 'Simpson', isDriver: false },
    { firstName: 'Maggie', lastName: 'Simpson', isDriver: true },
];

const podeDirigir = (pessoas) =>  pessoas.find( (elemento) => elemento.isDriver === true );
console.log(podeDirigir(users));