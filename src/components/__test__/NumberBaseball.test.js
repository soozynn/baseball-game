import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import NumberBaseball from "../NumberBaseball";

afterEach(() => {
  cleanup();
});

describe("NumberBaseball component test", () => {
  it("should render NumberBaseball component", async () => {
    render(<NumberBaseball />);
    const lifeText = "Life opportunity: 5";
    const gameTitle = "<Number Guessing Game>";
    const tryList = screen.getByTestId("try-list");

    expect(screen.getByText("<Number Guessing Game>")).toHaveTextContent(
      gameTitle
    );
    expect(await screen.findByText(/Life opportunity:/i)).toHaveTextContent(
      lifeText
    );
    expect(screen.getByText("<Number Guessing Game>")).toBeInTheDocument();
    expect(await screen.findByText(/Life opportunity:/i)).toBeInTheDocument();
    expect(tryList).toHaveStyle("display: none");
  });
});
