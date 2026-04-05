import { render } from "@testing-library/react";
import { Plus } from "lucide-react";
import { Icon } from "./Icon";

describe("Icon", () => {
  test("renders as a svg element", () => {
    render(<Icon icon={Plus} />);
    expect(document.querySelector("svg")).toBeInTheDocument();
  });
});
