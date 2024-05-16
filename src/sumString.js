function formatDelimeter(delimiter) {
  return delimiter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function extractNumbers(string, delimiters) {
  if (string.startsWith("//")) {
    let endOfDelimeters = string.lastIndexOf("]");
    string = string.substring(endOfDelimeters + 2);
  }
  return string.split(new RegExp(delimiters));
}

function extractDelimeter(delimitersString) {
  let endOfDelimeter = delimitersString.indexOf("]");
  return delimitersString.substring(1, endOfDelimeter);
}

function extractDelimeters(numbersWithDelimiter) {
  let delimiters = [",","-"];
  if (numbersWithDelimiter.startsWith("//")) {
    let endOfDelimeters = numbersWithDelimiter.lastIndexOf("]");
    let delimitersString = numbersWithDelimiter.substring(2, endOfDelimeters + 1);
    while (delimitersString.includes("[")) {
      let endOfDelimeter = delimitersString.indexOf("]");
      delimiters.push(extractDelimeter(delimitersString, delimiters));
      delimitersString = delimitersString.substring(endOfDelimeter + 1);
    }
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
  let sum = sumNumbers(numbers);
  return sum;
}

export default addNumbersIn;