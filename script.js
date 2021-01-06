const btnJoke = document.getElementById("get-joke");
const jokeText = document.getElementById("joke-text");

var myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
var myInit = { method: "GET", headers: myHeaders, mode: "cors", cache: "default" };

getJoke();
function getJoke() {
  fetch("http://icanhazdadjoke.com", myInit)
    .then((res) => res.json())
    .then((data) => displayJoke(data.joke));
}

function displayJoke(el) {
  jokeText.innerText = "";
  jokeText.innerText = el;
}

btnJoke.addEventListener("click", getJoke);
