const container = document.querySelector('#first');

const criarDivs = (classes) => {
    const novoElemento = document.createElement('div');
    novoElemento.classList = classes;
    return novoElemento;
}

function adicionarDivs(parent, child) {
    parent.appendChild(child);
}

const minhasFormas = ['yellow circle small', 'green circle medium', 'red square small'];

for (let minhaForma of minhasFormas) {
    console.log(minhaForma)
    adicionarDivs(container, criarDivs(minhaForma));
}

// adicionarDivs(container, criarDivs('yellow circle small'));
// adicionarDivs(container, criarDivs('green circle medium'));
// adicionarDivs(container, criarDivs('red square small'));
