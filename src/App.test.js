import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders main heading", () => {
  render(<App />);
  const headerElement = screen.getByRole("heading", { level: 1 });

  expect(headerElement).toBeInTheDocument();
  expect(headerElement).toHaveTextContent(
    /Fresh, locally raised Prince Edward Island Meats./i
  );
});
