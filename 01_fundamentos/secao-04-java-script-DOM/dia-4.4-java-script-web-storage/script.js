// Essa função é responsável por identificar quem é o player
// e incrementar o valor do respectivo span
const atualizarScore = (player) => {
    const playerImage = player.style.backgroundImage;
    if (playerImage.includes('mario')) {
        const scoreElement = document.getElementById('mario-score');
        scoreElement.innerText = parseInt(scoreElement.innerText) + 1;
    } else if (playerImage.includes('luigi')) {
        const scoreElement = document.getElementById('luigi-score');
        scoreElement.innerText = parseInt(scoreElement.innerText) + 1;
    } else if (playerImage.includes('yoshi')) {
        const scoreElement = document.getElementById('yoshi-score');
        scoreElement.innerText = parseInt(scoreElement.innerText) + 1;
    } else if (playerImage.includes('peach')) {
        const scoreElement = document.getElementById('peach-score');
        scoreElement.innerText = parseInt(scoreElement.innerText) + 1;
    }
}

// Constantes para guardar a KEY (Chave) 
//que vai guardar os dados do local storage
const GAME_SCORES = 'GAME_SCORES';
const GAME_POSICOES = 'GAME_POSICOES';

// SETA (joga, grava, coloca) os dados de posicionamento 
// e imagem do player no local storage
const guardarPosicoes = (player1, player2) => {
    const status = {
        player1: player1.style.marginLeft,
        player2: player2.style.marginLeft,
        player1Img: player1.style.backgroundImage,
        player2Img: player2.style.backgroundImage,
    }

    // significa que:
    // vai no localStorage, SETA um item novo
    // cujo identificador (chave) é GAME_POSICOES
    // e o valor é o que está contido em "status"
    // Status por sua vez é um objeto que precisa ser
    // convertido para uma string (usamos nesse caso o JSON.stringify sempre)
    localStorage.setItem(GAME_POSICOES, JSON.stringify(status));
}

const guardarScore = () => { // set = setar
    const status = {
        scoreMario: document.querySelector('#mario-score').innerText,
        scoreLuigi: document.querySelector('#luigi-score').innerText,
        scorePeach: document.querySelector('#peach-score').innerText,
        scoreYoshi: document.querySelector('#yoshi-score').innerText,
    }

    localStorage.setItem(GAME_SCORES, JSON.stringify(status));
};

const recuperarScore = () => {
    const dadosLocalStorage = JSON.parse(localStorage.getItem(GAME_SCORES));
    document.querySelector('#mario-score').innerText = dadosLocalStorage.scoreMario;
    document.querySelector('#luigi-score').innerText = dadosLocalStorage.scoreLuigi;
    document.querySelector('#peach-score').innerText = dadosLocalStorage.scorePeach;
    document.querySelector('#yoshi-score').innerText = dadosLocalStorage.scoreYoshi;
    // console.log(dadosLocalStorage);
};

const recuperarPosicoes = (player1, player2) => {
    const dadosLocalStorage = JSON.parse(localStorage.getItem(GAME_POSICOES));
    player1.style.marginLeft = dadosLocalStorage.player1;
    player2.style.marginLeft = dadosLocalStorage.player2;
    player1.style.backgroundImage = dadosLocalStorage.player1Img;
    player2.style.backgroundImage = dadosLocalStorage.player2Img;
    // console.log(dadosLocalStorage);
};

window.onload = () => {
    // Obtem os elementos 
    const startBtn = document.getElementById('start-race-btn');
    const resetBtn = document.getElementById('reset-race-btn');
    const player1 = document.getElementById('player1');
    const player2 = document.getElementById('player2');
    const audio = document.getElementById('audioWinner');

    // Seta posicao inicial dos players
    player1.style.marginLeft = 0;
    player2.style.marginLeft = 0;

    // verifica se tem algo no local storage
    if (localStorage.getItem(GAME_SCORES)) {
        recuperarScore();
    }

    // verifica se tem algo no local storage
    if (localStorage.getItem(GAME_POSICOES)) {
        recuperarPosicoes(player1, player2);
    }

    // adiciona o evento para o botao start
    startBtn.addEventListener('click', () => {
        player1.style.marginLeft = parseInt(player1.style.marginLeft) + Math.random() * 300 + 'px';
        player2.style.marginLeft = parseInt(player2.style.marginLeft) + Math.random() * 300 + 'px';

        const player1Win = parseInt(player1.style.marginLeft) > window.innerWidth;
        const player2Win = parseInt(player2.style.marginLeft) > window.innerWidth;

        if (player1Win) {
            alert('PLAYER 1 VENCEU!');
            atualizarScore(player1);
            guardarScore();
            audio.play();
            reset();
        } else if (player2Win) {
            alert('PLAYER 2 VENCEU!');
            atualizarScore(player2);
            guardarScore();
            audio.play();
            reset();
        }

        guardarPosicoes(player1, player2);

    });

    // reseta a partida: posicao dos players e imagem padrao
    const reset = () => {
        player1.style.marginLeft = 0;
        player2.style.marginLeft = 0;

        player1.style.backgroundImage = 'url(./files/selectPlayer.png)';
        player2.style.backgroundImage = 'url(./files/selectPlayer.png)';
    };

    // adiciona o evento para o botao start
    resetBtn.addEventListener('click', () => {
        reset();
        localStorage.clear();
        location.reload();
    });

    // hora de setar o comportamento dos personagens e dos carros (players)
    const carros = document.querySelectorAll('.car');
    const personagens = document.querySelectorAll('.playersImages');

    // como é plural 
    // devemos ir de um em um, adicionando o evento click
    for (let carro of carros) {
        carro.addEventListener('click', (event) => {
            const selected = document.querySelector('.selected');
            if (selected) {
                selected.classList.remove('selected');
            }

            event.target.classList.add('selected');
        })
    }

    // como é plural 
    // devemos ir de um em um, adicionando o evento click
    for (let persona of personagens) {
        persona.addEventListener('click', (event) => {
            const selected = document.querySelector('.selected');
            if (selected) {
                selected.style.backgroundImage = `url(${event.target.src})`
                selected.classList.remove('selected');
            }
        })
    }
}