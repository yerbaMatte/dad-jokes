const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', generateJoke);

generateJoke();

function generateJoke() {
  fetch('https://icanhazdadjoke.com', {
    headers: {
      Accept: 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      jokeEl.innerHTML = data.joke;
    });
}

console.log((id, event) => id + event);

const irina = (id, event) => id + event;

const err = [1, 2, 3, 4, 5, 6];

const newone = err.map((x) => {
  if (x > 3) {
    return x * 2;
  } else {
    return x;
  }
});
