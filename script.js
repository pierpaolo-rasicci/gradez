const range = document.querySelector("#range");
const score = document.querySelector("#score");
const grade = document.querySelector("#grade");

range.onpointermove = function (evt) {
  const value = evt.target.value;
  render(value);
}

function render(value) {
  score.innerHTML = "Punteggio: " + value;
  grade.innerHTML = "Voto: " + Math.round((7 / 40 * value + 3) * 10) / 10;
}

render(0);