const randomStrings = require("../index");

// describe allows me to describe some tests for the project

describe("Test functionalities of randomStrings", () => {
  test("Test functionality", () => {
    expect(typeof randomStrings()).toBe("string");
  });

  test("Check that a city doesn't exist", () => {
    expect(randomStrings()).not.toMatch("/Cordoba/");
  });
});
