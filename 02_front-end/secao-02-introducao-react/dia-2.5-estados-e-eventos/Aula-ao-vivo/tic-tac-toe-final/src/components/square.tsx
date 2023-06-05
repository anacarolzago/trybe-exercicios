import './square.css';

type SquareProps = {
  value: string;
  onClick: () => void;
};

function Square({ value, onClick }: SquareProps) {
  return (
    <button
      style={ { color: value === 'X' ? 'red' : 'blue' } }
      className="square"
      onClick={ onClick }
    >
      {value}
    </button>
  );
}

export default Square;
