function sumString(stringOfNumbers) {
  if (stringOfNumbers === "") {
    return 0;
  }
  const numbers = stringOfNumbers.split(",");
  if (numbers.length === 1) {
    return parseInt(numbers[0]);
  }
  return parseInt(numbers[0]) + parseInt(numbers[1]);
}

export default sumString;
