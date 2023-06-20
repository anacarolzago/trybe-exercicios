import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import CoffeeList from './pages/coffee-list';
import NavBar from './components/nav-bar';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/coffees" element={ <CoffeeList /> } />
      </Routes>
    </>
  );
}

export default App;

/*
O componente Routes tem três funções principais:

1. Agrupar todos os componentes Route;
2. Ler o caminho da aplicação (como em /coffees);
3. Buscar qual Route possui o path correspondente ao caminho atual da aplicação;

- Hook useNavigate
Esse hook nos retorna uma função que, quando executada, direciona a aplicação para uma nova página. É possível, assim, criar validações em formulários, por exemplo, e realizar o redirecionamento apenas após todas as validações serem realizadas.
Outra funcionalidade do hook useNavigate é realizar o redirecionamento para a “página anterior”. Para isso, execute sua função passando como parâmetro o valor -1.

- NavLink
Componente bastante utilizando nas aplicações com rotas, ao ser clicado, esse componente irá redirecionar a aplicação para outra página. A grande diferença é que o NavLink é utilizado em menus de navegação.

*/
