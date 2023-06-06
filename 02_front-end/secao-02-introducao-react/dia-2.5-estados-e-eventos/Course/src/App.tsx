import { useState } from 'react';

// Incrementando a aplicação
// Passo 1 - Adicionar botão e input
// Passo 2 - Criando um estado para a lista toolKit
// Passo 3 - Criando um estado para armazenar o valor do input: Quando adicionamos o event handler no evento onChange, sempre que o input sofrer alguma alteração, ele irá armazenar o seu value no novo estado inputValue
// Passo 4 - Implementando a funcionalidade de adicionar itens à lista
// Passo 5 - Renderizando uma lista com todos os valores do toolList

function App() {
  const toolKit = [
    'JavaScript',
    'TypeScript',
    'React',
    'HTML',
    'CSS',
    'Node',
    'Testes automatizados',
  ];

  const [index, setIndex] = useState(0);
  const [toolList, setToolList] = useState(toolKit);
  const [inputValue, setInputValue] = useState('');

  function handleNextClick() {
    if (index + 1 < toolList.length) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  function handlePreviousClick() {
    if (index - 1 >= 0) {
      setIndex(index - 1);
    } else {
      setIndex(toolList.length - 1);
    }
  }

  // Primeiramente, o spread operator fará a verificação para descobrir se existe algo digitado no input
  // Caso exista, ele irá setar o estado toolList com uma lista (setToolList([])) que contém todos os valores que estão armazenados no estado toolList e, ainda, acrescentar o valor armazenado no estado inputValue (...toolList, inputValue)
  // Com essa função criada, deve-se adicioná-la no evento de clique do botão

  function handleAddClick() {
    if (inputValue) setToolList([...toolList, inputValue]);
  }

  return (
    <>
      <h1>Caixa de ferramentas de uma Pessoa Desenvolvedora</h1>
      <h2>{toolList[index]}</h2>
      <div className="btn-container">
        <button onClick={ handlePreviousClick }>Anterior</button>
        <button onClick={ handleNextClick }>Próximo</button>
      </div>
      <section>
        <h3>Adicione novas ferramentas:</h3>
        <input onChange={ ({ target }) => setInputValue(target.value) } />
        <button onClick={ handleAddClick }>Adicionar</button>
      </section>
      <section>
        <h3>Lista de itens do carrossel:</h3>
        <ul>
          {toolList.map((tool) => (
            <li>{tool}</li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default App;
