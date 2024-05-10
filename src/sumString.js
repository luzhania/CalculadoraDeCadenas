function formatString(stringOfNumbers) {
  stringOfNumbers = stringOfNumbers.replace(/-/g, ",");
  return stringOfNumbers.split(",");
}

function sumNumbers(numbers) {
  let sum = 0;
  for (let actualNumber = 0; actualNumber < numbers.length; actualNumber++) {
    sum += parseInt(numbers[actualNumber]);
  }
  return sum;
}

function sumString(stringOfNumbers) {
  if (stringOfNumbers === "") {
    return 0;
  }
  let numbers = formatString(stringOfNumbers);
  let sum = sumNumbers(numbers);
  return sum;
}

export default sumString;
