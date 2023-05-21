/* Ordenando um array de objetos */

const users = [
    { firstName: 'Homer', lastName: 'Simpson', isDriver: true },
    { firstName: 'Marge', lastName: 'Simpson', isDriver: true },
    { firstName: 'Bart',  lastName: 'Simpson', isDriver: false },
    { firstName: 'Lisa',  lastName: 'Simpson', isDriver: false },
    { firstName: 'Maggie', lastName: 'Simpson', isDriver: false },
];

users.sort( (a, b) =>  a.firstName > b.firstName ? 1 : -1);
console.log(users);

  