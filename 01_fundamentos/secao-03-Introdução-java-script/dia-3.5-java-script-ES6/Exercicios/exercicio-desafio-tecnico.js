// Parte II – Desafio técnico

// 1 - Crie uma função que ligue e desligue o motor de um carro

/*
const ligarDesligar = (status) => {
    if (status === 'desligado'){
        status = 'ligado';
    } else {
        status = 'desligado';
    }

    console.log(`O motor está ${status}`);
    return status;
};
*/

const ligarDesligar = (status) => {
    status = status === 'desligado' ? 'ligado' : 'desligado';
    console.log(`O motor está ${status}`);
    return status;
};

// 2 - Crie uma função que calcule a área de um círculo

const circleArea = (radius) => {
    const PI = 3.14;

    if (typeof radius !== 'number') {
        return 'O parâmetri radius deve ser um número';
    }

    let area = PI * (radius ** 2);

    return `Esta é a área do círculo: ${area}`;
};

// 3 - Crie uma função que receba uma frase como parâmetro e retorne a maior palavra da frase
// A função longestWord ao receber a frase 'Antônio foi ao banheiro e não sabemos o que aconteceu'e o retorno da função longWord é: 'aconteceu';
// Ao receber a frase: Eu estudo na Trybe com muita dedicaçãoo retorno será dedicação;


const longestWord = text => {
    let wordArray = text.split(' ');
    let maxLength = 0;
    let result = '';

    for (const word of wordArray) {
        if (word.length > maxLength) {
            maxLength = word.length
            result = word
        }
    }

    return result
}

console.log(longestWord('Antônio foi ao banheiro e não sabemos o que aconteceu'));
