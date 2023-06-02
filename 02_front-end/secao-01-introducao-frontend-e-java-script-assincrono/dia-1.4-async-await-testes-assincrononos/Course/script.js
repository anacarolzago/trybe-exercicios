// const cep = '30130-010'; 
// fetch(`https://viacep.com.br/ws/${cep}/json/`)
//   .then(response => response.json())
//   .then(data => console.log(data));

// syntactic sugar, ou açúcar sintático: async/await não adiciona nenhuma funcionalidade a mais ao javascript, é apenas uma forma diferente de escrever o mesmo código

// Faz a mesma coisa da de cima:
const cep = '30130-010'; 
const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
const data = await response.json();
console.log(data);

// Lidando com Erros:
const cep2 = '30130-010'; 
try {
  const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
  const data = await response.json();
  console.log(data);
} catch(error) {
  console.log(error)
}

// Exemplo 1:
const a = funcaoQueRetornaPromise();
const b = await funcaoQueRetornaPromise();

console.log(a) // Aqui o console vai imprimir a Promise em si. 
console.log(b) // Aqui o console vai imprimir o resultado da Promise

// Exemplo 2:
// Essa função retorna o número 1. 
function foo() {
    return 1;
}
  
// Essa função retorna uma Promise (que resolve no número 1). 
async function bar() {
    return 1;
}