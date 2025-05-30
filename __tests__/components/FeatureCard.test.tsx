import { render, screen } from "@testing-library/react";
import { FeatureCard } from "@/components/FeatureCard";
import { FaBible } from "react-icons/fa";

describe("FeatureCard", () => {
  it("renders the title, description, and icon", () => {
    render(
      <FeatureCard
        href="/test"
        icon={<FaBible data-testid="icon" />}
        title="Test Title"
        description="Test Description"
      />
    );
    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test Description")).toBeInTheDocument();
    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });
});
