const sum = require("./sum");

test("should properly add two numbers", () => {
  expect(sum(3, 4)).toBe(7);
});
