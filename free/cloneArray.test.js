const clone = require("./cloneArray");

test("should clone any array given ", () => {
  const array = [1, 2, 3];
  expect(clone(array)).toEqual([1, 2, 3]);
  expect(clone(array)).not.toBe([1, 2, 3]);
});
