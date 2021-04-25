const Employee = require("../lib/Employee");

test("Can it instantiate Employee instance", () => {
  const e = new Employee();
  expect(typeof(e)).toBe("object");
});

test("Can it set the name via constructor", () => {
  const name = "Mickey";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test("Can it set the id via constructor", () => {
  const testVal = 100;
  const e = new Employee("Mickey", testVal);
  expect(e.id).toBe(testVal);
});

test("Can it set the email via constructor", () => {
  const testVal = "Mickey@fakeEmail.com";
  const e = new Employee("Mickey", 1, testVal);
  expect(e.email).toBe(testVal);
});

test("Can it get the name via getName() method", () => {
  const testVal = "Mickey";
  const e = new Employee(testVal);
  expect(e.getName()).toBe(testVal);
});

test("Can it get the id via getId() method", () => {
  const testVal = 0010;
  const e = new Employee("Mickey", testVal);
  expect(e.getId()).toBe(testVal);
});

test("Can it get the email via getEmail() method", () => {
  const testVal = "Mickey@fakeEmail.com";
  const e = new Employee("Mickey", 1, testVal);
  expect(e.getEmail()).toBe(testVal);
});

test("getRole() method returns \"Employee\"", () => {
  const testVal = "Employee";
  const e = new Employee("Mickey", 1, "Mickey@fakeEmail.com");
  expect(e.getRole()).toBe(testVal);
});