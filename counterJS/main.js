const count = document.getElementById("number");
const btnDecrease = document.getElementById("decrease");
const btnReset = document.getElementById("reset");
const btnIncrease = document.getElementById("increase");

btnDecrease.addEventListener("click", () => {
  let num = +count.textContent;
  num--;
  count.innerText = num;
});

btnReset.addEventListener("click", () => {
  count.innerText = 0;
});

btnIncrease.addEventListener("click", () => {
  let num = +count.textContent;
  num++;
  count.innerText = num;
});
