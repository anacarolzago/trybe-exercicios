function funcaoNormal() {
    console.log('Funcao normal');
}
funcaoNormal();

const funcaoAnonima = function () {
    console.log('Funcao anonima');
}
funcaoAnonima();

const funcaoArrow = () => {
    console.log('Funcao Arrow');
}
funcaoArrow();


// Exemplo
// function cumprimento(nome) {
//     return 'Ola ' + nome;
// }

const cumprimento = (nome) => 'Ola ' + nome;
console.log(cumprimento('Silvia'));
console.log(cumprimento('Sandro'));

const zeroParametros = () => {
    /* codigo aqui */ };
const semParametros = _ => {
    /* codigo aqui */ };
const umParametro = parametro => {};
const maisDeUmParametro = (parametro1, parametro2) => {}