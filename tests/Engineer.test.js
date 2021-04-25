const Engineer = require("../lib/Engineer");

test("Can it set the GitHUb account via constructor", () => {
  const testVal = "GitHubAccount";
  const e = new Engineer("Goofy", 1, "Goofy@fakeEmail.com", testVal);
  expect(e.github).toBe(testVal);
});

test("getRole() method returns \"Engineer\"", () => {
  const testVal = "Engineer";
  const e = new Engineer("Goofy", 1, "Goofy@fakeEmail.com", "GitHubAccount");
  expect(e.getRole()).toBe(testVal);
});

test("Can it get the GitHub username via getGithub() method", () => {
  const testVal = "GitHubAccount";
  const e = new Engineer("Goofy", 1, "Goofy@fakeEmail.com", testVal);
  expect(e.getGithub()).toBe(testVal);
});