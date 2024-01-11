import React from 'react';
import styles from './counter.module.css';

function Counter() {
  const [count, setCount] = React.useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className={ `${styles.counter}` }>
      <h1>{count}</h1>
      <button
        onClick={ increment }
        aria-label="btn-increment"
      >
        Increment

      </button>
      <button
        onClick={ decrement }
        aria-label="btn-decrement"
      >
        Decrement
      </button>
    </div>
  );
}

export default Counter;
