import './square.css';

type SquareProps = {
  value: string;
  onClick: () => void;
};

function Square({ value, onClick }: SquareProps) {
  const newcolor = value === 'X' ? 'red' : 'blue'; // rend. condicional
  return (
    <button
      style={ { color: newcolor } }
      className="square"
      onClick={ onClick }
    >
      {value}
    </button>
  );
}

export default Square;
