// Um ponto importante sobre a comunicação entre componentes no React é que as informações fluem como se fossem uma cascata, ou seja, sempre dos componentes-pai para os componentes-filho, nunca ao contrário.

// As props são objetos que vão conter todas as props passadas

// Aqui são definidos os tipos das props:
// O componente Greeting estará recebendo um objeto person como prop
type GreetingProps = {
    person: {
      firstName: string;
      lastName: string;
    };
  };
  
  function Greeting(props: GreetingProps) {
    const firstName = 'Miguel';
    const lastName = 'Silva';
  
    return <h1 className="greeting">Olá {`${firstName} ${lastName}`}</h1>;
}
  
  export default Greeting;

// Existem outras formas de definir os tipos de suas props sem a necessidade de criar um novo type alias. Você poderia, por exemplo, definir diretamente no parâmetro do componente, conforme demonstrado na sequência:
function Greeting2(props: { person: { firstName: string; lastName: string } }) {
    // ...
}

// Passo 3: Lendo as props em um componente-filho
// Agora, é possível acessar as props passadas: elas se tornam chaves do objeto props. No caso do exemplo, pode-se acessar a prop prop.person:
// components/Greeting.tsx

// type GreetingProps = {
//   person: {
//     firstName: string;
//     lastName: string;
//   };
// };

function Greeting(props: GreetingProps) {
    const { person } = props;
  
    const firstName = person.firstName;
    const lastName = person.lastName;
  
  //   return <h1 className="greeting">Olá {`${firstName} ${lastName}`}</h1>;
}
  
  // export default Greeting;

// É muito comum que a desestruturação feita primeira linha do componente, const { person } = props, seja feita diretamente no parâmetro da função:
function Greeting({ person }: GreetingProps) {
    const firstName = person.firstName;
    const lastName = person.lastName;
}