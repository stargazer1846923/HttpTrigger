class testClass {
  constructor() {
    console.log("testClass constructor called");
  }

  async testMethod() {
    console.log("testMethod called");
    return "testMethod!";
  }
}

export { testClass };
