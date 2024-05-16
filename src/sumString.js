let delimiters = "|-";

function formatDelimeter(delimiter){
  let delimiterFormated = "";
  for (let i = 0; i < delimiter.length; i++) {
      delimiterFormated += "|\\" + delimiter[i];
  }
  return delimiterFormated;
}

function formatStringOfNumbers(stringOfNumbers) {
  return stringOfNumbers.split(new RegExp(',' + delimiters));
}

function extractDelimeter(unformatedDelimiters) {
  let endOfDelimeter = unformatedDelimiters.indexOf("]");
  delimiters += formatDelimeter(unformatedDelimiters.substring(1, endOfDelimeter));
  return delimiters;
}

function extractDelimeters(numbersWithDelimiter, endOfDelimeters) {
  let unformatedDelimiters = numbersWithDelimiter.substring(2, endOfDelimeters+1);
  while (unformatedDelimiters.includes("[")) {
    let endOfDelimeter = unformatedDelimiters.indexOf("]");
    delimiters = extractDelimeter(unformatedDelimiters);
    unformatedDelimiters = unformatedDelimiters.substring(endOfDelimeter + 1);
  }
  return delimiters;
}

function extractNumbers(numbersWithDelimiter, endOfDelimeter) {
  return numbersWithDelimiter.substring(endOfDelimeter + 2)
}

function formatStringWithDelimeter(numbersWithDelimiter) {
  if (numbersWithDelimiter.startsWith("//")) {
    let endOfDelimeters = numbersWithDelimiter.lastIndexOf("]");
    delimiters = extractDelimeters(numbersWithDelimiter, endOfDelimeters);
    return extractNumbers(numbersWithDelimiter, endOfDelimeters);
  }
  return numbersWithDelimiter;
}

function sumNumbers(numbers) {
  let sum = 0;
  for (let actualNumber = 0; actualNumber < numbers.length; actualNumber++) {
    if (parseInt(numbers[actualNumber]) <= 1000) {
      sum += parseInt(numbers[actualNumber]);
    }
  }
  return sum;
}

function sumString(numbersWithDelimiter) {
  let stringOfNumbers = formatStringWithDelimeter(numbersWithDelimiter);
  let numbers = formatStringOfNumbers(stringOfNumbers);
  let sum = sumNumbers(numbers);
  return sum;
}

export default sumString;