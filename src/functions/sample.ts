import { fileURLToPath } from "url";
import { dirname } from "path";

class testClass {
  constructor() {
    console.log("testClass constructor called");
  }

  async testMethod() {
    console.log("testMethod called");
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    return __dirname + " " + __filename;
  }
}

export { testClass };
