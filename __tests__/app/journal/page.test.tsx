import { render, screen } from "@testing-library/react";
import JournalPage from "@/app/journal/page";

describe("JournalPage", () => {
  it("renders the heading and welcome text", () => {
    render(<JournalPage />);
    expect(screen.getByText("Journal")).toBeInTheDocument();
    expect(
      screen.getByText(/Welcome to your personal journal space/i)
    ).toBeInTheDocument();
  });
});
