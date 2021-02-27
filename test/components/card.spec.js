import { CardProduct } from "@components/card/products";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";

describe("Component Card Product", () => {
  const product = {
    image: "Image 0",
    category: "Category 0",
    group: "Group 0",
    name: "Product 0",
    priceOld: 100,
    price: 50,
  };

  test("Render correctly", () => {
    const { container } = render(<CardProduct product={product} />);

    expect(container).toBeInTheDocument();
  });

  test("Puedes hacer click", () => {
    const { container } = render(<CardProduct product={product} />);

    userEvent.click(screen.getByTestId("card-product-image"));
    userEvent.click(screen.getByTestId("button"));

    expect(container).toBeInTheDocument();
  });
});
