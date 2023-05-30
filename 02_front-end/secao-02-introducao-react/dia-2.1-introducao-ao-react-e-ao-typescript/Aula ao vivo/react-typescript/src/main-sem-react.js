function App() {
  const divElement = document.createElement("div");
  divElement.classList.add("card");

  const h1Element = document.createElement("h1");
  h1Element.innerText = "Olá turma 32";

  const paragraphElement = document.createElement("p");
  paragraphElement.innerText = "Hoje é o primeiro dia de React";

  divElement.appendChild(h1Element);
  divElement.appendChild(paragraphElement);

  // divElement =
  // <div class="card">
  //   <h1>Olá turma 32</h1>
  //   <p>Hoje é o primeiro dia de React</p>
  // </div>
  return divElement;
}

const root = document.getElementById("root");

function render(element) {
  root.appendChild(element);
}

render(App());
