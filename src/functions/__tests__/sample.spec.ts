import { fileURLToPath } from "node:url";
import { testClass } from "../sample.js";
import { dirname } from "node:path";

/**
 * [正常系]
 * testClass
 */
describe("[正常系]testMethodの戻り値を取得できる", () => {
  it("testMethodの戻り値を取得できる", async () => {
    // given 前提条件
    const expectedMessage = dirname(import.meta.dirname) + " " + 1000;
    // when 実行
    const result = new testClass();
    console.log(import.meta.dirname);
    // then 結果
    expect(await result.testMethod()).toBe(expectedMessage);
  });
});
