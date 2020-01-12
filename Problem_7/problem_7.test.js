const bouncingBall = require("./problem_7");

test("Bouncing balls test case #1", () => {
  expect(bouncingBall(3.0, 0.66, 1.5)).toBe(3);
});

test("Bouncing balls test case #2", () => {
  expect(bouncingBall(30.0, 0.66, 1.5)).toBe(15);
});

