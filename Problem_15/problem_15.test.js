const comp = require("./problem_15");

test("Are they the same test case #1", () => {
  expect(
    comp(
      [121, 144, 19, 161, 19, 144, 19, 11],
      [132, 14641, 20736, 361, 25921, 361, 20736, 361]
    )
  ).toBe(false);
});

test("Are they the same test case #2", () => {
  expect(
    comp(
      [121, 144, 19, 161, 19, 144, 19, 11],
      [121, 14641, 20736, 361, 25921, 361, 20736, 361]
    )
  ).toBe(true);
});
