// split a word into letters, and make it fancy using css
const getFancy = (id) => {
  const element = document.getElementById(id);
  const text = element.innerText.split("");

  element.innerText = "";

  text.forEach((letter) => {
    const span = document.createElement("span");

    span.className = "letter";
    span.innerText = letter;

    element.appendChild(span);
  });
};
export default getFancy;
