const jogadoresFutebol = ['Pelé', 'Ronaldinho', 'Ronaldão', 'Messi', 'Kano', 'Marta'];
const [ firstElement, ...resto ] = jogadoresFutebol;

const meuObjeto = {
    nome: 'Pele',
    idade: 80,
}

const { nome, idade, nascimento = 'unknown' } = meuObjeto;
console.log(nascimento);