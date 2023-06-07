// Regex (regular expression)
// Caso seja necessário que um campo possua algum caractere específico, como um campo de senha, podemos utilizar um regex (regular expression). As expressões regulares são boas para validar se um campo de senha, por exemplo, possui ao menos um número. Observe o código abaixo:

const password = 'minhasenha'

function passwordHasNumber() {
  const regex = /^(?=.*?[0-9])/i;
  return (regex.test(password));
}
