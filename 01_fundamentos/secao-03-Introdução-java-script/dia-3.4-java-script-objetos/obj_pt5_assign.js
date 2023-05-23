// ASSIGN
// Copiar um objeto:  Object.Assign ( objetoQueVaiReceber, ObjetoQueVaiPassarOsValores )

let melhorQuadrinho = {
    titulo: 'Watchmen',
    autor: 'Alan Moore',
};

let anoPublicacao = {
    anoPublicacao: 1990
};

let timeCriativo = {
    artista: 'Dave Gibbons',
    editor: 'Barbara Kesel',
};


console.log(melhorQuadrinho);

//Object.assign(melhorQuadrinho, anoPublicacao);

// let objetoClone = melhorQuadrinho; // Cria uma pseudoCopia

let objetoClone = Object.assign({}, melhorQuadrinho, {
    chaveTeste: 'isso é um teste'
});

console.log(objetoClone);
melhorQuadrinho.titulo = 'Batman';
console.log(melhorQuadrinho);
console.log(objetoClone);