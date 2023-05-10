// Desafio 1 - Crie a função compareTrue

function compareTrue(palavra1, palavra2) {

    if (palavra1 === true && palavra2 === true) {
        return true;

    } else {
        return false;
    }
};

// Desafio 2 - Crie a função splitSentence

function splitSentence(string) {

    return string.split(' ')
};

// Desafio 3 - Crie a função concatName

function concatName(variasPalavras) {

    primeiraPalavra = variasPalavras[0],
        ultimaPalavra = variasPalavras[variasPalavras.length - 1];

    return ultimaPalavra + ', ' + primeiraPalavra;

};

// Desafio 4 - Crie a função footballPoints

function footballPoints(wins, ties) {

    let vitorias = wins * 3;
    let empates = ties * 1;

    let resultado = vitorias + empates;

    return resultado;

};

// Desafio 5 - Crie a função highestCount

function highestCount(numeros) {

    let maiorNumero = numeros[0];
    let quantidade = 0;

    for (let index = 1; index < numeros.length; index += 1) {

        if (numeros[index] > maiorNumero) {
            maiorNumero = numeros[index];
        }
    };

    for (let index = 0; index < numeros.length; index += 1) {

        if (numeros[index] === maiorNumero) {
            quantidade += 1;
        }
    };

    return quantidade;
};

// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas

function calcTriangleArea(base, height) {

    let areaTriangulo = 0;

    areaTriangulo = (base * height) / 2;

    return areaTriangulo;
};

function calcRectangleArea(base, height) {

    let areaRetangulo = 0;

    areaRetangulo = (base * height);

    return areaRetangulo;
};

function calcAllAreas(base, height, form) {

    if (form === 'triângulo') {
        let retornoDaFuncao1 = calcTriangleArea(base, height);

        return 'O valor da área do triângulo é de: ' + retornoDaFuncao1;

    } else if (form === 'retângulo') {
        let retornoDaFuncao2 = calcRectangleArea(base, height);

        return 'O valor da área do retângulo é de: ' + retornoDaFuncao2;

    } else {
        return 'Não foi possível fazer o cálculo, insira uma forma geométrica válida';

    };
};

// Desafio 7 - Crie a função catAndMouse

function catAndMouse(mouse, cat1, cat2) {

    if (cat1 === cat2) {
        return 'os gatos trombam e o rato foge';

    } else if (cat1 > cat2 && cat1 > mouse) {
        return 'cat2'; // se o gato cat2 estiver mais próximo do rato;

    } else if (mouse < cat1 && cat1 > cat2) {
        return 'cat1'; // se o gato cat1 estiver mais próximo do rato;

    };
};

// console.log(catAndMouse(0, 2, 3)); // retorna cat2
// console.log(catAndMouse(0, 6, 12)); // retorna cat1
// console.log(catAndMouse(0, 2, 2)); // retorna frase


// Desafio 8 - Crie a função fizzBuzz

function fizzBuzz(arrayNumeros) {

    let resultado = [];

    for (let index = 0; index < arrayNumeros.length; index += 1) {

        if (arrayNumeros[index] % 3 === 0 && arrayNumeros[index] % 5 === 0) {
            resultado.push('fizzBuzz');

        } else if (arrayNumeros[index] % 3 === 0) {
            resultado.push('fizz');

        } else if (arrayNumeros[index] % 5 === 0) {
            resultado.push('buzz');

        } else {
            resultado.push('bug!');
        }
    };

    return resultado;
};

// Desafio 9 - Crie a função encode e a função decode

const mapString = (objectMap, string) => {
    const splitString = string.split('');
    const mappedArray = [];

    for (let index = 0; index < splitString.length; index += 1) {
        const character = splitString[index];
        const mappedValue = objectMap[character];

        if (mappedValue) {
            mappedArray.push(mappedValue);
        } else {
            mappedArray.push(character);
        }
    }

    return mappedArray.join('');
};

const encode = (string) => {
    const map = {
        a: 1,
        e: 2,
        i: 3,
        o: 4,
        u: 5,
    };
    return mapString(map, string);
};

const decode = (string) => {
    const map = {
        1: 'a',
        2: 'e',
        3: 'i',
        4: 'o',
        5: 'u',
    };
    return mapString(map, string);
};

// Desafio 10 - Crie a função techList

function techList(arrayTecnologias, nomePessoa) {

    let lista = arrayTecnologias.sort();
    let objetos = [];

    for (index = 0; index < lista.length; index += 1) {

        objetos[index] = {

            tech: lista[index],
            name: nomePessoa,

        }
    };
    return objetos;
};