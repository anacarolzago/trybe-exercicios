const divPixels = document.querySelector('#pixel-board');

// Requisito 2 - corDaLista
const corDaLista = () => {
    const cor1 = document.querySelectorAll('.color')[0];
    cor1.style.backgroundColor = 'black';

    const cor2 = document.querySelectorAll('.color')[1];
    cor2.style.backgroundColor = '#123950';

    const cor3 = document.querySelectorAll('.color')[2];
    cor3.style.backgroundColor = '#15688d';

    const cor4 = document.querySelectorAll('.color')[3];
    cor4.style.backgroundColor = '#1fa7d7';
};

// Requisito 3 - Gerar Cores (Após a monitoria individual, tive ajuda para diminuir o código e deixar mais simples (no final está o código que fiz primeiro))
const gerarCores = () => Math.floor(Math.random() * 300);
const pintaPaleta = () => {
    const arrayCores = document.querySelectorAll('.color');
    const storageCores = [];

    for (let index = 0; index < arrayCores.length; index += 1) {
        if (index === 0) {
            // A primeira cor tem que ser preta (tbm o requisito 8)
            arrayCores[index].style.backgroundColor = 'black';
            storageCores.push(arrayCores[index].style.backgroundColor);
        } else {
            arrayCores[
                index
            ].style.backgroundColor = `rgb(${gerarCores()}, ${gerarCores()}, ${gerarCores()})`;
            storageCores.push(arrayCores[index].style.backgroundColor);
        }
    }
    // Requisito 5
    localStorage.setItem('colorPalette', JSON.stringify(storageCores));
};

// Requisito 4 - Chamando o botão lá do HTML + adicionando um evento ao clicar no botão
const botaoGeraCores = document.querySelector('#button-random-color');
botaoGeraCores.addEventListener('click', pintaPaleta);

// Requisito 6 e 7 - Criando o quadro de pixels brancos
const quadroPixels = (quantidadeQuadrados) => {
    for (let index = 0; index < quantidadeQuadrados; index += 1) {
        // Criação do elemento
        const quadros = document.createElement('div');
        // Manipulação do elemento
        quadros.style.backgroundColor = 'white';
        quadros.className = 'pixel';
        // Inserir o elemento na página
        divPixels.appendChild(quadros);
    }
};

// Requisito 9 - Seleciona uma cor na paleta de cores
const selecionaCor = () => {
    const selecionaColor = document.getElementsByClassName('color');
    for (let index = 0; index < selecionaColor.length; index += 1) {
        selecionaColor[index].addEventListener('click', (event) => {
            // Seleciona a cor
            const corSelecionada = document.querySelector('.selected');
            // Remove a cor ja selecionada
            if (corSelecionada) {
                corSelecionada.classList.remove('selected');
            }
            // Adiciona evento na cor
            event.target.classList.add('selected');
        });
    }
};

// Requisito 10 - Preenche o quadro branco com cor selecionada
const pintaQuadrados = (event) => {
    // Ainda não é cor, é a li
    const liSelecionada = document.querySelector('.selected');
    // Capturar a cor
    const corCapturada = liSelecionada.style.backgroundColor;
    const evento = event;
    evento.target.style.backgroundColor = corCapturada;
};

const savePixelsColor = () => {
    const array = [];
    const quadradinhos = document.querySelectorAll('.pixel');

    for (let index = 0; index < quadradinhos.length; index += 1) {
        array.push(quadradinhos[index].style.backgroundColor);
    }

    localStorage.setItem('pixelBoard', JSON.stringify(array));
};

divPixels.addEventListener('click', (event) => {
    pintaQuadrados(event);
    savePixelsColor();
});

// Requisito 11 - Clica no botão limpar
const buttonLimpa = () => {
    // Chama o botão
    const botaoLimpaCores = document.querySelector('#clear-board');
    // Pegar os elementos pixel e colocar object.values pq o forEach precisa que retorne um array e o pixel não é um array
    const pixels = Object.values(document.querySelectorAll('.pixel'));

    // Adiciona evento no botão
    botaoLimpaCores.addEventListener('click', () => {
        pixels.forEach((pixel) => {
            const pixelzinho = pixel;
            pixelzinho.style.backgroundColor = 'white';
        });
    });
};

// Requisito 13 e 14 - Permite usuário preencher um novo tamanho para o quadro de pixels
// Limpar o quadro branco já criado ao clicar no botão e criar novo
const limpaQuadro = () => {
    divPixels.innerHTML = '';
};

// Requisito 15 - Salva local storage
const salvaNovoQuadroBranco = (quantidadeQuadrados) => {
    localStorage.setItem('boardSize', quantidadeQuadrados);
};

const criaQuadroBranco = () => {
    const valorInput = document.querySelector('#board-size').value;
    let valorInputTotal = valorInput * valorInput;
    salvaNovoQuadroBranco(valorInputTotal);

    if (valorInput < 1) {
        alert('Board inválido!');
    }
    for (let index = 0; index < valorInputTotal; index += 1) {
        const quadradinhos = document.createElement('div');
        quadradinhos.style.backgroundColor = 'white';
        quadradinhos.className = 'pixel';
        divPixels.appendChild(quadradinhos);
        if (valorInput > 50) {
            valorInputTotal = 2500;
        } else if (valorInput < 5) {
            valorInputTotal = 25;
        }
    }
};

// Esta função chama duas funções
const novoQuadroBranco = () => {
    limpaQuadro();
    criaQuadroBranco();
};

// Requisito 15 - Recupera local storage
const recuperaQuadroBranco = () => {
    const salvaLocalStorage = localStorage.getItem('boardSize');

    if (!salvaLocalStorage) return 25;
    return JSON.parse(salvaLocalStorage);
};

const botaoInput = document.querySelector('#generate-board');
botaoInput.addEventListener('click', novoQuadroBranco);

// Requisito 12 - Recupera LocalStorage
const recuperaPixelStorage = () => {
    const coresSalvas = JSON.parse(localStorage.getItem('pixelBoard'));
    const pixels = document.querySelectorAll('.pixel');

    for (let index = 0; index < pixels.length; index += 1) {
        pixels[index].style.backgroundColor = coresSalvas[index];
    }
};

// Requisito 5 - Guardando cores selecionadas no local storage
const verificaLocalStorage = () => {
    if (localStorage.length !== 0) {
        const storage = JSON.parse(localStorage.getItem('colorPalette'));
        const arrayCores = document.querySelectorAll('.color');

        for (let index = 0; index < arrayCores.length; index += 1) {
            arrayCores[index].style.backgroundColor = storage[index];
        }
    } else { // Se não tiver, eu chamo as funções aqui no else
        pintaPaleta();
        savePixelsColor();
    }
};

window.onload = () => {
    corDaLista();
    verificaLocalStorage();
    quadroPixels(recuperaQuadroBranco());
    recuperaPixelStorage();
    selecionaCor();
    buttonLimpa();
};
/*
Requisito 4 e 5- Criando botão com JS

const botao = document.createElement('button');
botao.id = 'button-random-color';
botao.innerText = 'Cores aleatórias';

body.appendChild(botao);

Gerando as cores aleatórias com Math.floor (retorna n° inteiro) e Math.random (gera n° aleatórios)

const gerarCores = () => {
    let r = Math.floor(Math.random() * 300);
    let g = Math.floor(Math.random() * 300);
    let b = Math.floor(Math.random() * 300);

    let cor2 = document.querySelectorAll('.color')[1];
    cor2.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

    let a = Math.floor(Math.random() * 300);
    let e = Math.floor(Math.random() * 300);
    let c = Math.floor(Math.random() * 300);

    let cor3 = document.querySelectorAll('.color')[2];
    cor3.style.backgroundColor = `rgb(${a}, ${e}, ${c})`;

    let t = Math.floor(Math.random() * 300);
    let u = Math.floor(Math.random() * 300);
    let v = Math.floor(Math.random() * 300);

    let cor4 = document.querySelectorAll('.color')[3];
    cor4.style.backgroundColor = `rgb(${t}, ${u}, ${v})`;
};

gerarCores();
*/