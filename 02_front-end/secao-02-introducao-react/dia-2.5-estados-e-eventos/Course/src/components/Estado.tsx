// Introdução ao estado de um componente
// É um conjunto de dados armazenados que devem refletir na interface da aplicação. Com event handlers podemos capturar valores obtidos pela interação com a pessoa usuária e armazená-los em estados

// O que são Hooks?
// Todo e qualquer Hook sempre deverá ser uma função
// 1. Nomenclatura: todos os Hooks começam com a palavra use
// 2. Como deverão ser invocados: nunca poderá chamar um Hook dentro de um if. Também não poderá chamá-lo dentro de um loop ou de uma função aninhada. Os Hooks precisam ser chamados no top level (raiz) do componente funcional
// 3. Onde deverão ser invocados: Você apenas poderá chamar um Hook dentro de um componente funcional ou dentro de outros Hooks. Você não pode utilizar Hooks em componentes de classe

import { useState } from 'react';

// Ele recebe um argumento, que será o estado inicial, e retorna um array com dois:
// 1. O primeiro item do array retornado é a variável que armazena o estado
// 2. O segundo item do array é uma função que serve para escrever e atualizar o estado

const [state, setState] = useState('');
