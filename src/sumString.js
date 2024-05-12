let delimiter = "|,";

function formatDelimeters(delimiter){
  let delimiterFormated = "";
  for (let i = 0; i < delimiter.length; i++) {
      delimiterFormated += "|\\" + delimiter[i];
  }
  return delimiterFormated;
}

function formatStringOfNumbers(stringOfNumbers) {
  return stringOfNumbers.split(new RegExp('-|,' + delimiter));
}

function extractDelimeters(numbersWithDelimiter, endOfDelimeters) {
  let unformatedDelimiters = numbersWithDelimiter.substring(2, endOfDelimeters+1);
  while (unformatedDelimiters.includes("[")) {
    let endOfDelimeter = unformatedDelimiters.indexOf("]");
    delimiter += formatDelimeters(unformatedDelimiters.substring(1, endOfDelimeter));
    unformatedDelimiters = unformatedDelimiters.substring(endOfDelimeter + 1);
  }
  return delimiter;
}

function extractNumbers(numbersWithDelimiter, endOfDelimeter) {
  return numbersWithDelimiter.substring(endOfDelimeter + 2)
}

function formatStringWithDelimeter(numbersWithDelimiter) {
  if (numbersWithDelimiter.startsWith("//")) {
    let endOfDelimeters = numbersWithDelimiter.lastIndexOf("]");
    delimiter = extractDelimeters(numbersWithDelimiter, endOfDelimeters);
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
  if (numbersWithDelimiter === "") {
    return 0;
  }
  let stringOfNumbers = formatStringWithDelimeter(numbersWithDelimiter);
  let numbers = formatStringOfNumbers(stringOfNumbers);
  let sum = sumNumbers(numbers);
  return sum;
}

export default sumString;