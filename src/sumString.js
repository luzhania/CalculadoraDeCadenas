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

function formatStringWithDelimeter(numbersWithDelimiter) {
  if (numbersWithDelimiter.startsWith("//")) {
    let end = numbersWithDelimiter.indexOf("]");
    delimiter = numbersWithDelimiter.substring(3, end);
    delimiter = formatDelimeter(delimiter);
    return numbersWithDelimiter.substring(end + 2, numbersWithDelimiter.length);
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