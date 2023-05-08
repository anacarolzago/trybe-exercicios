// Manipulando objetos

const pessoa = {
    nome: 'Maria',
    sobrenome: 'Silva',
    idade: 20,
    cidade: 'São Paulo',
    endereço: {
        rua: 'Rua Brasil',
        numero: '1',
        cep: '12345-000'
    }
};

console.log(pessoa);
console.log(pessoa.nome); // Forma com ponto
console.log(pessoa['nome']); // Forma com colchetes 

// A diferença entre as duas formas de escrever é que com [] eu consigo fazer:

const variavel = 'nome';
console.log(pessoa[variavel]);

// Metodos

console.log(Object.keys(pessoa)); // Pega as chaves e retorna array de strings
console.log(Object.values(pessoa)); // Pega os valores retorna array
console.log(Object.entries(pessoa)); // Pega chave e valor retorna uma array de arrays


const chaves = Object.keys(pessoa);

for (let dado of chaves) { // Retorna as chaves 
    console.log(dado);
};

for (let dado in chaves) { // Retorna a quantidade de chaves, retorna o lado esquerdo
    console.log(dado);
};

// Exemplo de outro console

console.table(Object.keys(pessoa));
console.table(Object.values(pessoa));
console.table(Object.entries(pessoa));
// Mostra as chaves e os valores do meu objeto
console.table(pessoa);

