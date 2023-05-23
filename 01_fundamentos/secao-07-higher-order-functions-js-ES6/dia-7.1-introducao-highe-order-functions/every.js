/* Verificar se em um grupo de idades
TODOS são maiores de idades 
   every =  retorna TRUE ou FALSE
   Itera até garantir que todos  satisfaçam a condição
*/

const ages = [23, 32, 17, 16, 34]; // TODOS são maiores de idade = false
const moreAges = [23, 32, 34]; // TODOS são maiores de idade = true

// ou: const verificarIdade = (idades) => idades.every((idade) => idade > 18 );
const verificarIdade = (idades) => {
    return idades.every((idade) => { return idade > 18 });
};

console.log(verificarIdade(moreAges));