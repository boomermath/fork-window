import { lazy } from "solid-js";
import { render } from "solid-js/web";
import { Route, Routes, Router } from "solid-app-router";

import "tailwindcss/tailwind.css";

const Main = lazy(() => import("./components/Main"));
const Art = lazy(() => import("./components/Art"));

render(
  () => (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/art" element={<Art />} />
      </Routes>
    </Router>
  ),
  document.getElementById("root")
);
