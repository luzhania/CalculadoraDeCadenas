import addNumbersIn from "./sumString.js";

describe("Sum string", () => {
  it("should return 0 if the string is empty", () => {
    expect(addNumbersIn("")).toEqual(0);
  });
  it("should return the number if the string has only one number", () => {
    expect(addNumbersIn("2")).toEqual(2);
  });
});
describe("Sum string separated by commas", () => {
  it("should return the sum of the string of two numbers separated by comma", () => {
    expect(addNumbersIn("2,5")).toEqual(7);
  });
  it("should return the sum of the string of many numbers separated by comma", () => {
    expect(addNumbersIn("2,5,1")).toEqual(8);
  });
});

describe("Sum string separated by hyphen", () => {
  it("should return the sum of the string of two numbers separated by hyphen", () => {
    expect(addNumbersIn("2-5")).toEqual(7);
  });
  it("should return the sum of the string of many numbers separated by hyphen", () => {
    expect(addNumbersIn("2-5-3-4-10")).toEqual(24);
  });
  it("should return the sum of the string of many numbers separated by hyphen or comma", () => {
    expect(addNumbersIn("2-5,3-4,10")).toEqual(24);
  });  
});

describe("Sum string separated by a specified delimiter", () => {
  it("should return the sum of the string of two numbers separated by a specified delimiter", () => {
    expect(addNumbersIn("//[;] 6;7")).toEqual(13);
  });
  it("should return the sum of the string of many numbers separated by a specified delimiter", () => {
    expect(addNumbersIn("//[;] 6;7;3")).toEqual(16);
  });
  it("should return the sum of the string of many numbers separated by hyphen or comma or a specified delimiter", () => {
    expect(addNumbersIn("//[;] 6;7,3;1-10")).toEqual(27);
  });
});

describe("Sum string", () => {
  it("Numbers greater than 1000 should be ignored", () => {
    expect(addNumbersIn("//[;] 2;1001")).toEqual(2);
  });
  it("Numbers less or equal than 1000 shouldn't be ignored", () => {
    expect(addNumbersIn("//[;] 2;1000")).toEqual(1002);
  });
});

describe("Delimiters of any length", () => {
  it("should return the sum of the string of two numbers separated by a specified delimiter of any length", () => {
    expect(addNumbersIn("//[***] 1***2")).toEqual(3);
  });
  it("should return the sum of the string of many numbers separated by a specified delimiter of any length", () => {
    expect(addNumbersIn("//[***] 1***21***5***2")).toEqual(29);
  });
  it("should return the sum of the string of many numbers separated by hyphen or comma or a specified delimiter of any length", () => {
    expect(addNumbersIn("//[***] 1,21***5-2***3")).toEqual(32);
  });
});

describe("Many delimiters", () => {
  it("should return the sum of the string of many numbers separated by many specified delimiters", () => {
    expect(addNumbersIn("//[*][%] 1*2%3,7-9")).toEqual(22);
  });
});