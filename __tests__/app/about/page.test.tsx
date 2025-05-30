import { render, screen } from "@testing-library/react";
import AboutPage from "@/app/about/page";

describe("AboutPage", () => {
  it("renders the heading and about text", () => {
    render(<AboutPage />);
    expect(screen.getByText("Journal")).toBeInTheDocument();
    expect(screen.getByText(/About Ora/i)).toBeInTheDocument();
  });
});
