import './App.css';
import ReactCard from './components/react-card';
import TSCard from './components/ts-card';
import ViteCard from './components/vite-card';
import sayHello from './utils/hello';

function App() {
  const name = 'Turma 32';
  const subTitle = 'Boas-vindas à Front-end';

  return (
    <main className="container">
      <h1>{sayHello(name)}</h1>
      <h2>{subTitle}</h2>

      <div className="cards-container">

        <ReactCard />
        <ViteCard />
        <TSCard />

      </div>
    </main>
  );
}

export default App;