import { render, screen } from "@testing-library/react";
import BiblePassage from "@/components/BiblePassage";

jest.mock("@/lib/openai", () => ({
  fetchBibleVerse: jest.fn(() => Promise.resolve("Test Bible Verse")),
  fetchBibleVerseCitation: jest.fn(() => Promise.resolve("Test Citation")),
}));

describe("BiblePassage", () => {
  it("renders the bible verse and citation", async () => {
    render(await BiblePassage());
    expect(screen.getByText("Test Bible Verse")).toBeInTheDocument();
    expect(screen.getByText(/Test Citation/)).toBeInTheDocument();
  });
});
