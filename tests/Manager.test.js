const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Can it set the office number via constructor", () => {
  const testVal = 100;
  const e = new Manager("Pete", 1, "Pete@fakeEmail.com", testVal);
  expect(e.officeNumber).toBe(testVal);
});

test('getRole() method returns "Manager"', () => {
  const testVal = "Manager";
  const e = new Manager("Pete", 1, "Pete@fakeEmail.com", 100);
  expect(e.getRole()).toBe(testVal);
});

test("Can it get the office number via the getOffice() method", () => {
  const testVal = 100;
  const e = new Manager("Pete", 1, "Pete@fakeEmail.com", testVal);
  expect(e.getOfficeNumber()).toBe(testVal);
});