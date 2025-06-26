import { testClass } from "../sample.js";

/**
 * [正常系]
 * testClass
 */
describe("[正常系]testMethodを戻り値を取得できる", () => {
  it("nullを渡すとtrueを返す", () => {
    // given 前提条件
    const expectedMessage = "testMethod!";
    // when 実行
    const result = new testClass();
    // then 結果
    expect(result.testMethod()).toBe(expectedMessage);
  });
});
