const playersRoot = document.querySelector("#players");

const players = Array.from({ length: 4 }, (_, index) => ({
  id: index + 1,
  coins: 3,
  cards: Array.from({ length: 7 }, () => ({})),
}));

const renderPlayers = () => {
  playersRoot.innerHTML = "";

  players.forEach((player) => {
    const playerCard = document.createElement("article");
    playerCard.className = "player";

    const header = document.createElement("div");
    header.className = "player-header";

    const name = document.createElement("p");
    name.className = "player-name";
    name.textContent = `Player ${player.id}`;

    const coins = document.createElement("div");
    coins.className = "coins";
    coins.textContent = `${player.coins} coins`;

    header.append(name, coins);

    const cards = document.createElement("div");
    cards.className = "cards";

    player.cards.forEach((_, cardIndex) => {
      const card = document.createElement("div");
      card.className = "card";
      card.textContent = `Card ${cardIndex + 1}`;
      cards.appendChild(card);
    });

    playerCard.append(header, cards);
    playersRoot.appendChild(playerCard);
  });
};

renderPlayers();
