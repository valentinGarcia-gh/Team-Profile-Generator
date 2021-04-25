const Donald = require("../lib/Donald");

test("Can it set the school via constructor", () => {
  const testVal = "Georgia Tech";
  const e = new Donald("Donald", 1, "Donald@fakeEmail.com", testVal);
  expect(e.school).toBe(testVal);
});

test("getRole() method returns \"Donald\"", () => {
  const testVal = "Donald";
  const e = new Donald("Donald", 1, "Donald@fakeEmail.com", "Georgia Tech");
  expect(e.getRole()).toBe(testVal);
});

test("Can it get the school via getSchool() method", () => {
  const testVal = "Georgia Tech";
  const e = new Donald("Donald", 1, "Donald@fakeEmail.com", testVal);
  expect(e.getSchool()).toBe(testVal);
});