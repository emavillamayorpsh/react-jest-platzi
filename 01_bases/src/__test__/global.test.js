const text = "hello world";
const fruits = ["apple", "banana", "orange"];

/*
  test: title of the function
  "should have a text": title/description of the TEST
  expect: recives text
  toMach: check if matches
*/
test("Should have a text", () => {
  // test strings
  expect(text).toMatch(/world/);
});

test("Do we have a banana?", () => {
  // test arrays
  expect(fruits).toContain("banana");
});

test("Should be bigger than", () => {
  // test numbers
  expect(10).toBeGreaterThan(9);
});

test("Should be true", () => {
  // test boolean
  expect(true).toBeTruthy();
});

const reverseString = (str, callback) => {
  callback(str.split("").reverse().join(""));
};

test("Test callback", () => {
  // test boolean
  reverseString("Hello", (str) => {
    expect(str).toBe("olleH");
  });
});

const reverseStringTwo = (str) => {
  return new Promise((res, rej) => {
    if (!str) {
      return rej(Error("Error"));
    }

    res(str.split("").reverse().join(""));
  });
};

test("Test a promise", () => {
  // test promise
  return reverseStringTwo("Hello").then((str) => {
    expect(str).toBe("olleH");
  });
});

test("Test async/await", async () => {
  // test async/await
  const str = await reverseStringTwo("Hello");
  expect(str).toBe("olleH");
});

// this functions allows me to run code that i need after to run any test
// it will run after every single one test
// afterEach(() => console.log("after each test"));

// similar to afterEach but it will run after ALL of the test had run (it runs only one time)
// afterAll(() => console.log("after all tests"));

// this functions allows me to run code that i need before to run any test
// it will run before every single one test
// beforeEach(() => console.log("before each test"));

// similar to beforeEach but it will run after ALL of the test had run (it runs only one time)
// beforeAll(() => console.log("before all tests"));
