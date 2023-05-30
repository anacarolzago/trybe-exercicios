// criando o meu primeiro componente React
import './card.css';

function ReactCard() {
  const description = 'React é a biblioteca para construir UIs mais utilizada no mundo';

  return (
    <div className="card">
      <a href="https://react.dev/" target="_blank" rel="noreferrer">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/768px-React-icon.svg.png"
          alt="react-icon"
          className="card-image"
        />
      </a>
      <h2>React</h2>
      <p>{description}</p>
    </div>
  );
}

export default ReactCard;