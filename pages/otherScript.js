let counter = document.getElementById("number");

let localStorage = window.localStorage;

let counterVal = 0
if (localStorage.getItem("count")) counterVal = localStorage.getItem("count")

counter.innerText = counterVal;
