// Metodos para manipular Objetos
// KEYS, VALUES, ENTRIES, ASSIGN

let melhorQuadrinho = {
    titulo: 'Watchmen',
    autor: 'Alan Moore'
};

// KEYS = CHAVES
let keys = Object.keys(melhorQuadrinho); // Retorna um array contendo todas as chaves do objeto
//console.log(keys.includes('numeroPaginas')); // Includes = metodo PARA ARRAYS para saber se um valore existe ou nao dentro do array

// VALUES = VALORES
let values = Object.values(melhorQuadrinho); // Retorna um array contendo todos os valores do objeto
// console.log(values.includes('Watchmen'));

// ENTRIES = ENTRADAS
let entries = Object.entries(melhorQuadrinho); // Retorna um array contendo todas as entradas do objeto
console.log(melhorQuadrinho); // Retorna em formato de objeto {}
console.log(entries); // Retorna em formato de array