import sumString from "./sumString.js";

describe("Sum string", () => {
  it("should return 0 if the string is empty", () => {
    expect(sumString("")).toEqual(0);
  });
  it("should return the number if the string has only one number", () => {
    expect(sumString("2")).toEqual(2);
  });
});
