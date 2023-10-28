import { getProduct } from "../../Helpers/getProducts";

describe("function", () => {
  it("check button function getProduct", async () => {
    //const { getProduct } = useButton();
    const title = await getProduct("1");
    const expectedTitle = "iPhone 9";
    expect(title).toBe(expectedTitle);
  });
});
