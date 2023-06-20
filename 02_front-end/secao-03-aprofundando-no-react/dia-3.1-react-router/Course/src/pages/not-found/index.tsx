import { Link } from 'react-router-dom';

import './not-found.css';

function NotFound() {
  return (
    <div className="not-found-page">
      <h1>Oops! Página não encontrada</h1>
      <img
        src="https://betrybe.github.io/images/coffee/coffee.png"
        alt="coffee"
      />
      <div className="not-found-info">
        <h2>Desculpe, a página que você está procurando não existe.</h2>
        <Link to="/">Voltar à página inicial</Link>
      </div>
    </div>
  );
}

export default NotFound;
