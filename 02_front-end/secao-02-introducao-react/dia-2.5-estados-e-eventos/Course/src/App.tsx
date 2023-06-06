import Button from './components/Button';
import Input from './components/Input';

function App() {
  function handleChange() {
    alert('Você clicou em algo');
  }

  return (
    <>
      <Button />
      <Input onChange={ handleChange } />
    </>
  );
}

export default App;
