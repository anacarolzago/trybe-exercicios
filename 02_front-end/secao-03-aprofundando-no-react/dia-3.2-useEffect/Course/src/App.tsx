import { useState, useEffect } from 'react';
import { fetchCoordinates } from './services';

import './App.css';

// Passo 1 - Crie o estado do componente, que deverá armazenar um objeto que contém as chaves latitude e longitude. Crie o tipo Coordinates para indicar ao TypeScript o que se espera como valor do estado:

// Passo 2 - Importar a função fetchCoordinates criada anteriormente, a fim de que você tenha acesso aos valores retornados pela API e armazene-os no estado coordinates.

type Coordinates = {
  latitude: number;
  longitude: number;
};

function App() {
  const [coordinates, setCoordinates] = useState<Coordinates | null>(null);

  // O objetivo é que a requisição seja feita apenas uma vez, assim que o componente for renderizado. Portanto, o useEffect deve ter dois parâmetros:

  useEffect(() => {
    async function fetchData() {
      const data = await fetchCoordinates();
      setCoordinates({ latitude: data.latitude, longitude: data.longitude });
    }
    fetchData();
  }, []);

  // Está sendo criada a função assíncrona fetchData dentro do useEffect. Essa função vai aguardar o retorno de fetchCoordinates e armazená-lo no estado do componente. Na sequência, execute fetchData.

  return (
    <>
      <h1>International Space Station Location Tracker</h1>

      { /* Passo 3 - Agora que os valores estão armazenados no estado do componente, basta renderizá-los. Porém, é preciso ter cuidado com um detalhe! Antes de executar o useEffect, o componente é renderizado pela primeira vez. Porém, nesse momento, o valor do estado coordinates ainda é vazio. Portanto, a fim de que a aplicação funcione corretamente, é necessário verificar se o estado já estará preenchido com as informações: */ }

      {coordinates && (
        <>
          <h2>{ `Latitude: ${coordinates.latitude}` }</h2>
          <h2>{ `Longitude: ${coordinates.longitude}` }</h2>
        </>
      )}
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
