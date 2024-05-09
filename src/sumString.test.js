import sumString from "./sumString.js";

describe("Sum string", () => {
  it("should return 0 if the string is empty", () => {
    expect(sumString("")).toEqual(0);
  });
  it("should return the number if the string has only one number", () => {
    expect(sumString("2")).toEqual(2);
  });
});
describe("Sum string separated by commas", () => {
  it("should return the sum of the string of two numbers separated by comma", () => {
    expect(sumString("2,5")).toEqual(7);
  });
});