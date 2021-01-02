import { data, photos } from "./data.js";

window.addEventListener("load", () => {
  const textBox = document.querySelector(".text p");
  const nextButton = document.querySelector(".next");
  const prevButton = document.querySelector(".prev");
  const image = document.querySelector(".person");
  const nameSpan = document.querySelector(".name");
  const jobSpan = document.querySelector(".job");

  let currentNUmber = 0;

  textBox.textContent = data[currentNUmber].quaote;
  image.src = photos[currentNUmber];
  nameSpan.textContent = data[currentNUmber].name;
  jobSpan.textContent = data[currentNUmber].job;

  nextButton.addEventListener("click", () => {
    if (currentNUmber < data.length - 1) currentNUmber++;
    else {
      if (currentNUmber === data.length - 1) currentNUmber = 0;
    }
    textBox.textContent = data[currentNUmber].quaote;
    image.src = photos[currentNUmber];
    nameSpan.textContent = data[currentNUmber].name;
    jobSpan.textContent = data[currentNUmber].job;
  });

  prevButton.addEventListener("click", () => {
    if (currentNUmber > 0) currentNUmber--;
    else {
      if (currentNUmber === 0) currentNUmber = data.length - 1;
    }
    textBox.textContent = data[currentNUmber].quaote;
    image.src = photos[currentNUmber];
    nameSpan.textContent = data[currentNUmber].name;
    jobSpan.textContent = data[currentNUmber].job;
  });
});
