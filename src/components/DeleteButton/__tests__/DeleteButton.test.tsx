import { render, screen } from "@testing-library/react";
import { DeleteButton } from "..";
describe("button", () => {
  it("check button render", () => {
    render(<DeleteButton />);
    const button = screen.getByTestId("button-test-id");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Usuń post");
  });
});
