import './App.css';
import { useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { Counter } from './components/counter';

function App() {
  type Theme = 'dark' | 'light';

  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={ `App ${theme}` } data-testid="app">
      <button
        onClick={ toggleTheme }
        className="theme-toggle-button"
        aria-label="toggle-theme"
      >
        { theme === 'light' ? (
          <FiSun size={ 24 } />
        ) : (
          <FiMoon size={ 24 } color="#f1c40f" />
        )}
      </button>
      <Counter />
      <div className="hero">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, voluptate?
      </div>
    </div>
  );
}

export default App;
