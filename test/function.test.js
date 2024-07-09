const functions = require("../js/function");

test("Adding up two numbers", function () {
  expect(functions.sumTwoNumbers(6, 6).toBe(12));
  expect(functions.sumTwoNumbers(-6, 6).toBe(0));
});
