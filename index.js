const heroContentSection = document.querySelector(".hero__section");
const heroContentDiv = document.querySelector(".hero__div-content");
const heroImageDiv = document.querySelector(".hero__div-image");
const heroH1Text = document.querySelector(".hero__h1-1");
const heroH2Text = document.querySelector(".hero__h1-2");
const heroH3Text = document.querySelector(".hero__h1-3");
const heroH4Text = document.querySelector(".hero__h1-4");

const heroCopy1 = "{name: Joe JacksonjobTitle: Full Stack Developer}";
const heroCopy2 = "name: Joe Jackson,";
const heroCopy3 = "jobTitle: Full Stack Developer";
const heroCopy4 = "}";

const heroDetails = ["{", "name: Joe Jackson,", "jobTitle: Full Stack Developer,", "}" ];

// let i = 0;
// console.log("typer -> i", i);

// Loop over arr
// For each element create a new <p> element
// Then insert letters

function typeObject() {
  heroDetails.forEach((element, index) => {
    const newHeadingElement = document.createElement("H1");
    newHeadingElement.classList.add(`heading-line-${index}`);
    heroContentDiv.appendChild(newHeadingElement);

    const headingDomElement = document.querySelector(`.heading-line-${index}`);
    console.log("typeObject -> headingDomElement", headingDomElement);

    for (let j = 0; j < element.length; j++) {
      setTimeout(() => {
        console.log("typeObject -> j", j);
        headingDomElement.textContent += element[j];
      }, 1000);
    }
  });
}

function wordCallBack(arr, index) {
  if (index >= arr.length) return;
  const newCount = index + 1;
  console.log(arr[index]);
  setTimeout(() => {
    wordCallBack(heroDetails, newCount);
    letterCallBack(arr[index], 0);
  }, 1000);
}

function letterCallBack(element, index) {
  if (index >= arr.length) return;
  const newCount = index + 1;
  console.log(element[index]);
  setTimeout(() => {
    letterCallBack(element, newCount);
  }, 1000);
}

function callMeBack(str, index) {
  const newCount = index + 1;
  console.log(str);
  setTimeout(() => {
    callMeBack(arr[index], newCount);
  }, 1000);
}
var arr = ["a", "b", "c", "d"];

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
      betterCallback(arr, newIndex)
    }
  }
  typer()
}

// function typer() {
//   if (i < heroCopy1.length) {
//     heroH1Text.textContent += heroCopy1[i];
//     i++;
//     setTimeout(() => {
//       typer();
//     }, 50);
//   }
// }

setTimeout(() => {
  console.log("Settimeout called");
  heroContentDiv.classList.add("hero__div-content--loaded");
  heroImageDiv.classList.add("hero__div-image--loaded");
  heroContentSection.classList.add("hero__section--loaded");
}, 1000);

setTimeout(() => {
  // heroH1Text.classList.add("hero__h1--loaded");
  // wordCallBack(heroDetails, 0);
  betterCallback(heroDetails, 0);
  // typeObject();
}, 3000);
