const birds = [
    { Nome: 'ALBATROZ', Familia: 'Diomedeidae', Ordem: 'Procellariiformes' },
    { Nome: 'Arara', Familia: 'Psittacidae', Ordem: 'Psitaciformes' },
    { Nome: 'Pica-pau', Familia: 'Picidae', Ordem: 'Piciformes' },
    { Nome: 'Urubu', Familia: 'Cathartidae', Ordem: 'Cathartiformes' },
    { Nome: 'Pato', Familia: 'Anatidae', Ordem: 'Anseriformes' },
    { Nome: 'Beija-flor', Familia: 'Trochilidae', Ordem: 'Apodiformes' },
];
  
// Requisito 1: gerar um array com o nome de cada pássaro em letras minúsculas
// const nomesAvesMinusculo = birds.map((elemento) => elemento.Nome.toLowerCase());

// Requisito 2: ordenar em ordem alfabética
// nomesAvesMinusculo.sort();
// console.log(nomesAvesMinusculo);

// Requisito 3: mostrar o primeiro pássaro que comece com letra P
// console.log(nomesAvesMinusculo.find((elemento) => elemento[0] === 'p'));








console.log( 
    birds
        .map((elemento) => elemento.Nome.toLowerCase())
        .sort()
        .find((elemento) => elemento[0] === 'p')
);






