import { renderHook } from "@testing-library/react";
import { usePosts } from "../../context/Hooks/usePosts";

describe("function", () => {
  it("check function getSiglePost", async () => {
    const { result } = renderHook(usePosts);
    const post = await result.current.getSinglePost("1");
    const expectedItems = "His mother had always taught him";

    expect(post).toBe(expectedItems);
  });
});
