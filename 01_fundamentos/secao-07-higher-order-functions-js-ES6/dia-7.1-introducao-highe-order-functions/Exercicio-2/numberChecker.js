// Sorteador de loteria

// Desenvolva uma HOF que retorne o resultado de um sorteio. Essa HOF irá gerar um número aleatório entre 1 e 5, recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: “Tente novamente” ou “Parabéns, você ganhou”).

// Primeiro passo: Vamos criar uma callback que verifica se os números são os mesmos.
const numberChecker = (myNumber, number) => myNumber === number;

// Segundo passo: Vamos começar a trabalhar em nossa HOF, iniciando pelo gerador do número aleatório.
const lotteryResult = () => {
  const number = Math.floor((Math.random() * 5) + 1);

  // Terceiro passo: Já temos o parâmetro number dentro do escopo da HOF, então vamos chamar nossa callback com esse valor. Precisamos só dizer à HOF que ela receberá por parâmetro nossa callback e o número escolhido.
 // ? é equivalente ao if e : ao else
  return callback(myNumber, number) ? 'Parabéns, você ganhou' : 'Tente novamente';
};

console.log(lotteryResult(2, numberChecker));

