import { Title } from "@components/title";
import { render, screen } from "@testing-library/react";
import React from "react";

describe("Component Title", () => {
  it("Render correctly", () => {
    const { container } = render(<Title />);

    expect(container).toBeInTheDocument();
  });

  it("El valor del titulo se encuentra en el HTML", () => {
    const value = "Hola Mundo";

    render(<Title value={value} />);

    expect(screen.getByText(value)).toHaveTextContent(value);
  })

  it("Validar que el titulo tenga flex: 1", () => {
    const flex = true;

    render(<Title flex={flex} />);

    expect(screen.getByTestId("title")).toHaveStyle("flex: 1");
  })
});
