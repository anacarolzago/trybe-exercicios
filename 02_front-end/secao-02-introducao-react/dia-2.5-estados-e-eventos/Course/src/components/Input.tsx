// Event handler via props - extrair a lógica para o componente-pai

// Por conta do TypeScript, precisamos definir o tipo da prop onChange que o componente recebe. No caso, estamos informando que é uma função que não recebe parâmetros e não retorna nada (() => void)

type InputProps = {
  onChange: () => void;
};

function Input({ onChange }: InputProps) {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    alert(event.target.value);
  }
  return (
    <>
      <h1>Digite o seu primeiro nome:</h1>
      <input name="firstName" onChange={ (event) => alert(event.target.value) } />
    </>
  );
}

export default Input;

/*
Se for alterado o event.target.value para event.target.name, o alerta passará a mostrar o valor firstName em vez do valor digitado no input

Especificamente nos tipos de evento disponibilizados pelo React (nesse caso, o React.ChangeEvent), precisamos também informar qual é o elemento HTML que dá origem a esse evento. Para isso, passamos como “parâmetro do tipo” o tipo correspondente a esse elemento (nesse caso o HTMLInputElement). As aspas em “parâmetro do tipo” são propositais: no TypeScript chamamos esses parâmetros de generics e, em vez de utilizarmos os parênteses, utilizamos o sinal <>

*/
