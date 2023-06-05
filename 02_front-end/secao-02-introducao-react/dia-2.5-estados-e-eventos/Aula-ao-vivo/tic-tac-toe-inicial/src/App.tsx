import { useState } from 'react';
import './App.css';
import Board from './components/board';
import Square from './components/square';

// elemento.addEventListener("click", () => { ...logica }) // JS puro

// Event handler === quer passar uma funcao para um evento
// manipulei o click => handler do evento click

// crie o estado dos componentes
// inicie a tela com os valores 32

// Regras
// chamar o hook no inicio da funcao (top level)
// nao pode ser dentro de if's, loops
// precisa ser uma funcao o componente

const NINE_SQUARES = ['', '', '', '', '', '', '', '', ''];

function App() {
  // let player = 'X'; // variavel normal JS, ela nao altera a tela
  // const minhasVariaveisDoEstado = useState('0');
  const [player, setPlayer] = useState('X');
  const [squares, setSquares] = useState(NINE_SQUARES);
  const [showTitle, setShowTitle] = useState(true);

  console.log('App');
  console.log(player);

  const handleClick = () => {
    console.log('clicou');
    // player = '0'
    // console.log(player); //
    // setPlayer('0'); // alterando o estado para 0, muda a tela

    // if (player === 'X') {
    //   setPlayer('0');
    // } else {
    //   setPlayer('X');
    // }
    setPlayer(player === 'X' ? '0' : 'X');
  };

  const handleShowTitle = () => {
    if (showTitle === true) {
      setShowTitle(false);
    } else {
      setShowTitle(true);
    }
  };

  // button.addEventListener('click', handleShowTitle)

  return (
    <main className="app">
      {showTitle ? (
        <h1>
          {`Agora é o ${player}`}
        </h1>
      ) : 'Nada'}

      <button onClick={ handleShowTitle }>
        Esconder titulo
      </button>

      <Board>
        { squares.map((square, index) => (
          <Square key={ index } value={ square } onClick={ handleClick } />
        ))}
      </Board>
    </main>
  );
}

export default App;
