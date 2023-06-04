import './card.css';

function TSCard() {
  const description = `Typescript é um superset do Javascript
    que adiciona tipagem estática à linguagem.`;

  return (
    <div className="card">
      <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png"
          alt="ts-icon"
          className="card-image"
        />
      </a>
      <h2>Typescript</h2>
      <p>{description}</p>
    </div>
  );
}
export default TSCard;