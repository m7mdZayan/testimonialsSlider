import { data, photos } from "./model/data.js";
import * as elements from "./model/domElements.js";
import { showData } from "./view/showData.js";

window.addEventListener("load", () => {
  let currentNumber = 0;

  showData(currentNumber);

  elements.nextButton.addEventListener("click", () => {
    if (currentNumber < data.length - 1) currentNumber++;
    else {
      if (currentNumber === data.length - 1) currentNumber = 0;
    }
    showData(currentNumber);
  });

  elements.prevButton.addEventListener("click", () => {
    if (currentNumber > 0) currentNumber--;
    else {
      if (currentNumber === 0) currentNumber = data.length - 1;
    }
    showData(currentNumber);
  });
});
