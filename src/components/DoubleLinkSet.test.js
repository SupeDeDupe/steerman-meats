import { render, screen } from "@testing-library/react";
import { DoubleLinkSet } from "./DoubleLinkSet";

const renderDoubleLinkSet = () => {
  render(
    <DoubleLinkSet
      primaryLinkHref="#url1"
      primaryLinkLabel="primary link label"
      secondaryLinkHref="#url2"
      secondaryLinkLabel="secondary link label"
    />
  );
};

test("renders a primary and secondary link set via a DoubleLinkSet", () => {
  renderDoubleLinkSet();

  const primaryLink = screen.getByRole("link", { name: "primary link label" });
  const secondaryLink = screen.getByRole("link", {
    name: "secondary link label",
  });

  expect(primaryLink).toBeInTheDocument();
  expect(secondaryLink).toBeInTheDocument();
});
