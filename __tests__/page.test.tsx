import { render, screen } from "@testing-library/react";
import Home from "../app/page";
import "@testing-library/jest-dom";

jest.mock("@/components/FeatureCard", () => ({
  FeatureCard: ({
    title,
    description,
  }: {
    title: string;
    description: string;
  }) => (
    <div data-testid="feature-card">
      <div>{title}</div>
      <div>{description}</div>
    </div>
  ),
}));

describe("Home page", () => {
  it("renders the hero section with main heading and subtitle", () => {
    render(<Home />);
    expect(screen.getByText(/Enter into prayer/i)).toBeInTheDocument();
    expect(screen.getByText(/Find rest in Him/i)).toBeInTheDocument();
    expect(screen.getByText(/Ora is a quiet space/i)).toBeInTheDocument();
  });

  it("renders the Begin Prayer button", () => {
    render(<Home />);
    expect(
      screen.getByRole("button", { name: /Begin Prayer/i })
    ).toBeInTheDocument();
  });

  it("renders all three FeatureCards with correct titles", () => {
    render(<Home />);
    expect(screen.getByText(/Daily Scripture/i)).toBeInTheDocument();
    expect(screen.getByText(/Prayer Journal/i)).toBeInTheDocument();
    expect(screen.getByText(/Lectio Divina/i)).toBeInTheDocument();
  });

  it("renders the quote section", () => {
    render(<Home />);
    expect(
      screen.getByText(/Prayer is the inner bath of love/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/St. Jean-Marie Vianney/i)).toBeInTheDocument();
  });

  it("renders the About Ora section", () => {
    render(<Home />);
    expect(screen.getByText(/ABOUT ORA/i)).toBeInTheDocument();
    expect(screen.getByText(/Ora \(Latin for 'pray'\)/i)).toBeInTheDocument();
  });
});
