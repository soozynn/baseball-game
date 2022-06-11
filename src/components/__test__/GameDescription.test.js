import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import GameDescription from "../GameDescription";

afterEach(() => {
  cleanup();
});

describe("GameDescription component test", () => {
  it("should be invisible before GameDescription component hover", () => {
    render(<GameDescription />);
    const descriptionText = screen.getByTestId("descriptrion-text");

    expect(descriptionText).toHaveStyle("display: none");
  });
});
