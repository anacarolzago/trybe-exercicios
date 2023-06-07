// Controlando inputs
// Nossa tarefa é a de criar um estado no componente para armazenar o valor do input. Com esse objetivo, podemos criar uma função event handler para armazenar o value do input nesse estado. Vamos também adicionar uma tag h1 para renderizar o valor do estado:

import React, { useState } from 'react';

import './App.css';

// function App() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [schooling, setSchooling] = useState('Médio');
//   const [resume, setResume] = useState('');
//   const [terms, setTerms] = useState(false);
//   const [error, setError] = useState(false);

//   function resetForm() {
//     setName('');
//     setEmail('');
//     setSchooling('Médio');
//     setResume('');
//     setTerms(false);
//     setError(false);
//   }

//   function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
//     event.preventDefault();

//     if (terms) {
//       alert(
//         `Nome: ${name}\nemail: ${email}\nEscolaridade: ${schooling}\nExperiências: ${resume}`,
//       );
//       resetForm();
//     } else {
//       setError(true);
//     }
//   }

//   return (

//   // Como iremos recuperar a chave target, podemos desestruturar o parâmetro da função: ({ target }) => setName(target.value). Essa alteração não é necessária, é apenas uma forma mais simples de escrever a mesma função
//   // <>
//   //   <label>
//   //     Nome:
//   //     <input value={ name } onChange={ (event) => setName(event.target.value) } />
//   //   </label>
//   //   <h1>Este é um paragrafo qualquer para dizer Olá, { name }!</h1>
//   //   <button onClick={ () => setName('') }>Apagar!</button>
//   // </>
//     <>
//       <form onSubmit={ (event) => handleSubmit(event) }>

//         <label>
//           Nome
//           <input value={ name } onChange={ ({ target }) => setName(target.value) } />
//         </label>

//         <label>
//           E-mail
//           <input value={ email } onChange={ ({ target }) => setEmail(target.value) } />
//         </label>

//         <label>
//           Escolaridade

//           <select
//             value={ schooling }
//             onChange={ ({ target }) => setSchooling(target.value) }
//           >

//             <option value="Médio">Médio</option>
//             <option value="Superior">Superior</option>
//             <option value="Pós-graduação">Pós-graduação</option>
//           </select>

//         </label>

//         <label>
//           Resumo das experiências

//           <textarea
//             value={ resume }
//             onChange={ ({ target }) => setResume(target.value) }
//           />
//         </label>

//         <label>
//           Aceito os termos e condições

//           <input
//             type="checkbox"
//             checked={ terms }
//             onChange={ () => setTerms((prevTerms) => !prevTerms) }
//           />
//         </label>

//         <button>Enviar</button>

//       </form>

//       { error && (
//         <h4>
//           Você precisa aceitar os termos e condições para poder enviar o
//           currículo
//         </h4>
//       )}

//     </>
//   );
// }

// Refatorando: função handler para todos os inputs

function App() {
  const [terms, setTerms] = useState(false);
  const [error, setError] = useState(false);
  const [formInfo, setFormInfo] = useState({
    name: '',
    email: '',
    schooling: 'Médio',
    resume: '',
  });

  function resetForm() {
    setFormInfo({
      name: '',
      email: '',
      schooling: 'Médio',
      resume: '',
    });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (terms) {
      resetForm();
      setTerms(false);
      setError(false);
      alert(
        `Nome: ${formInfo.name}\nEmail: ${formInfo.email}\nEscolaridade: ${formInfo.schooling}\nExperiências: ${formInfo.resume}`,
      );
    } else {
      setError(true);
    }
  }

  function handleChange(
    event: React.ChangeEvent<
    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) {
    const { name, value } = event.target;
    setFormInfo({
      ...formInfo,
      [name]: value,
    });
  }

  return (
    <>
      <form onSubmit={ handleSubmit }>
        <label>
          Nome:
          <input
            required
            name="name"
            value={ formInfo.name }
            onChange={ handleChange }
          />
        </label>
        <label>
          E-mail:
          <input
            required
            name="email"
            value={ formInfo.email }
            onChange={ handleChange }
          />
        </label>
        <label>
          Escolaridade:
          <select
            name="schooling"
            value={ formInfo.schooling }
            onChange={ handleChange }
          >
            <option value="Médio">Médio</option>
            <option value="Superior">Superior</option>
            <option value="Pós-graduação">Pós-graduação</option>
          </select>
        </label>
        <label>
          Resumo das experiências
          <textarea
            name="resume"
            value={ formInfo.resume }
            onChange={ handleChange }
          />
        </label>
        <label>
          Aceito os termos e condições
          <input
            type="checkbox"
            checked={ terms }
            onChange={ () => setTerms(!terms) }
          />
        </label>
        <button>Enviar</button>
      </form>
      {error && (
        <h4>
          Você precisa aceitar os termos e condições para poder enviar o
          currículo
        </h4>
      )}
    </>
  );
}

export default App;
