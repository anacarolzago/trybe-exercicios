const artistasQueEuGosto = [
    {
        nome: "Gal Costa",
        genero: "mpb"
    },
    {
        nome: "Caetano Veloso",
        genero: "mpb"
    },
    {
        nome: "Maneva",
        genero: "reggae"
    },
    {
        nome: "Adele",
        genero: "pop internacional"
    },
    {
        nome: "Jão",
        genero: "pop nacional"
    },
    {
        nome: "Arlindo Cruz",
        genero: "samba"
    },
    {
        nome: "Marisa Monte",
        genero: "romantica"
    },
];

let artista1 = {
    nome: "Gal Costa",
    genero: "mpb"
};

const album = {
    hitDeSucesso: 'JavaScript'
}

Object.assign(artista1, album);
/*
console.log(artista1);
console.log(album);
*/

const artista2 = Object.assign({}, artista1); // Copiar um objeto
artista2.nome = 'Michael Jackson';

console.log('Artista 1:', artista1);
console.log('Artista 2', artista2);