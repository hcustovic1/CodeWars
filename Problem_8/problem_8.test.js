const scramble = require("./problem_8");

test("Scramble test case #1", () => {
  expect(scramble("rkqodlw", "world")).toBe(true);
});

test("Scramble test case #2", () => {
  expect(scramble("cedewaraaossoqqyt", "codewars")).toBe(true);
});

test("Scramble test case #3", () => {
  expect(scramble("jscripts", "javascript")).toBe(false);
});

test("Scramble test case #4", () => {
  expect(scramble("scriptsjava", "javascripts")).toBe(true);
});
