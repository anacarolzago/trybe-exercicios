import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import { UserType } from '../types';
import Loading from './Loading';

function Header() {
  const [carregando, setCarregando] = useState<boolean>(false);
  const [usuario, setUsuario] = useState<UserType>();

  useEffect(() => {
    const pegaUsuario = async () => {
      setCarregando(true);
      const resposta: UserType = await getUser();
      setUsuario(resposta);
      setCarregando(false);
    };

    pegaUsuario();
  }, []);

  if (carregando) {
    return <Loading />;
  }

  return (
    <header data-testid="header-component">
      <div>
        <nav>
          <NavLink data-testid="link-to-search" to="/search">Search</NavLink>
          <br />
          <NavLink data-testid="link-to-favorites" to="/favorites">Favorites</NavLink>
          <br />
          <NavLink data-testid="link-to-profile" to="/profile">Profile</NavLink>
        </nav>
        <h2 data-testid="header-user-name">{ usuario?.name }</h2>
      </div>
    </header>
  );
}

export default Header;
