import { render, screen } from "@testing-library/react";
import { Card } from "./Card";
import { TreePalm } from "lucide-react";

describe("Card", () => {
  test("displays the card title", () => {
    render(<Card title="projeto" />);
    expect(screen.getByText("projeto")).toBeInTheDocument();
  });

  test("renders an icon", () => {
    render(<Card title="projeto" icon={TreePalm} />);
    expect(document.querySelector("svg")).toBeInTheDocument();
  });
});
