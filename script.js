const leftValue = document.querySelector("#leftValue");
const rightValue = document.querySelector("#rightValue");
const leftButton = document.querySelector("#leftButton");
const rightButton = document.querySelector("#rightButton");

let count = 0;

leftButton.addEventListener("click", () => {
  count += 1;
  leftValue.textContent = String(count);
});

rightButton.addEventListener("click", () => {
  const roll = Math.floor(Math.random() * 101);
  rightValue.textContent = String(roll);
});
