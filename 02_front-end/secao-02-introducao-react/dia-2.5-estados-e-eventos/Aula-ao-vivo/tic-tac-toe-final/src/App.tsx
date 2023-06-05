import { useState } from 'react';
import './App.css';
import Board from './components/board';
import Square from './components/square';

const NINE_SQUARES = ['', '', '', '', '', '', '', '', ''];

function App() {
  const [squares, setSquares] = useState(NINE_SQUARES);
  const [player, setPlayer] = useState('0');

  const handleResetGame = () => {
    const allTheSquaresAreEmpty = squares.every((square) => (square !== ''));

    if (allTheSquaresAreEmpty) {
      setSquares(NINE_SQUARES);
    }
  };

  const handleClick = (index: number) => {
    const squaresCopy = [...squares];
    squaresCopy[index] = player;
    setPlayer((currentPlayer) => (currentPlayer === '0' ? 'X' : '0'));
    setSquares(squaresCopy);
  };

  return (
    <main className="app">
      <h1>
        {`Agora é o ${player}`}
      </h1>
      <Board>
        {
          squares.map((square, index) => (
            <Square
              key={ index }
              value={ square }
              onClick={ () => handleClick(index) }
            />
          ))
        }
      </Board>
      <button
        className="reset"
        onClick={ handleResetGame }
      >
        Play Again
      </button>
    </main>
  );
}

export default App;
