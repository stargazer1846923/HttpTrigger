import { fileURLToPath } from "url";
import { dirname } from "path";

class testClass {
  constructor() {
    console.log("testClass constructor called");
  }

  async testMethod() {
    console.log("testMethod called");
    const currentFileName = fileURLToPath(import.meta.url);
    const currentDirName = dirname(currentFileName);

    return currentDirName + " " + process.env.TEST;
  }
}

export { testClass };
