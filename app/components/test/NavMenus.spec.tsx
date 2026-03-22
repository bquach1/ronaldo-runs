import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import NavMenu from "../NavMenu";
import userEvent from "@testing-library/user-event";

jest.mock("next/link", () => {
  const LinkMock: React.FC<{ href: string; children: React.ReactNode }> = ({
    href,
    children,
  }) => <a href={href}>{children}</a>;
  LinkMock.displayName = "NextLinkMock";
  return LinkMock;
});

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("NavMenu", () => {
  it("renders all navigation links", () => {
    render(<NavMenu />);

    const links = ["Home", "Tracker", "Goals", "Store", "About"];

    links.forEach((text) => {
      expect(screen.getByRole("link", { name: text })).toBeInTheDocument();
    });
  });

  it("renders correct href attributes for all links", () => {
    render(<NavMenu />);

    expect(screen.getByRole("link", { name: "Home" })).toHaveAttribute(
      "href",
      "/"
    );
    expect(screen.getByRole("link", { name: "Tracker" })).toHaveAttribute(
      "href",
      "/tracker"
    );
    expect(screen.getByRole("link", { name: "Goals" })).toHaveAttribute(
      "href",
      "/goals"
    );
    expect(screen.getByRole("link", { name: "Store" })).toHaveAttribute(
      "href",
      "/store"
    );
    expect(screen.getByRole("link", { name: "About" })).toHaveAttribute(
      "href",
      "/about"
    );
  });

  it("applies navigation menu styling", () => {
    render(<NavMenu />);
    const nav = screen.getByRole("navigation");
    expect(nav).toHaveClass("w-full");
    expect(nav).toHaveClass("pt-5");
  });

  it("renders NavigationMenuList with the correct number of items", () => {
    const { container } = render(<NavMenu />);
    const items = container.querySelectorAll(
      '[data-slot="navigation-menu-item"]'
    );
    expect(items.length).toBe(5);
  });

  it("links are clickable (simulated click)", async () => {
    render(<NavMenu />);
    const user = userEvent.setup();

    const homeLink = screen.getByRole("link", { name: "Home" });
    await user.click(homeLink);

    expect(homeLink).toHaveAttribute("href", "/");
  });
});
