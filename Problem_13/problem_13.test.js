const listSquared = require("./problem_13");

test("Integers: Recreation One test case #1", () => {
  expect(listSquared(1, 250)).toStrictEqual([[1, 1], [42, 2500], [246, 84100]]);
})

test("Integers: Recreation One test case #2", () => {
  expect(listSquared(42, 250)).toStrictEqual([[42, 2500], [246, 84100]]);
})
