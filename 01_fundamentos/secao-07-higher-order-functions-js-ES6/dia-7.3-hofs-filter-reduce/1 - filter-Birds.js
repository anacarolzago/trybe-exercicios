const birds = [
    { Nome: 'ALBATROZ', Familia: 'Diomedeidae', Ordem: 'Procellariiformes' },
    { Nome: 'Arara', Familia: 'Psittacidae', Ordem: 'Psitaciformes' },
    { Nome: 'Pica-pau', Familia: 'Picidae', Ordem: 'Piciformes' },
    { Nome: 'Urubu', Familia: 'Cathartidae', Ordem: 'Cathartiformes' },
    { Nome: 'Pato', Familia: 'Anatidae', Ordem: 'Anseriformes' },
    { Nome: 'Beija-flor', Familia: 'Trochilidae', Ordem: 'Apodiformes' },
];

// Requisito: gerar um array com o nome de cada pássaro em letras minúsculas
//            ordenar em ordem alfabética
//            mostrar o primeiro pássaro que comece com letra P

console.log( 
    birds
        .map((elemento) => elemento.Nome.toLowerCase())
        .sort()
        .filter((elemento) => elemento[0] === 'p')
);