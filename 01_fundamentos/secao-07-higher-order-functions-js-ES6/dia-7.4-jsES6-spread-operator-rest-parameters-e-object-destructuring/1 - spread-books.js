const horrorBooks = [
    'It, a coisa',
    'Aprenda Java em 21 dias',
    'O Iluminado'
];

const scifiBooks = [
    'Duna',
    'Ganhe 30 mil reais como programador em 3 semanas'
];

// const awesomeBooks = [];

// for (const elemento of horrorBooks) {
//     awesomeBooks.push(elemento);
// }

// for (const elemento of scifiBooks) {
//     awesomeBooks.push(elemento);
// }

const awesomeBooks = [...horrorBooks, ...scifiBooks];
module.exports = { awesomeBooks };