const digital_root = require("./problem_3");

test("Digital root test case #1", () => {
  expect(digital_root(0)).toBe(0);
});

test("Digital root test case #2", () => {
  expect(digital_root(456)).toBe(6);
});

test("Digital root test case #3", () => {
  expect(digital_root(16)).toBe(7);
});
