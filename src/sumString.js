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

function extractDelimiter(delimitersString) {
  return delimitersString.substring(1, delimitersString.indexOf("]"));
}

function extractDelimeters(numbersWithDelimiter) {
  let delimiters = [",","-"];
  if (numbersWithDelimiter.startsWith("//")) {
    let endOfDelimeters = numbersWithDelimiter.lastIndexOf("]");
    let delimitersString = numbersWithDelimiter.substring(2, endOfDelimeters + 1);
    while (delimitersString.includes("[")) {
      let endOfDelimeter = delimitersString.indexOf("]");
      let delimiter = extractDelimiter(delimitersString);
      delimiters.push(delimiter);
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
  return sumNumbers(numbers);
}

export default addNumbersIn;