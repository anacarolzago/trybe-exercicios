import './App.css';
import Button from './components/button';
import Card from './components/card';
import ListGroup from './components/list-group';
import Subtitle from './components/subtitle';
import Title from './components/title';
import { forecastList } from './data/forecast';

const content: string[] = [
  'React',
  'Typescript',
  'Components',
];

function App() {
  const subTitle = 'Hoje é o terceiro dia de React 🥇';

  return (
    <main className="container">
      <Title name="Turma 32" />
      <Subtitle subTitle={ subTitle } />

      <div className="p-2">
        <Button>
          <h2>Opções</h2>
        </Button>
      </div>

      <div className="p-2">
        <Button variant="danger">Click</Button>
      </div>

      <ListGroup list={ content } />

      <div className="cards-container">
        {forecastList.map((forecast) => (
          <Card data={ forecast } key={ forecast.date } />
        ))}
      </div>
    </main>
  );
}

export default App;
