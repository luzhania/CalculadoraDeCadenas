let delimiter = ",";

function formatDelimeter(delimiter){
  let delimiterFormated = "";
  for (let i = 0; i < delimiter.length; i++) {
      delimiterFormated += "\\" + delimiter[i];
  }
  return delimiterFormated;
}

function formatStringOfNumbers(stringOfNumbers) {
  return stringOfNumbers.split(new RegExp('-|,' + '|' + delimiter));
}

function extractDelimeter(numbersWithDelimiter, endOfDelimeter) {
  let unformatedDelimiter = numbersWithDelimiter.substring(3, endOfDelimeter);
  return formatDelimeter(unformatedDelimiter);
}

function extractNumbers(numbersWithDelimiter, endOfDelimeter) {
  return numbersWithDelimiter.substring(endOfDelimeter + 2)
}

function formatStringWithDelimeter(numbersWithDelimiter) {
  if (numbersWithDelimiter.startsWith("//")) {
    let endOfDelimeter = numbersWithDelimiter.indexOf("]");
    delimiter = extractDelimeter(numbersWithDelimiter, endOfDelimeter);
    return extractNumbers(numbersWithDelimiter, endOfDelimeter);
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

sumString("//[***] 1***2");
export default sumString;