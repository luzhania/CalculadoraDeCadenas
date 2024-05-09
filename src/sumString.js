function sumString(stringOfNumbers) {
  if (stringOfNumbers === "") {
    return 0;
  }
  const numbers = stringOfNumbers.split(",");
  let sum = 0;
  for (let actualNumber = 0; actualNumber < numbers.length; actualNumber++) {
    sum += parseInt(numbers[actualNumber]);
  }
  return sum;
}

export default sumString;
