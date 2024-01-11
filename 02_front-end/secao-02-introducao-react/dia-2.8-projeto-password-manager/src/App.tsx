import { useState } from 'react';

import './App.css';
import Form, { FormType } from './components/Form';
import Button from './components/Button';

function App() {
  const [buttonNewPassword, setButtonNewPassword] = useState(true);
  const [senhas, setSenhas] = useState<FormType[]>([]);
  const [checked, setChecked] = useState(false);

  const salvarSenha = (event: any, data: FormType) => {
    const senhasGuardadas = [...senhas, data];

    setSenhas(senhasGuardadas);
    setButtonNewPassword(true);
  };

  const removeServico = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();

    const targetId = event.target as HTMLButtonElement;
    const { id } = targetId;

    if (id) {
      const senhaRetirada = senhas.splice(Number(id), Number(id + 1)); // splice: altera o conteúdo de uma lista, adicionando novos elementos enquanto remove elementos antigos
      console.log(senhaRetirada);

      const newArray = senhas.filter((senha) => senha !== senhaRetirada[0]);

      setSenhas(newArray);
    }
  };

  return (
    <>
      <h1>Gerenciador de senhas</h1>
      {buttonNewPassword ? (
        <Button onClickCadastrar={ () => setButtonNewPassword(false) } />
      ) : (
        <Form
          salvarSenha={ salvarSenha }
          onClickCancelar={ () => setButtonNewPassword(true) }
        />
      )}
      <label>
        Esconder senhas
        <input type="checkbox" onChange={ () => setChecked(!checked) } />
      </label>
      <ul>
        {senhas.length > 0 ? (
          senhas.map((senha, index) => (
            <li key={ index }>
              <a href={ senha.url }>{senha.name}</a>
              <p>Login</p>
              <p>{senha.login}</p>
              <p>Senha</p>
              <p>{checked ? '******' : senha.password}</p>
              <button
                data-testid="remove-btn"
                onClick={ removeServico }
                id={ index.toString() }
              >
                Remover Serviço
              </button>
            </li>
          ))
        ) : (
          <h3>Nenhuma senha cadastrada</h3>
        )}
      </ul>
    </>
  );
}

export default App;
