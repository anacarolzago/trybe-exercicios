import { useState } from "react";
import Form from "./components/form";
import Card from "./components/Card";
import "./App.css";
import "./components/input-label.css";

// * TAREFAS
// TODO: Criar Formulário
// TODO: Criar Estado do Formulário (campos controlados)
// TODO: Criar Botão no Form + validação dos Campos name e cvc
// TODO: Compartilhar infos com o Card
// ? Bônus - Registrar + Renderizar cartões na aplicação


// Req 1: Crie o Formulario
// Req 2: manipule o form
// Req 3: valide os dados e habilite o button


export type CreditCardData = {
  name: string;
  cvc: string;
  number: string;
  expiry: string;
};

function App() {

  const [data, setData] = useState<CreditCardData>({
    name: '',
    number: '',
    expiry: '',
    cvc: ''
  });

  // const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setData({ ...data, name: event.target.name });
  // };
  // const handleChangeNumber= (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setData({ ...data, number: event.target.name });
  // };

  const handleChangeGenerics = (event: React.ChangeEvent<HTMLInputElement>) => {
    // setData({ ...data, name: event.target.name });
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const sendMsg = 'Cartão adicionado com sucesso!';
    alert(sendMsg);
    setData({
      name: '',
      cvc: '',
      number: '',
      expiry: '',
    });
  }

  const validateForm = () => {
    const THREE_CVC = 3;
    const { cvc, name } = data;
    const cvcSize = cvc.length === THREE_CVC;

    const nameValid = Boolean(name.match(/[a-z]+ [a-z]+/i));

    return cvcSize && nameValid;
  };

  const isValidForm = validateForm();

  return (
    <main>
      <h2>{`Bem vindo ${data.name}`}</h2>
      <h2>{`Seu novo cartão ${data.number}`}</h2>

      <section className="container">
        <Card data={data} />

        <Form
          data={data}
          handleInputChange={handleChangeGenerics}
          handleSubmit={handleSubmit}
          isValidForm={isValidForm}
        />
      </section>
    </main>
  );
}

export default App;
