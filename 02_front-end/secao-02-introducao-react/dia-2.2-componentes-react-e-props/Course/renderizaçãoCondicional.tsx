// Existem três formas comuns de se fazer renderização condicional:
// 1. Operador Logical AND - &&
// 2. Operador ternário - cond ? <A /> : <B />
// 3. if/else

// Exemplo 1:
// É utilizado quando se quer renderizar os elementos apenas se a condição for verdadeira, ou seja: se a condição for falsa, nada será renderizado.
function LuckyNumbers() {
  function luckyNumber() {
    return Math.floor(Math.random() * 60 + 1);
  }

const show = true;

return (
  <>
    <h2 className="subtitle">Seus números da sorte da Mega-Sena são:</h2>
    {show && (
      <ul>
        <li>{luckyNumber()}</li>
        <li>{luckyNumber()}</li>
        <li>{luckyNumber()}</li>
        <li>{luckyNumber()}</li>
        <li>{luckyNumber()}</li>
        <li>{luckyNumber()}</li>
      </ul>
    )}
//     </>
  );
}

export default LuckyNumbers;

// Exemplo 2:
// Quando se quer renderizar elementos diferentes de acordo com a condição – se a condição for true, renderizará <A />; se for false, renderizará <B />:
// function LuckyNumbers() {
//   function luckyNumber() {
//     return Math.floor(Math.random() * 60 + 1);
//   }

const show = true;

// return (
//   <>
//     <h2 className="subtitle">Seus números da sorte da Mega-Sena são:</h2>
    {show ? (
      <ul>
        <li>{luckyNumber()}</li>
        <li>{luckyNumber()}</li>
        <li>{luckyNumber()}</li>
        <li>{luckyNumber()}</li>
        <li>{luckyNumber()}</li>
        <li>{luckyNumber()}</li>
      </ul>
    ) : (
      <h3>Não há números para serem exibidos 😢</h3>
    )}
//     </>
//   );
// }

// export default LuckyNumbers;

// Exemplo 3:
//  Não se pode utilizar if/else no retorno de um componente. Porém, pode-se utilizar o if/else como renderização condicional em qualquer lugar do componente, desde que não seja dentro de um bloco JSX:
// function LuckyNumbers() {
//   function luckyNumber() {
//     return Math.floor(Math.random() * 60 + 1);
//   }

const show = false;

if (show) {
  return (
    <>
      <h2 className="subtitle">Seus números da sorte da Mega-Sena são:</h2>
      <ul>
        <li>{luckyNumber()}</li>
        <li>{luckyNumber()}</li>
        <li>{luckyNumber()}</li>
        <li>{luckyNumber()}</li>
        <li>{luckyNumber()}</li>
        <li>{luckyNumber()}</li>
      </ul>
    </>
  );
}
//  Caso show seja false, o componente retornará a tag h3
return <h3>Não há nenhum número para ser exibido</h3>;
}

// export default LuckyNumbers;

