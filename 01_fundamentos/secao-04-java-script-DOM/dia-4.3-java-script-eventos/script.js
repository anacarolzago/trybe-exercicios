window.onload = () => {
    const startBtn = document.getElementById('start-race-btn');
    const resetBtn = document.getElementById('reset-race-btn');
    const player1 = document.getElementById('player1');
    const player2 = document.getElementById('player2');
    const audio = document.getElementById('audioWinner');

    player1.style.marginLeft = 0;
    player2.style.marginLeft = 0;

    startBtn.addEventListener('click', () => {
        player1.style.marginLeft = parseInt(player1.style.marginLeft) + Math.random() * 300 + 'px';
        player2.style.marginLeft = parseInt(player2.style.marginLeft) + Math.random() * 300 + 'px';

        const player1Win = parseInt(player1.style.marginLeft) > window.innerWidth;
        const player2Win = parseInt(player2.style.marginLeft) > window.innerWidth;

        if (player1Win) {
            alert('PLAYER 1 VENCEU!');
            audio.play();
            reset();
        } else if (player2Win) {
            alert('PLAYER 2 VENCEU!');
            audio.play();
            reset();
        }

    });

    const reset = () => {
        player1.style.marginLeft = 0;
        player2.style.marginLeft = 0;

        player1.style.backgroundImage = 'url(./files/selectPlayer.png)';
        player2.style.backgroundImage = 'url(./files/selectPlayer.png)';
    };

    resetBtn.addEventListener('click', reset);


    const carros = document.querySelectorAll('.car');
    const personagens = document.querySelectorAll('.playersImages');

    for (let carro of carros) {
        carro.addEventListener('click', (event) => {
            const selected = document.querySelector('.selected');
            if (selected) {
                selected.classList.remove('selected');
            }

            event.target.classList.add('selected');
        })
    }

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