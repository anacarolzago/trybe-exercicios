export function startNewGame() {
  return fetch("https://deckofcardsapi.com/api/deck/new/shuffle/").then(
    (response) => response.json()
  ); // devolve todos os dados
}

export function drawCard(deckId) {
  // url https://deckofcardsapi.com/api/deck/<<deck_id>>/draw/
  return fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/`).then(
    (response) => response.json()
  );
}

export function stopGame() {
  console.log("stop");
}
