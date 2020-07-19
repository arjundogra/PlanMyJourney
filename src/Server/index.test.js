const { checkIfPort } = require("./index");

test("Check 8084", () => {
  expect(checkIfPort(8084)).toBe(true);
});