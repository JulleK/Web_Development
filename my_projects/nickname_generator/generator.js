let generatedNameBox = document.querySelector(".generated-name");
let buttonGenerate = document.querySelector(".button-generate");

let adjectives, nouns;
fetch("./adjectives.json")
  .then((response) => response.json())
  .then((json) => (adjectives = json));

fetch("./nouns.json")
  .then((response) => response.json())
  .then((json) => (nouns = json));

function getRandomNum(maxNum) {
  let random = Math.floor(Math.random() * maxNum);
  return random;
}

function setRandomName() {
  let randomAdj = adjectives[getRandomNum(adjectives.length)].toLowerCase();
  let randomNoun = nouns[getRandomNum(nouns.length)];
  randomNoun = randomNoun[0].toUpperCase() + randomNoun.slice(1);

  generatedNameBox.innerText = randomAdj + randomNoun;
}

buttonGenerate.addEventListener("click", setRandomName);
