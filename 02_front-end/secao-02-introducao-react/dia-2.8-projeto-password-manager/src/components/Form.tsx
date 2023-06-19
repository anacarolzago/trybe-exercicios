import { useState } from 'react';

type FormProps = {
  onClickCancelar: () => void;
  salvarSenha: (event: any, data: FormType) => void;
};

export type FormType = {
  name: string,
  login: string,
  password: string,
  url: string,
};

const INITIAL_STATE = {
  name: '',
  login: '',
  password: '',
  url: '',
};

function Form({ onClickCancelar, salvarSenha }: FormProps) {
  const [data, setData] = useState<FormType>(INITIAL_STATE);

  const { name, login, password, url } = data;

  const regex1 = /^(?=.*[a-zA-Z])(?=.*\d).*$/;
  const regex2 = /[!@#$%^&*(),.?":{}|<>]/;

  const nomeValido = name.length > 0;
  const loginValido = login.length > 0;
  const senhaMinimo = password.length >= 8;
  const senhaMaximo = password.length <= 16;

  const regularExpressionLetrasEnumeros = regex1.test(password);
  const regularExpressionCaracteresEspeciais = regex2.test(password);

  function handleChangeInput(event: React.ChangeEvent<HTMLInputElement>) {
    setData({ ...data, [event.target.id]: event.target.value }); // acesso dinâmico e generico
  }

  function validacaoSenha() {
    return !!nomeValido && loginValido && senhaMaximo
      && senhaMinimo && regularExpressionLetrasEnumeros
      && regularExpressionCaracteresEspeciais;
  }

  const habilitarBotao = validacaoSenha();
  const valid = 'valid-password-check';
  const invalid = 'invalid-password-check';

  return (
    <section>
      <form
        onSubmit={ (event) => {
          event.preventDefault();
          salvarSenha(event, data);
        } }
      >
        <label htmlFor="name">Nome do serviço</label>
        <input
          type="text"
          id="name"
          value={ name }
          onChange={ handleChangeInput }
        />

        <label htmlFor="login">Login</label>
        <input
          type="text"
          id="login"
          value={ login }
          onChange={ handleChangeInput }
        />

        <label htmlFor="password">Senha</label>
        <input
          type="password"
          id="password"
          value={ password }
          onChange={ handleChangeInput }
        />

        <label htmlFor="url">URL</label>
        <input
          type="text"
          id="url"
          value={ url }
          onChange={ handleChangeInput }
        />

        <button
          disabled={ !habilitarBotao }
          type="submit"
        >
          Cadastrar

        </button>

        <button onClick={ onClickCancelar }>Cancelar</button>

      </form>
      <ul>
        <li
          className={
            senhaMinimo ? valid : invalid
        }
        >
          Possuir 8 ou mais caracteres
        </li>

        <li
          className={
            senhaMaximo ? valid : invalid
        }
        >
          Possuir até 16 caracteres
        </li>

        <li
          className={
            regularExpressionLetrasEnumeros ? valid : invalid
        }
        >
          Possuir letras e números
        </li>

        <li
          className={
            regularExpressionCaracteresEspeciais ? valid : invalid
        }
        >
          Possuir algum caractere especial
        </li>

      </ul>
    </section>

  );
}

export default Form;
