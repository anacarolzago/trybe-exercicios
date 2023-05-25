const ulElement = document.querySelector('.container main ul');
const h2Element = document.querySelector('.container main h2');

function createLiElement(nome, valor) {
    const liElement = document.createElement('li');

    liElement.innerHTML = `
        <b>${nome}<b>
        <span>${valor}</span
    `
    // Retorna a Li com o <b> e <span> preenchidos
    return liElement;
};

export function renderCoins(coins, baseCoin) {
    ulElement.innerHTML = '';
    h2Element.innerHTML = `Valores referentes a 1 ${baseCoin}`

    coins.forEach(coin => {
        const nome = coin.name;
        const valor = coin.value;

        const liElement = createLiElement(nome, valor);
        
        ulElement.appendChild(liElement)
    })
};