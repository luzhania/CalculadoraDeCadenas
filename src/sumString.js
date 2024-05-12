let delimiter = ",";

function formatStringOfNumbers(stringOfNumbers) {
  return stringOfNumbers.split(new RegExp('-|,' + '|' + delimiter));
}

function formatStringWithDelimeter(numbersWithDelimiter) {
  if (numbersWithDelimiter.startsWith("//")) {
    delimiter = numbersWithDelimiter[3];
    return numbersWithDelimiter.substring(6);
  }
  return numbersWithDelimiter;
}

function sumNumbers(numbers) {
  let sum = 0;
  for (let actualNumber = 0; actualNumber < numbers.length; actualNumber++) {
    sum += parseInt(numbers[actualNumber]);
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