import { useState } from 'react';
import './App.css';
import Book from './components/Book';
import BookList from './components/BookList';
import data from './data.json';
import { BookListType } from './types';

const bookIndexStart = 10;
const bookIndexEnd = 15;

type CurrentListType = 'wishList' | 'readingList' | 'readList';

function App() {
  // posicaoLivro é um número
  // setPosicaoLivro é uma função
  // useState é o estado
  const [posicaoLivro, setPosicaoLivro] = useState(0);
  const proximoLivro = () => {
    if (posicaoLivro === data.length - 1) {
      // retorna o número no index 0
      return setPosicaoLivro(0);
    }
    // se ainda não chegou no final, ele retorna a função com a posição do livro + 1 livro
    return setPosicaoLivro(posicaoLivro + 1);
  };

  // Gerencie o estado para cada uma das listas e exiba, por padrão, a lista de desejos
  // Crie um estado para cada uma das listas. Para isso, utilize o Hook useState e passe como parâmetro um array vazio []

  const [wishList, setWishList] = useState<BookListType>([]);
  const [readingList, setReadingList] = useState<BookListType>([]);
  const [readList, setReadList] = useState<BookListType>([]);

  // Faça com que seja possível mudar a lista exibida ao clicar em um dos botões de exibição
  // Crie um estado para controlar qual lista será exibida na tela
  const [currentList, setCurrentList] = useState<CurrentListType>('wishList');

  const lists = {
    wishList,
    readingList,
    readList,
  };

  return (
    <div className="app">
      <div className="book-selector">
        <Book bookInfo={ data[posicaoLivro] } showDetails />
        <div className="selector-buttons">

          <button onClick={ () => setWishList([...wishList, data[posicaoLivro]]) }>
            Adicionar à lista de desejos
          </button>

          <button onClick={ () => setReadList([...readingList, data[posicaoLivro]]) }>
            Adicionar à lista de leitura
          </button>

          <button onClick={ () => setReadList([...readList, data[posicaoLivro]]) }>
            Adicionar à lista de lidos
          </button>

          <button onClick={ proximoLivro }>Próximo livro</button>

        </div>
      </div>

      <div className="list-buttons">
        <button onClick={ () => setCurrentList('wishList') }>
          Exibir lista de desejos
        </button>

        <button onClick={ () => setCurrentList('readingList') }>
          Exibir lista de leitura
        </button>

        <button onClick={ () => setCurrentList('readList') }>
          Exibir lista de lidos
        </button>

      </div>

      <h1>Lista de ...</h1>
      <BookList books={ lists[currentList] } />
    </div>
  );
}

/*
  Este é outro modo de escrever:

  const [currentBook, setCurrentBook] = useState(0);

  <button onClick={ () => setCurrentBook((currentBook + 1) % data.length) }>
  Próximo livro
  </button>

  Dessa forma, o estado currentBook será incrementado em 1 a cada vez que o botão for clicado. Para que o estado currentBook volte ao início da lista, vamos adicionar o operador módulo %, assim quando esse estado for igual ao tamanho da lista de livros, voltando para o valor 0

*/

export default App;
