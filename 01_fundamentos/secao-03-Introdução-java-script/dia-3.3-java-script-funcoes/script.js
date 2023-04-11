// A definição ou declaração de uma função começa pelo uso da palavra-chave reservada function e o nome da função.

function cumprimentaCliente

// Logo após a declaração do nome da função, é preciso definir os argumentos ou parâmetros – estes devem estar entre parênteses e separados por vírgulas, em caso de múltiplos parâmetros. Como a nossa função tem o objetivo de cumprimentar clientes, ela vai precisar receber o nome da pessoa como parâmetro.

function cumprimentaCliente(cliente)

// Agora, é preciso passar uma instrução para a função. Para entender melhor o que seria essa instrução, basta se perguntar: O que minha função deve fazer? A resposta para essa pergunta é a definição da função que é feita entre as chaves. No exemplo, a função deve cumprimentar clientes que acessem nossa aplicação. Para isso, deverá retornar uma string com uma saudação e o nome de quem está acessando.

function cumprimentaCliente(cliente) {
    return 'Olá, ' + cliente + '. Essa é sua conta do TrybeBank'
  }

// É bastante comum o uso da expressão: chamar a função. Com isso, pretende-se executar as ações da função com os parâmetros indicados em algum lugar do código. Em nosso caso, a função será chamada passando como parâmetro o nome (em formato de string) de um de nossos fiéis clientes:

cumprimentaCliente('Isaac')

// Ao executar o código, aparentemente nada aconteceu. Como ainda não há uma interface gráfica para nosso banco, é possível utilizar o comando console.log para visualizar o resultado de nossa função.

function cumprimentaCliente(cliente) {
    return 'Olá, ' + cliente + '. Essa é sua conta do TrybeBank'
  }
  
  console.log(cumprimentaCliente('Isaac')) // Olá, Isaac. Essa é sua conta do TrybeBank
  