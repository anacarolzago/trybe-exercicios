// Organizando lições

// Suponha que você esteja trabalhando em uma escola e precise fazer algumas atualizações no sistema. Para isso, considere o seguinte código:

let lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};
  
let lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};
  
let lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};


// - Crie uma função para adicionar o turno da noite na lesson2. Essa função deve ter três parâmetros: o objeto a ser modificado, a chave a ser adicionada e o valor dela.

function addNovaChave(obj, key, value) {
    obj[key] = value; // através do "obj[key]" acessamos a chave do objeto cujo valor queremos modificar. A partir daí basta atribuir o valor desejado, que na função é o terceiro parâmetro (value).
};

addNovaChave(lesson2, 'turno', 'noite');
console.log(lesson2);

// - Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

function listaChaves(obj) {
    return Object.keys(obj); // O método "Object.keys()" faz essa listagem ao passar o objeto que se deseja referenciar como parâmetro.
};

console.log(listaChaves(lesson1));

// - Crie uma função para mostrar o tamanho de um objeto. Essa função deve receber um objeto como parâmetro.

function tamanho(obj) {
    return Object.keys(obj).length; // Como o "Object.keys()" devolve um array, é possível utilizar o método ".length" para obter seu tamanho
};

console.log(tamanho(lesson1));

// - Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

function listValues(obj) { 
    return Object.values(obj); // Quando se quer recuperar as chaves, é preciso utilizar o "Object.keys()". De modo similar, para recuperar os valores do objeto em um array, utiliza-se o método "Object.values()".
};
  
console.log(listValues(lesson1));

// - Crie um objeto de nome allLessons, que deve agrupar todas as aulas por meio do Object.assign. Cada chave desse novo objeto será uma aula, portanto essas chaves serão nomeadas lesson1, lesson2 e lesson3. Ao executar o comando console.log(allLessons), a saída deverá ser a seguinte:

console.log(allLessons);

{
  lesson1:
   { materia: 'Matemática',
     numeroEstudantes: 20,
     professor: 'Maria Clara',
     turno: 'manhã' },
  lesson2:
   { materia: 'História',
     numeroEstudantes: 20,
     professor: 'Carlos',
     turno: 'noite' },
  lesson3:
   { materia: 'Matemática',
     numeroEstudantes: 10,
     professor: 'Maria Clara',
     turno: 'noite' }
};

*/ 

let allLessons = Object.assign({}, {
    lesson1: lesson1, 
    lesson2: lesson2, 
    lesson3: lesson3,
}); // O método "Object.assign()" recebe dois parâmetros: um objeto e o que se quer atribuir à ele. Se no primeiro parâmetro for passado um objeto vazio, ele criará um objeto novo com as caraterísticas do segundo parâmetro.

console.log(allLessons);

// - Com base no objeto elaborado no tópico anterior, crie uma função que retorne o número total de estudantes em todas as aulas.

function getStudentsTotal(lessons) {
    let total = 0;
    let keys = Object.keys(lessons);

    for (let index = 0;  index < keys.length; index += 1) {
        total += lessons[keys[index]].numeroEstudantes;
    }

   return total;
}

console.log(getStudentsTotal(allLessons));

// - Crie uma função que obtenha o valor da chave de acordo com sua posição no objeto.

function getValueByNumber(obj, number) {
    return Object.values(obj)[number]; // usa-se o "Object.values()" para criar um array com os valores do objeto e, então, pode-se acessar sua posição passando o índice.
}

console.log(getValueByNumber(lesson1, 2));

// - Crie uma função que verifique se o par chave/valor existe na função. Essa função deve possuir três parâmetros:o objeto, o nome da chave e o valor dela. 

function verifyPair(obj, key, value) {
    let entries = Object.entries(obj);
    let isEqual = false;

    for (let index in entries) {
        if (entries[index][0] === key && entries[index][1] === value) isEqual = true;
    }

    return isEqual;
}

console.log(verifyPair(lesson2, 'professor', 'Carlos'));

