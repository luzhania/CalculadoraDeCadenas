function formatDelimeter(delimiter) {
  return delimiter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function extractNumbers(stringOfNumbers, delimiters) {
  if (stringOfNumbers.startsWith("//")) {
    let endOfDelimeters = stringOfNumbers.lastIndexOf("]");
    stringOfNumbers = stringOfNumbers.substring(endOfDelimeters + 2);
  }
  return stringOfNumbers.split(new RegExp(delimiters));
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

function sumString(numbersWithDelimiter) {
  let delimeters = extractDelimeters(numbersWithDelimiter);
  let numbers = extractNumbers(numbersWithDelimiter, delimeters);
  let sum = sumNumbers(numbers);
  return sum;
}

export default sumString;