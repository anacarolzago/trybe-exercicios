import { ForecastType } from '../data/forecast';
import './card.css';
import NotFound from './not-found';

type CardProps = {
  data: ForecastType
};

function Card(props: CardProps) {
  const { data } = props;
  const { weekday, date, temp, weather, image } = data;

  return (

    <div className="card" style={ { width: '18rem' } }>
      {image
        ? <img className="card-img-top" src={ image } alt="logo" />
        : <NotFound />}
      <div className="card-body">
        <h2 className="card-title">{ weekday }</h2>
        <p className="card-text">{ date }</p>
        <p className="card-text">{ temp }</p>
        <p className="card-text">{ weather }</p>
      </div>

    </div>
  );
}

export default Card;
