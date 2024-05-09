import sumString from "./sumString.js";

describe("Sum string", () => {
  it("should return 0 if the string is empty", () => {
    expect(sumString("")).toEqual(0);
  });
});
