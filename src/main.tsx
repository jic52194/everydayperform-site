import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const rootEl = document.getElementById("root");
if (!rootEl) {
  throw new Error("Missing #root");
}

createRoot(rootEl).render(<App />);

const staticShell = document.getElementById("static-shell");
if (staticShell) {
  const removeShell = () => {
    if (rootEl.childElementCount > 0) {
      staticShell.remove();
      return true;
    }
    return false;
  };

  if (!removeShell()) {
    const observer = new MutationObserver(() => {
      if (removeShell()) observer.disconnect();
    });
    observer.observe(rootEl, { childList: true });
  }
}
