import { render, screen } from "@testing-library/react";
import Navigation from "@/components/Navigation";

jest.mock("next/navigation", () => ({
  usePathname: () => "/",
}));

describe("Navigation", () => {
  it("renders all navigation links", () => {
    render(<Navigation />);
    expect(screen.getByText("Ora")).toBeInTheDocument();
    expect(screen.getByText("Journal")).toBeInTheDocument();
    expect(screen.getByText("Lectio")).toBeInTheDocument();
    expect(screen.getByText("Scripture")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
  });
});
