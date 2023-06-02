import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import CardList from './components/CardList';

function App() {
  return (
    <main>
      <Header />
      <Card
        cityInfo={ {
          city: '',
          country: '',
          imageUrl: '',
          visited: undefined,
        } }
      />
      <CardList />
    </main>
  );
}

export default App;
