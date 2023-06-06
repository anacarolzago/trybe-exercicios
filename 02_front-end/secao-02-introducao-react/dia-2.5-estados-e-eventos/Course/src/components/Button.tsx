// Event handlers:
// Passo 1 - Criar a função
// Passo 2 - Adicionar o event handler ao elemento

function Button() {
  function handleClick() {
    alert('Botão clicado');
  }

  return (
    <button onClick={ handleClick }>
      Clique em mim!
    </button>
  );
}

export default Button;

/*
    <button onClick={ () => alert('Meu primeiro event handler com React') }>
      Clique em mim!
    </button>

Existem duas principais convenções ao criar um event handler:

1. Ele deve ser criado no componente que será utilizado;
2. O nome da função deve começar com handle, seguido do nome do evento. Se o evento for onChange, utilizamos handleChange.

Observação:

Em algumas situações você precisará passar argumentos para a função handleClick. Instintivamente, você pode pensar em escrever dessa forma: onClick={ handleClick(arg) }.

Entretanto, nesse caso, o correto é invocá-la dentro de uma função anônima: onClick={ (arg) => handleClick(arg) }.

*/
