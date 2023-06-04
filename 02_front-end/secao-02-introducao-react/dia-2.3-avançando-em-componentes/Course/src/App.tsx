import Greeting from './components/Greeting';
import LuckyNumbers from './components/LuckyNumbers';
import PastResults from './components/PastResults';
import Title from './components/Title';

import './App.css';

function App() {
  // Utilizando uma URL absoluta
  const URL = 'https://content-assets.betrybe.com/prod/e66d4095-bb1b-44ec-a7fd-3c0118e5b80e-xmen-magneto.jpeg'; 

  return (
    <>
      <Title>
        <p>Este será uma props children</p>
      </Title>

      <Greeting person={ { firstName: 'Chapolin', lastName: 'Colorado' } } />
      <LuckyNumbers />
      <PastResults />

      <img src={ URL } />

    </>
  );
}

export default App;
