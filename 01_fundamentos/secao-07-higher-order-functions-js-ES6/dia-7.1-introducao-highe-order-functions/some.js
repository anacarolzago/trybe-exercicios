/* Verificar se em um grupo de idades
ALGUMA é menor de idade (<18) 

    SOME = retorna TRUE ou FALSE
    Itera até encontrar o primeiro elemento que satisfaça a condição
*/

const ages = [23, 32, 17, 16, 34]; // ALGUMA idade é menor de idade <18 = true
const moreAges = [23, 32, 34]; // nenhuma é menor de idade = false

const verificarIdade = (idades) => {
    return idades.some((idade) =>  idade < 18 );
};

console.log(verificarIdade(moreAges));