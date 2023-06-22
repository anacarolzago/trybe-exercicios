import './App.css';

function App() {
  return (
    <>

    </>
  );
}

export default App;

/*
>>>>>>>> não podemos tratar requisições no corpo dos componentes <<<<<<<<<

- useEffect
Foi criado para que seja possível tratar efeitos colaterais nas aplicações. Diferentemente do hook useState, o useEffect não retorna nada. Assim, o que importa aqui são os dois argumentos que vão ser passados:

1. O primeiro argumento deverá ser uma função (callback)
2. O segundo argumento, que é opcional, deverá ser um array, chamado de array de dependências

Existem quatro comportamentos diferentes no useEffect:

1. useEffect sem segundo argumento: facilmente resulta em loops infinitos

useEffect(() => {});

2. useEffect com o segundo argumento sendo um array vazio: executará a callback apenas na primeira renderização do componente

useEffect(() => {}, []);

3. useEffect com o segundo argumento sendo um array com itens: executará a callback na primeira renderização e sempre que qualquer item do array sofrer alteração

useEffect(() => {}, [foo, bar, ...baz]);

4. useEffect com a callback retornando uma função: retorna uma nova função, chamada de função cleanup. A função cleanup será executada: 1. no momento da desmontagem do componente, 2. no momento anterior à próxima execução da callback, em que o componente é renderizado novamente

useEffect(() => {
  return () => {};
}, []);

Você poderá utilizar a função cleanup sempre que precisar limpar algo criado com efeito colateral (por exemplo um setInterval() ou setTimeout())

*/
