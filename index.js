const heroContentSection = document.querySelector(".hero__section");
const heroContentDiv = document.querySelector(".hero__div-content");
const heroImageDiv = document.querySelector(".hero__div-image");

const heroDetailsArr = [
  "{",
  '"name": "Joe Jackson",',
  '"jobTitle": "Full Stack Developer",',
  '"language": "JavaScript",',
  '"mainStack": [',
  '"React",',
  '"Express",',
  '"PostgreSQL",',
  '"Node.js"',
  '],',
  '"interests": [',
  '"GraphQL",',
  '"TypeScript",',
  '"Gatsby"',
  '],',
  "}",
];

function betterCallback(arr, index) {
  if (index >= arr.length) return;
  const newIndex = index + 1;
  const currentElement = arr[index];

  const newHeadingElement = document.createElement("H1");
  newHeadingElement.classList.add(`hero__h1--${index}`);
  heroContentDiv.appendChild(newHeadingElement);
  const headingDomElement = document.querySelector(`.hero__h1--${index}`);

  let j = 0;
  const elementLength = currentElement.length;
  function typer() {
    if (j < elementLength) {
      headingDomElement.textContent += currentElement[j];
      j++;
      setTimeout(() => {
        typer();
      }, 40);
    } else {
      betterCallback(arr, newIndex);
    }
  }
  typer();
}

setTimeout(() => {
  heroImageDiv.classList.add("hero__div-image--loaded");
}, 1000);

setTimeout(() => {
  betterCallback(heroDetailsArr, 0);
}, 3000);
