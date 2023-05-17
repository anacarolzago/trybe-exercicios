const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

// console.log(epic.join(' '));
const epicPhrase = epic.reduce((accumulador, valorAtual) => {
    return `${accumulador} ${valorAtual}`;
});

console.log(epicPhrase);
