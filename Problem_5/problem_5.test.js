const persistence = require('./problem_5')

test("Persistent Bugger test case #1", () => {
  expect(persistence(39)).toBe(3);
});

test("Persistent Bugger test case #1", () => {
  expect(persistence(4)).toBe(0);
});

test("Persistent Bugger test case #1", () => {
  expect(persistence(25)).toBe(2);
});

test("Persistent Bugger test case #1", () => {
  expect(persistence(999)).toBe(4);
});
