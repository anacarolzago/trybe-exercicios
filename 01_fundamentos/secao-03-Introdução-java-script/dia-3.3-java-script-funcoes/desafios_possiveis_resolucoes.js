let lado1 = 9;
let lado2 = 7;
let lado3 = 8;

// 1. Crie uma função `checkIntegerPositive` que verifica se os valores  dos lados são inteiros e positivos.
function checkIntegerPositive(l1, l2, l3) {
    if (l1 > 0 && l2 > 0 && l3 > 0 &&
        Number.isInteger(l1) && Number.isInteger(l2) && Number.isInteger(l3)) {
        return true;
    } else {
        return false;
    }

    // Return resumido:
    // return l1 > 0 && l2 > 0 && l3 > 0 &&
    // Number.isInteger(l1) && Number.isInteger(l2) && Number.isInteger(l3);
}
// chamada para a função:
checkIntegerPositive(lado1, lado2, lado3);
// console.log(checkIntegerPositive(lado1, lado2, lado3));

// 2. Crie uma função `checkItsATriangle` que verifica se os valores dos  lados formam um triângulo.
function checkItsATriangle(l1, l2, l3) {
    if (l1 < l2 + l3 && l2 < l1 + l3 && l3 < l1 + l2) {
        return true;
    } else {
        return false;
    }

    // Return resumido:
    // return l1 < l2 + l3 && l2 < l1 + l3 && l3 < l1 + l2;
}

// chamada para a função:
checkItsATriangle(lado1, lado2, lado3);

// 3. Crie uma função `checkWitchTriangle` que verifica qual é o tipo do triângulo.
function checkWitchTriangle(l1, l2, l3) {
    if (l1 === l2 && l1 === l3) {
        return "equilátero";
    } else if (l1 !== l2 && l1 !== l3 && l2 !== l3) {
        return "escaleno";
    } else {
        return "isósceles";
    }
}

// chamada para a função:
checkWitchTriangle(lado1, lado2, lado3);

// 4. Crie uma função `checkPerimeterTriangle` que calcula o perímetro do triângulo.
function checkPerimeterTriangle(l1, l2, l3) {
    let perimetro = l1 + l2 + l3;
    return perimetro;
}
// chamada para a função:
checkPerimeterTriangle(lado1, lado2, lado3);

// 5. Crie uma função `infoTriangle` que irá apresentar uma mensagem na saída do console.
function infoTriangle(l1, l2, l3) {
    let isIntegerPositive = checkIntegerPositive(l1, l2, l3);
    let isTriangle = checkItsATriangle(l1, l2, l3);
    let witchTriangle = checkWitchTriangle(l1, l2, l3);
    let perimeterTriangle = checkPerimeterTriangle(l1, l2, l3);

    if (isIntegerPositive && isTriangle) {
        return "O triângulo é " +
            witchTriangle + " e seu perímetro vale " +
            perimeterTriangle + " cm";
    } else {
        return "Não é um triângulo";
    }
}
// chamada para a função com console.log
console.log(infoTriangle(lado1, lado2, lado3));