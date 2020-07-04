const heroContentSection = document.querySelector(".hero__section");
const heroContentDiv = document.querySelector(".hero__div-content");
const heroImageDiv = document.querySelector(".hero__div-image");
const heroH1Text = document.querySelector(".hero__h1-1");
const heroH2Text = document.querySelector(".hero__h1-2");
const heroH3Text = document.querySelector(".hero__h1-3");
const heroH4Text = document.querySelector(".hero__h1-4");


const heroDetailsArr = [
  "{",
  "name: Joe Jackson",
  "jobTitle: Full Stack Developer",
  "}",
];

function betterCallback(arr, index) {
  if (index >= arr.length) return;
  const newIndex = index + 1;
  const currentElement = arr[index];

  const newHeadingElement = document.createElement("H1");
  newHeadingElement.classList.add(`heading-line-${index}`);
  heroContentDiv.appendChild(newHeadingElement);
  const headingDomElement = document.querySelector(`.heading-line-${index}`);

  let j = 0;
  const elementLength = currentElement.length;
  function typer() {
    if (j < elementLength) {
      headingDomElement.textContent += currentElement[j];
      j++;
      setTimeout(() => {
        typer();
      }, 50);
    } else {
      betterCallback(arr, newIndex);
    }
  }
  typer();
}

setTimeout(() => {
  console.log("Settimeout called");
  heroContentDiv.classList.add("hero__div-content--loaded");
  heroImageDiv.classList.add("hero__div-image--loaded");
  heroContentSection.classList.add("hero__section--loaded");
}, 1000);

setTimeout(() => {
  betterCallback(heroDetailsArr, 0);
}, 3000);

// This function uses text content
// The problem is not sure how to add nbs with this for object formatting
// function betterCallback(arr, index) {
//   if (index >= arr.length) return;
//   const newIndex = index + 1;
//   const currentElement = arr[index];

//   const newHeadingElement = document.createElement("H1");
//   newHeadingElement.classList.add(`heading-line-${index}`);
//   heroContentDiv.appendChild(newHeadingElement);
//   const headingDomElement = document.querySelector(`.heading-line-${index}`);

//   let j = 0;
//   const elementLength = currentElement.length;
//   function typer() {
//     if (j < elementLength) {
//       headingDomElement.textContent += currentElement[j];
//       j++;
//       setTimeout(() => {
//         typer();
//       }, 50);
//     } else {
//       betterCallback(arr, newIndex);
//     }
//   }
//   typer();
// }
