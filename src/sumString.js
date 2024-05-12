function formatString(stringOfNumbers) {
  return stringOfNumbers.split(/-|,/);
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
  let numbers;
  if (numbersWithDelimiter.startsWith("//")) {
    let delimiter = numbersWithDelimiter[3];
    let numbersWithoutDelimiter = numbersWithDelimiter.slice(5);
    numbers = numbersWithoutDelimiter.split(new RegExp(delimiter));
  }
  else{
    numbers = formatString(numbersWithDelimiter);
  }
  let sum = sumNumbers(numbers);
  return sum;
}

export default sumString;
