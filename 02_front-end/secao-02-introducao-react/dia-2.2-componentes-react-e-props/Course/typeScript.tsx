// Tipos por inferência - Trata-se de quando o TypeScript já sabe qual é o tipo dos valores que ele vai receber e, por isso, não é preciso informá-los
let username = 'tryber';
let age = 21;
let isStudent = true;

function myFunction() {
  console.log('This is a function');
}

// let username: string
// let age: number;
// let isStudent: boolean;


// Ao criar uma função, caso ela tenha parâmetros, também é necessário informar quais são tipos de cada um dos deles. Por exemplo:
function sum(param1: number, param2: number) {
  return param1 + param2;
}

// Também, é possível definir explicitamente o retorno de uma função:
// função que retorna um número
function returnNumber(): number {
  return 2;
}

// função que retorna um texto
function returnString(): string {
  return 'Carolina';
}

// função que não tem nenhum retorno
function noReturn(): void {
  // ...
}

// Declarando listas e objetos
let arrayOfStrings: string[]; // armazenará uma lista de strings
let arrayOfNumbers: number[]; // armazenará uma lista de numbers
let arrayOfStringsOrNumbers: (string | number)[]; // armazenará uma lista de strings E/OU numbers
let arrayOfObjects: object[]; // armazenará uma lista de objetos

// Para declarar um objeto, utiliza-se a seguinte forma:
let person: {name: string, age: number };

// Criando os próprios tipos
type User = {
  id: number,
  name: string,
  modules: string[],
}

// myUser será um objeto que contém, obrigatoriamente, as chaves id, name e modules e que os tipos de seus valores serão number, string e lista de strings, respectivamente.
let myUser: User;

// Caso alguma chave não seja obrigatória, pode-se defini-la adicionando o símbolo ? em sua declaração:
type User2 = {
  id: number,
  name: string,
  modules?: string[],
}

let myUser2: User2;

