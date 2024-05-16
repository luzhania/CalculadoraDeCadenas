function formatDelimeter(delimiter) {
  return delimiter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function hasManyDelimiters(string) {
  return string.startsWith("//");
}

function extractNumbers(string, delimiters) {
  if (hasManyDelimiters(string)) {
    let endOfDelimeters = string.lastIndexOf("]");
    string = string.substring(endOfDelimeters + 2);
  }
  return string.split(new RegExp(delimiters));
}

function extractDelimeters(string) {
  let delimiters = [",", "-"];
  if (hasManyDelimiters(string)) {
    let delimitersStart = string.indexOf("[") + 1;
    let delimitersEnd = string.lastIndexOf("]");

    let delimitersString = string.substring(delimitersStart, delimitersEnd);    
    delimiters = delimiters.concat(delimitersString.split("]["));
  }
  return delimiters.map(formatDelimeter).join("|");
}

function sumNumbers(numbers) {
  let sum = 0;
  for (let actualNumber = 0; actualNumber < numbers.length; actualNumber++) {
    let number = parseInt(numbers[actualNumber]);
    if (number <= 1000) {
      sum += number;
    }
  }
  return sum;
}

function addNumbersIn(string) {
  let delimeters = extractDelimeters(string);
  let numbers = extractNumbers(string, delimeters);
  return sumNumbers(numbers);
}

export default addNumbersIn;