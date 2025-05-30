import { render, screen } from "@testing-library/react";
import Loading from "@/app/scripture/loading";

describe("Scripture Loading", () => {
  it("renders the title and loading message", () => {
    render(<Loading />);
    expect(screen.getByText(/Today's Scripture/i)).toBeInTheDocument();
    expect(screen.getByText(/Opening the Word/i)).toBeInTheDocument();
  });
});
