const users = [
    { firstName: 'Homer', lastName: 'Simpson', isDriver: true },
    { firstName: 'Marge', lastName: 'Simpson', isDriver: true },
    { firstName: 'Bart', lastName: 'Simpson', isDriver: false },
    { firstName: 'Lisa', lastName: 'Simpson', isDriver: false },
    { firstName: 'Maggie', lastName: 'Simpson', isDriver: false }
]

//  1 - Retornar apenas as pessoas que não são motoristas.
//  2 - Agora altere para que além de filtrar, mostre apenas os nomes das pessoas.

console.log(
    users
        .filter((elemento) => { return elemento.isDriver === false } )
        .map((elemento) => elemento.firstName )
);
