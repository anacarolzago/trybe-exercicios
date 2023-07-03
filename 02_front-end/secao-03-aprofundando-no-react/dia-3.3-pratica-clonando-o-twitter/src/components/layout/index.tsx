import { Outlet } from 'react-router-dom';
import './layout.css';

function Layout() {
  return (
    <div className="page">
      <nav className="nav">
        {/* Adicionar aqui os links do menu de navegação */}
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
