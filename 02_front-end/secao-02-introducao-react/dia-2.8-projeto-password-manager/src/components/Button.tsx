type ButtonProps = {
  onClickCadastrar: () => void;
};

function Button({ onClickCadastrar }: ButtonProps) {
  return (
    <button onClick={ onClickCadastrar }>Cadastrar nova senha</button>

  );
}

export default Button;
