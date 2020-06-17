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

let i = 0;
console.log("typer -> i", i);

function typer() {
  if (i < heroCopy1.length) {
    heroH1Text.textContent += heroCopy1[i];
    i++;
    setTimeout(() => {
      typer();
    }, 50);
  }
}

setTimeout(() => {
  console.log("Settimeout called");
  heroContentDiv.classList.add("hero__div-content--loaded");
  heroImageDiv.classList.add("hero__div-image--loaded");
  heroContentSection.classList.add("hero__section--loaded");
}, 1000);

setTimeout(() => {
  heroH1Text.classList.add("hero__h1--loaded");
  typer();
}, 3000);
