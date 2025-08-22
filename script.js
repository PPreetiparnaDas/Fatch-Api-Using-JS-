const jokeEl = document.getElementById("joke");
const btn = document.getElementById("btn");

// Fetch joke from API
function getJoke() {
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then((response) => response.json())
    .then((data) => {
      jokeEl.textContent = `${data.setup} - ${data.punchline}`;
    })
    .catch((error) => {
      jokeEl.textContent = "Oops! Something went wrong.";
      console.error(error);
    });
}

// Load first joke on page load
getJoke();

// Load new joke on button click
btn.addEventListener("click", getJoke);
