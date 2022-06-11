import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import NumberForm from "../NumberForm";

let emit;

beforeAll(() => {
  ({ emit } = window._virtualConsole);
});

beforeEach(() => {
  window._virtualConsole.emit = jest.fn();
});

afterAll(() => {
  window._virtualConsole.emit = emit;
});

afterEach(() => {
  cleanup();
});

describe("NumberForm component test", () => {
  it("check the send button is working well", () => {
    const mockCallback = jest.fn();
    const mockValue = "235";

    render(
      <NumberForm
        onChangeInput={mockCallback}
        onSubmitForm={mockCallback}
        value={mockValue}
      />
    );

    const submitButton = screen.getByText("Send");
    expect(submitButton).toHaveTextContent("Send");

    expect(submitButton).not.toBeDisabled();
    fireEvent.click(submitButton);
    expect(mockCallback).toBeCalled();
  });

  it("send button must be disabled when the no input value", () => {
    const mockCallback = jest.fn();
    const mockValue = "";

    render(
      <NumberForm
        onChangeInput={mockCallback}
        onSubmitForm={mockCallback}
        value={mockValue}
      />
    );

    const submitButton = screen.getByText("Send");
    expect(submitButton).toBeDisabled();
  });

  it("test according to changes in input values", () => {
    const mockCallback = jest.fn();
    const inputValue = "236";
    render(
      <NumberForm
        onChangeInput={mockCallback}
        onSubmitForm={mockCallback}
        value={inputValue}
      />
    );

    const input = screen.getByPlaceholderText("3자리 숫자를 입력해주세요");
    fireEvent.change(input, {
      target: { value: "198" },
    });
    expect(input.value).toBe("198");
  });
});
