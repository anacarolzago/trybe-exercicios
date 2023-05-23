const students32 = {
    studentsInfo: [{
            picture: "https://ca.slack-edge.com/TM13XHBBQ-U02FHB4755F-3931f52d779f-512",
            trybe: "CH32",
            student_name: "Andre Noel",
            project_lessons_learned: 5,
            project_playground_functions: 100
        },
        {
            picture: "https://ca.slack-edge.com/TM13XHBBQ-U04D382RM0S-e856b713b7a6-512",
            trybe: "CH32",
            student_name: "Enza Rafaela",
            project_lessons_learned: 10000000,
            project_playground_functions: 1000000
        },
        {
            picture: "https://ca.slack-edge.com/TM13XHBBQ-U01FLMM2CJ1-c77bcc8d5e26-512",
            trybe: "CH32",
            student_name: "Carolzita",
            project_lessons_learned: 79.9,
            project_playground_functions: 79.9
        },
        {
            picture: "https://ca.slack-edge.com/TM13XHBBQ-U026DQAA607-44cdff2d54af-512",
            trybe: "CH32",
            student_name: "Ellen",
            project_lessons_learned: 81,
            project_playground_functions: 93
        },
        {
            picture: "https://ca.slack-edge.com/TM13XHBBQ-U01JQRR7FSS-08320a8171e3-512",
            trybe: "CH32",
            student_name: "Joicy Oliveira",
            project_lessons_learned: 99,
            project_playground_functions: 98
        },
        {
            picture: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fe/Speedy_Gonzales.svg/1200px-Speedy_Gonzales.svg.png",
            trybe: "CH32",
            student_name: "Kauê Gonzales",
            project_lessons_learned: 56,
            project_playground_functions: 100
        },
        {
            picture: "https://ca.slack-edge.com/TM13XHBBQ-U02U47ZAA6A-d396a3350a1f-512",
            trybe: "CH32",
            student_name: "João Nascimento",
            project_lessons_learned: 91,
            project_playground_functions: 3
        },
        {
            picture: "https://ca.slack-edge.com/TM13XHBBQ-U03DNHZLCH1-1673b49a990f-512",
            trybe: "CH32",
            student_name: "Thalles Carneiro",
            project_lessons_learned: 80,
            project_playground_functions: 80
        },
        {
            picture: "https://ca.slack-edge.com/TM13XHBBQ-U035TM9C7DJ-7e82035ead9d-512",
            trybe: "CH32",
            student_name: "Mari Demarchi",
            project_lessons_learned: 80,
            project_playground_functions: 80
        },
        {
            picture: "https://ca.slack-edge.com/TM13XHBBQ-U01FETE06BA-40adaa5b7dac-512",
            trybe: "CH32",
            student_name: "Thatá Guimarães",
            project_lessons_learned: 76,
            project_playground_functions: 99
        }
    ]
}


const estudanteSorteado = Math.floor(Math.random() * students32.studentsInfo.length);
const estudante = students32.studentsInfo[estudanteSorteado];

// retorna um unico elemento
const nome = document.getElementById('name');
nome.innerText = estudante.student_name;
// nome.style.backgroundColor = 'red';

// retorna um HTMLCollection
// Manipulo como um array
const projetos = document.getElementsByClassName('gradeProject');
const notaLessonsLearned = projetos[0];
const notaPlaygroundFunctions = projetos[1];

notaLessonsLearned.innerHTML = `<b>${estudante.project_lessons_learned} %`; // com template
notaPlaygroundFunctions.innerText = estudante.project_playground_functions + '%'; // sem template

// retorna um HTMLCollection
// const imagem = document.getElementsByTagName('img');
// imagem[0].src = estudante.picture;

// retorna um unico elemento 
// é o primeiro que encontrar
// const imagem = document.querySelector('img');
// imagem.src = estudante.picture;

// retorna uma NodeList
// manipula como um array
const imagem = document.querySelectorAll('img');
imagem[0].src = estudante.picture;

const result = document.getElementById('results');

const verificaNotas = (estudante) => {
    if (estudante.project_lessons_learned >= 80 &&
        estudante.project_playground_functions >= 80) {
        return 'APROVADO';
    } else {
        return 'REPROVADO';
    }
}

result.innerText = verificaNotas(estudante);
result.className = verificaNotas(estudante).toLocaleLowerCase();