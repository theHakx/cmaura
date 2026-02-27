import { Routes, Route, useLocation } from "react-router-dom";

import AppShell from "./AppShell";

import Home from "../pages/Home";
import Services from "../pages/Services";
import Work from "../pages/Work";
import About from "../pages/About";
import Contact from "../pages/Contact";

export default function AppRouter() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route element={<AppShell />}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}
