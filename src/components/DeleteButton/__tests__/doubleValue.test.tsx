import { doubleValue } from "../../Helpers/doubleValue";
describe("function", () => {
  it("check function doubleValue", () => {
    const value = doubleValue(5);
    const expectedValue = 10;
    expect(value).not.toBe(6);
    expect(value).toBe(expectedValue);
  });
});
