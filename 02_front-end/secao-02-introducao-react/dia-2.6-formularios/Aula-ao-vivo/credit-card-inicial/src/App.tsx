import { useState } from "react";
import "./App.css";
import "./components/input-label.css";
import Card from "./components/Card";
import Form from "./components/form";

// Req 1: Crie o Formulario
// Req 2: controle o form
// Req 3: exiba as informacoes do formulario
// Req 4: tipagem dos elementos
// Req 5: valide os dados e habilite o formulario

export type CreditCardData = {
  name: string;
  cvc: string;
  number: string;
  expiry: string;
};

// 1 conceito - > input controlado
// 2 conceito -> Typescript tem os Generics

function App() {

  // const [name, setName] = useState('Henrique Jensen')
  const [data, setData] = useState<CreditCardData>({ name: "", number: "", cvc: "", expiry: "" })

  // const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setData({ ...data, name: event.target.value })
  // }

  // const handleChangeNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setData({ ...data, number: event.target.value })
  // }

  // handle change generico
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {

    // if de validacao

    // if(event.target.name === "Jensen") {
    //   setData({ ...data, name: event.target.value })
    // }

    // if(event.target.name === "Turma32") {
    //   setData({ ...data, number: event.target.value })
    // }

    setData({ ...data, [event.target.name]: event.target.value  })

    // obj["name"]
    // obj.name

  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(data);
    alert("Cartão adicionado com sucesso")

    // if de validacao

    // Salvo no localStorage antes de apagar
    // localStorage.setItem(.. data)

    // Nessa linha estamos apagando todas as informacoes do formulario
    setData({ name: "", number: "", cvc: "", expiry: "" })
  }

  const validateForm = () => {
    // se o usuario digitar 3 digitos no CVC, o button fica desabilitado
    // validacao de cvc
    const isCVCvalid = !(data.cvc.length === 3)

    // o usuario precisa digitar o nome e sobrenome
    // Regex
    // const isNameValid = data.name.match(/[a-z]+ [a-z]+/i);
    // console.log(isNameValid)
    const isNameValid = data.name.includes("A")

    // if (data.name.includes("H"))

    return isCVCvalid && isNameValid
  }

  const isDisabled = validateForm()

  return (
    <main>
    
      <h2>{`Bem vindo ${data.name}`}</h2>
      <h2>{`Seu novo cartão ${data.number}`}</h2>

      <section className="container">
        <Card data={data} />

        <Form
          data={data}
          handleInputChange={handleChange}
          handleSubmit={handleSubmit}
          isDisabled={isDisabled}
        />
      </section>
    </main>
  );
}

export default App;
