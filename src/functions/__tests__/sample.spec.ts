import { testClass } from "../sample.js";

/**
 * [正常系]
 * testClass
 */
describe("[正常系]testMethodの戻り値を取得できる", () => {
  it("testMethodの戻り値を取得できる", async () => {
    // given 前提条件
    const expectedMessage = "testMethod!";
    // when 実行
    const result = new testClass();
    // then 結果
    expect(await result.testMethod()).toBe(expectedMessage);
  });
});
