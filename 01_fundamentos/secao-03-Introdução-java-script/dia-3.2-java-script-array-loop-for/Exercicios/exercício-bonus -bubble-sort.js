/* for (let index = 1; index < array.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (array[index] < array[secondIndex]) {
        let position = array[index];
        array[index] = array[secondIndex];
        array[secondIndex] = position;
      }
    }
  } */

// Com base na leitura do artigo, faça os exercícios a seguir.

// 1 - Ordene o array numbers em ordem crescente e imprima seus valores.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 2 - Ordene o array numbers em ordem decrescente e imprima seus valores.
// 3 - Agora, crie um novo array a partir do array numbers, sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja valor seguinte, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push. O resultado deve ser o array abaixo:
// resultado esperado:
// [45, 27, 57, 1330, 560, 800, 200, 70, 945, 54]

// Agora, trabalhe com algumas formas geométricas! Utilize a estrutura de repetição for para escrever os códigos a seguir.

// 4 - Escreva um algoritmo que, dado um valor n positivo, ou seja, n > 1, imprima na tela um quadrado feito de asteriscos de tamanho n. Por exemplo:

// 5 - Faça o mesmo algoritmo que antes, mas de modo que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

/* 
n = 5

*
**
***
****
***** 
*/

// 6 - Agora, inverta o lado do triângulo. Por exemplo:

/* 
n = 5

    *
   **
  ***
 ****
***** 
*/

// Atenção! Note que esse exercício é bem mais complexo que o anterior! Não basta, aqui, imprimir somente asteriscos. Você precisa de uma lógica para imprimir espaços também.

// 7 - Depois, faça uma pirâmide com n asteriscos de base. Por exemplo:

/*
n = 5

  *
 ***
*****
*/

// 8 - Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Para isso, assuma que o valor de n será sempre ímpar. Por exemplo:

// Por último, faça com que a variável seja incrementada com o valor correspondente a cada *loop*.

/*
n = 7

   *
  * *
 *   *
*******
*/

// Faça um algoritmo que indique se um número definido em uma variável é primo ou não.
// Um número é classificado como primo se ele é maior do que 1 e divisível apenas por 1 e por ele mesmo, ou seja, a divisão dele por quaisquer outros números dá resto diferente de zero. Lembrando que números primos, são números naturais, ou seja, também não podem ser divididos por números negativos Exemplos: 13 é um número primo, pois é divisível por 1 e por 13, apenas. Já o número 20 não é primo, pois pode ser dividido por 1, 2, 4, 5, 10 e 20, todos com resto zero.
// Dica: você vai precisar fazer um loop que vá de 0 ao número definido. Além disso, vai precisar fazer uma checagem a cada iteração e armazenar os resultados em algum lugar.

