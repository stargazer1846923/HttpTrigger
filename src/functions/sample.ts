import { fileURLToPath } from "url";
import { dirname } from "path";

class testClass {
  constructor() {
    console.log("testClass constructor called");
  }

  async testMethod() {
    console.log("testMethod called");
    console.log(import.meta.filename);

    return import.meta.dirname + " " + process.env.TEST;
  }
}

export { testClass };
