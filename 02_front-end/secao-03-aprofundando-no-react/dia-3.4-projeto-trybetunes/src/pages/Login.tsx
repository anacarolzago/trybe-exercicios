import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../services/userAPI';
import Loading from '../components/Loading';

function Login() {
  const [name, setName] = useState<string>('');
  const [carregando, setCarregando] = useState<boolean>(false);
  const navigate = useNavigate();

  const habilitarBotao = name.length >= 3;

  const handleSubmit = async (): Promise<void> => {
    setCarregando(true);
    await createUser({ name });
    setCarregando(false);
    navigate('/search');
  };

  return (
    <section>
      {carregando ? <Loading /> : (
        <form onSubmit={ handleSubmit }>
          <label htmlFor="login">Login</label>
          <input
            data-testid="login-name-input"
            type="text"
            id="name"
            value={ name }
            onChange={ (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value) }
          />

          <button
            data-testid="login-submit-button"
            type="submit"
            disabled={ !habilitarBotao }
          >
            Entrar

          </button>
        </form>)}
    </section>
  );
}

export default Login;
