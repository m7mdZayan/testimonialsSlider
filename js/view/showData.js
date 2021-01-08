import * as elements from "../model/domElements.js";
import { data, photos } from "../model/data.js";

export const showData = (currentNumber) => {
  elements.textBox.textContent = data[currentNumber].quaote;
  elements.image.src = photos[currentNumber];
  elements.nameSpan.textContent = data[currentNumber].name;
  elements.jobSpan.textContent = data[currentNumber].job;
};
