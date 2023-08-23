import { useParams, Link } from 'react-router-dom';
import { coffeeList } from '../../data';

import './coffee.css';

function Coffee() {
  const params = useParams();
  const currentCoffee = coffeeList.find(
    (coffee) => coffee.slug === params.coffee,
  );

  if (!currentCoffee) {
    return (
      <div className="not-found-coffee">
        <h1>Oops! Esse café não está na nossa lista</h1>
        <h2>
          Acesse a
          {' '}
          <Link to="/coffees">página de cafés</Link>
          {' '}
          e selecione um de
          nossos produtos
        </h2>
      </div>
    );
  }

  return (
    <div className="coffee-page">
      <h1>{currentCoffee.title}</h1>
      <p>{currentCoffee.description}</p>
      <div className="ingredients-list">
        <h2>Ingredientes</h2>
        <ul>
          {currentCoffee.ingredients.map((ingredient) => (
            <li key={ ingredient }>{ingredient}</li>
          ))}
        </ul>
      </div>
      <img src={ currentCoffee.image } alt={ currentCoffee.title } />
    </div>
  );
}

export default Coffee;

/*
- useParams()
Ele vai retornar um objeto contendo todos os parâmetros da rota atual. No exemplo em questão, caso a rota seja /coffees/cafe-preto, o hook retornará o objeto { coffee: cafe-preto }:

1. A chave coffee foi a definida na rota “/coffees/:coffee“.
2. O valor cafe-preto é o valor lido da URL “/coffees/cafe-preto“.

Com as informações desse parâmetro, vamos conseguir montar a página de forma dinâmica, mapeando a lista data.ts, que contém todos os cafés.

É interessante notar que, no array data.ts, existe uma chave chamada slug. O valor dessa chave é igual ao parâmetro coffee que utilizamos no exemplo. Portanto, é possível buscar as informações por meio da HOF find.

*/
