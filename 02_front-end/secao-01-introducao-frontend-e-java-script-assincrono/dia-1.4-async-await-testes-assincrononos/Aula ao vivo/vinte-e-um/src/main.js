import { startNewGame, drawCard, stopGame } from "./helpers/fetchFunctions";
import { addCardToPlayer } from "./helpers/addCard";
import "./style.css";

const shuffleButton = document.querySelector(".shuffle");
const stopButton = document.querySelector(".stop");
const drawButton = document.querySelector(".draw");

let deckId;
const playersScore = {
  1: 0,
  2: 0,
};

shuffleButton.addEventListener("click", () => {
  startNewGame().then((dados) => {
    const { deck_id: id } = dados;
    deckId = id;
    shuffleButton.disabled = true;
    drawButton.disabled = false;
    stopButton.disabled = false;
  });
});

drawButton.addEventListener("click", () => {
  drawCard(deckId).then((dados) => {
    const card = dados.cards[0];
    addCardToPlayer(card, 1, playersScore);
  });
});

stopButton.addEventListener("click", () => {
  const MAX_SCORE = 21;
  drawButton.disabled = true;
  stopButton.disabled = true;
  shuffleButton.disabled = false;

  const results = stopGame(deckId, playersScore);

  results.forEach((data) => {
    const card = data.cards[0];
    addCardToPlayer(card, 2, playersScore);
  });

  if (playersScore[1] > MAX_SCORE) {
    return showResult("lose");
  }

  showResult("win");
});
