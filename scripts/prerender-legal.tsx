import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { MemoryRouter } from "react-router-dom";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";

function render(Page: () => JSX.Element) {
  return renderToStaticMarkup(createElement(MemoryRouter, null, createElement(Page)));
}

export function renderLegalPages() {
  return {
    terms: render(Terms),
    privacy: render(Privacy),
  };
}
