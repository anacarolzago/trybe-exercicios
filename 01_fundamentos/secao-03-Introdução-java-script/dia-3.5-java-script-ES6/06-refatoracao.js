const compararValores = (valor1, valor2) => valor1 < valor2 ? 'uhuuu' : 'oh no';
console.log(compararValores(12, 45));

// exemplo 2
// calcular a area de um triangulo


function calcArea(base, altura) { // sem arrow function
    return (base * altura) / 2;
}

const calcArea = (base, altura) => (base * altura) / 2; // com arrow function

console.log(calcArea(10, 2));