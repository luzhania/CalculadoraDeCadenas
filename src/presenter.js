import sumString from "./sumString.js";

const stringToSumInput = document.querySelector("#string-to-sum");
const form = document.querySelector("#sum-form");
const div = document.querySelector("#result-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const stringToSum = stringToSumInput.value;

  div.innerHTML = "<p>" + sumString(stringToSum) + "</p>";
});
