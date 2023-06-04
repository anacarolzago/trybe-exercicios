import './card.css';

function ViteCard() {
  const description = `Vite é um bundler que auxilia no
    desenvolvimento de aplicações Web.`;

  return (
    <div className="card">
      <a href="https://vitejs.dev/" target="_blank" rel="noreferrer">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/615px-Vitejs-logo.svg.png"
          alt="vite-icon"
          className="card-image"
        />
      </a>
      <h2>Vite</h2>
      <p>{description}</p>
    </div>
  );
}
export default ViteCard;