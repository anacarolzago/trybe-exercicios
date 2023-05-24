// const e let
let numero = 5; // numero = number = int, float
let nome = 'Enza'; // nome = string literals
let endereco = 'Rua nanana'; // endereco = string
let pessoaEspecialista = true; // pessoaEspecialista = boolean
let semtipodedados; // undefined

// Exemplo
let num1 = 5;
let num2 = 10;
let num3 = 15;

// Usar console.log() não é proibido mas use com sabedoria!
// Voce não vai querer exposeds no seu console da sua pagina, não é mesmo?
//console.log("Sou muito fa da Ellen");

// Operadores:
// Atribuição =
// Artimeticos + - * / % (entre outros)
// Lógicos && || ! (not)
// Comparação >= <= === ==

let soma = num1 + num2; // 15
let subtracao = num1 - num2;
let divisao = num1 / num2;
let multiplicacao = num1 * num2;

// Estruturas condicionais - impõe alguma condição
// if else  switch case
// === == 
// == verifica se os valores sao iguais 
// === verifica se valor e tipo sao iguais --- boas praticas

if (soma === 15) { // SE
    console.log("Soma é igual a 15");
} else { // SENAO
    console.log("Soma não é igual a 15");
}

// O if acima escrito em formato de switch-case
switch (soma) {
    case 15: // SE SOMA ==== 5
        console.log("Soma é igual a 15");
        break;
    case 30: // SE SOMA ==== 30
        console.log("Soma é igual a 30");
        break;
    case 45: // SE SOMA ==== 45
        console.log("Soma é igual a 45");
        break;
    default: // SENAO
        console.log("Soma não é igual a nenhum destes");
}

// Operadores Lógicos - AND &&  OU ||
// AND && = TODAS as checagens devem ser verdadeiras apra entrar na condicao
// OU || = basta APENAS UMA checagem para entrar na condicao
// ! NOT = inverte um resultado = se for true fica false e se for false fica true