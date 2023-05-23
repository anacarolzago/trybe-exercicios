let melhorQuadrinho = {
    titulo: 'Watchmen',
    autor: ['Alan Moore', 'Enza Rafaela'],
    anoPublicacao: 1990,
    timeCriativo: {
        artista: 'Dave Gibbons',
        editor: 'Barbara Kesel',
    }
};

melhorQuadrinho['anoPublicacao'] = 1990; // Se a chave nao existir, acrescenta
// console.log(melhorQuadrinho.timeCriativo.artista);

console.log(melhorQuadrinho.autor)