import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, Link } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import { ScrollToHash } from "@/components/ScrollToHash";

describe("legal pages", () => {
  it("renders the October 25 Terms of Use, including the health anchor", () => {
    render(
      <MemoryRouter>
        <Terms />
      </MemoryRouter>,
    );

    expect(screen.getByRole("heading", { level: 1, name: /terms of use/i })).toBeInTheDocument();
    expect(screen.getByText("Last updated October 25, 2026")).toBeInTheDocument();
    expect(document.getElementById("health-disclaimer")?.textContent).toMatch(/health information/i);
    expect(screen.getByText(/optional Pro trial lasts 7 days, requires a card/i)).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: /support@everydayperform.com/i }).length).toBeGreaterThan(0);
    expect(document.body.textContent).not.toMatch(/legal entity|mailing address|not on file/i);
  });

  it("renders the October 25 Privacy Policy", () => {
    render(
      <MemoryRouter>
        <Privacy />
      </MemoryRouter>,
    );

    expect(screen.getByRole("heading", { level: 1, name: /privacy policy/i })).toBeInTheDocument();
    expect(screen.getByText("Last updated October 25, 2026")).toBeInTheDocument();
    expect(screen.getByText(/We do not sell your personal information/i)).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: /support@everydayperform.com/i }).length).toBeGreaterThan(0);
  });
});

describe("ScrollToHash", () => {
  it("scrolls to the health disclaimer after the terms route commits", () => {
    const root = document.createElement("div");
    root.id = "root";
    const shell = document.createElement("div");
    shell.id = "static-shell";
    const decoy = document.createElement("h2");
    decoy.id = "health-disclaimer";
    decoy.scrollIntoView = vi.fn();
    const el = document.createElement("h2");
    el.id = "health-disclaimer";
    el.textContent = "Health information";
    el.scrollIntoView = vi.fn();
    shell.appendChild(decoy);
    root.appendChild(el);
    document.body.append(shell, root);

    render(
      <MemoryRouter initialEntries={["/terms#health-disclaimer"]}>
        <ScrollToHash />
      </MemoryRouter>,
    );

    expect(el.scrollIntoView).toHaveBeenCalledWith({ block: "start", behavior: "auto" });
    expect(decoy.scrollIntoView).not.toHaveBeenCalled();
    shell.remove();
    root.remove();
  });

  it("scrolls to the top when a link opens terms without a fragment", () => {
    const scrollTo = vi.spyOn(window, "scrollTo").mockImplementation(() => {});

    render(
      <MemoryRouter initialEntries={["/"]}>
        <ScrollToHash />
        <Link to="/terms">Terms of Use</Link>
      </MemoryRouter>,
    );

    expect(scrollTo).not.toHaveBeenCalled();
    fireEvent.click(screen.getByRole("link", { name: "Terms of Use" }));
    expect(scrollTo).toHaveBeenCalledWith(0, 0);
    scrollTo.mockRestore();
  });
});
