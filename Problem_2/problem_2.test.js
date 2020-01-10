const descendingOrder = require("./problem_2");

test("Descending order test case #1", () => {
  expect(descendingOrder(0)).toBe(0);
});

test("Descending order test case #2", () => {
  expect(descendingOrder(1)).toBe(1);
});

test("Descending order test case #3", () => {
  expect(descendingOrder(123456789)).toBe(987654321);
});
