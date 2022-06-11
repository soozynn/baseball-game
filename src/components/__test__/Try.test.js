import { render, screen, cleanup, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";

import Try from "../Try";

afterEach(() => {
  cleanup();
});

describe("Try component test", () => {
  it("should render Try component", () => {
    const tryList = { value: "234", result: "2 Strike 1 Ball" };
    render(<Try tryList={tryList} />);

    const tryNumberText = screen.queryByTestId("try-number");
    expect(tryNumberText).toBeInTheDocument();
    expect(tryNumberText).toHaveTextContent(
      `# Number entered: ${tryList.value}${tryList.result}`
    );
  });

  it("does not render component if without props Try component", async () => {
    const tryList = null;
    const { container } = render(<Try tryList={tryList} />);

    await waitFor(() => {
      expect(container.childElementCount).toEqual(0);
    });
  });
});
