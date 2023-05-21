const birds = [
    { Nome: 'Albatroz', Familia: 'Diomedeidae', Ordem: 'Procellariiformes' },
    { Nome: 'Arara', Familia: 'Psittacidae', Ordem: 'Psitaciformes' },
    { Nome: 'Pica-pau', Familia: 'Picidae', Ordem: 'Piciformes' },
    { Nome: 'Urubu', Familia: 'Picidae', Ordem: 'Cathartiformes' },
    { Nome: 'Pato', Familia: 'Anatidae', Ordem: 'Anseriformes' },
    { Nome: 'Beija-flor', Familia: 'Trochilidae', Ordem: 'Apodiformes' },
];

const filtrarPassarin = ({FamiliaFiltro}) => {
   return birds.filter(({Familia}) => Familia === FamiliaFiltro);
}

console.log(filtrarPassarin({FamiliaFiltro: 'Picidae'}));
