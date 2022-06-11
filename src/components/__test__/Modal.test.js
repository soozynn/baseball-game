import { render, cleanup, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import Modal from "../Modal";

afterEach(() => {
  cleanup();
});

describe("Modal component test", () => {
  it("should render Modal component", () => {
    const mockCallback = jest.fn();
    render(
      <Modal
        resultText="Lose :("
        setIsOpenModal={mockCallback}
        isOpenModal={true}
        restartGame={mockCallback}
      />
    );

    const button = screen.getByTestId("toggle");
    expect(button.textContent).toBe("RestartClose the game");
  });

  it("should be closed when the Button is clicked", async () => {
    const mockCallback = jest.fn();
    render(
      <Modal
        resultText="Lose :("
        setIsOpenModal={mockCallback}
        isOpenModal={true}
        restartGame={mockCallback}
      />
    );

    const restartButton = screen.getByText("Restart");
    const closeButton = screen.getByText("Restart");
    fireEvent.click(restartButton);
    fireEvent.click(closeButton);
    expect(mockCallback).toBeCalledTimes(2);
  });
});
