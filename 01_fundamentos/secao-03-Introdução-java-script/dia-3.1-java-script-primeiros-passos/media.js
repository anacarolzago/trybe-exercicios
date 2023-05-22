/* Faça um algoritmo que calcule a média das 3 notas de uma pessoa 
estudante e mostre, além do valor da média,
uma mensagem de “Aprovação”,  caso a média seja igual ou superior a 6, 
ou a mensagem “Reprovação”, caso a média das notas seja inferior a 6. 
Exiba no seguinte formato: Aprovação, média: 7 ou Reprovação, média: 5. */

// Dica: quebre o requisito em partes menores

// Parte 1: Faça um algoritmo que calcule a média das 3 notas
// Então...preciso guardar 3 notas:
let nota1 = 5;
let nota2 = 10;
let nota3 = 4;

// Parte 2: e mostre, além do valor da média
// Então...preciso ter a média
let media = (nota1 + nota2 + nota3) / 3;

//Parte 3: uma mensagem de “Aprovação”,  caso a média seja igual ou superior a 6, 
//         ou a mensagem “Reprovação”, caso a média das notas seja inferior a 6. 
// Então, preciso fazer as condições 

media = 3; // forçando uma media 3 para testes
if (media >= 6) { // Atencao à ordem que os operadores são colocados, => não funciona
    console.log("Aprovação, média: " + media);
} else if (media < 6 || media > 3) { // Testando o OR: media < 6 é true media > 4 é false
    console.log("Está em recuperação "); // pelo menos uma das checagens é true, entao entra aqui
} else {
    console.log("Reprovação, média: " + media);
}