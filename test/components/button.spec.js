import { Button } from "@components/button";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";

describe("Component Button", () => {
  it("Render correctly", () => {
    const { container } = render(<Button type="primary" />);

    expect(container).toBeInTheDocument();
  });

  it("El valor del button se encuentra en el HTML", () => {
    const value = "Hola Mundo";

    render(<Button type="primary" value={value} />);

    expect(screen.getByText(value)).toHaveTextContent(value);
  });

  it("Puedo hacer click", () => {
    const value = "Hola Mundo";
    render(<Button type="primary" value={value} />);

    userEvent.click(screen.getByTestId("button"));
    userEvent.click(screen.getByText(value));

    expect(screen.getByText(value)).toHaveTextContent(value);
  })
});
