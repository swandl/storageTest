let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let counter = document.getElementById("number");

let localStorage = window.localStorage;

let counterVal = 0
if (localStorage.getItem("count")) counterVal = localStorage.getItem("count")

counter.innerText = counterVal;

function updateCount(newCount) {
  counterVal = newCount;
  counter.innerText = newCount;
  localStorage.setItem("count", newCount);
}

updateCount(counterVal)

plus.onclick = () => {
  updateCount(parseInt(counterVal) + 1)
}
minus.onclick = () => {
  updateCount(parseInt(counterVal) - 1)
}
