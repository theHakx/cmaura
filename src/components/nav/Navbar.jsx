import { useState } from "react";
import { NavLink } from "react-router-dom";

const linkBase =
  "relative rounded-full px-3 py-1.5 text-sm tracking-wide transition";
const linkActive =
  "text-white bg-white/10 ring-1 ring-fuchsia-400/30 shadow-[0_0_0_1px_rgba(168,85,247,0.12),0_0_32px_rgba(168,85,247,0.18)]";
const linkInactive = "text-zinc-200 hover:text-white hover:bg-white/5";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-black/35 backdrop-blur-xl">
      <div className="cm-soft-glow relative">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <NavLink
            to="/"
            className="group inline-flex items-center gap-2 text-lg font-semibold text-white"
            onClick={() => setMobileOpen(false)}
          >
            <span className="relative">
              CMaura
              <span className="pointer-events-none absolute -inset-x-2 -inset-y-1 -z-10 rounded-lg bg-gradient-to-r from-fuchsia-500/0 via-fuchsia-500/15 to-indigo-400/0 opacity-0 blur-md transition group-hover:opacity-100" />
            </span>
          </NavLink>

          <nav className="hidden items-center gap-2 sm:flex">
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? linkActive : linkInactive}`
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/work"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? linkActive : linkInactive}`
              }
            >
              Work
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? linkActive : linkInactive}`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? linkActive : linkInactive}`
              }
            >
              Contact
            </NavLink>
          </nav>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-black/25 px-3 py-2 text-sm text-white backdrop-blur-xl transition hover:bg-black/35 sm:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="opacity-90"
            >
              {mobileOpen ? (
                <path
                  d="M6 6L18 18M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 7H20M4 12H20M4 17H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>

        {mobileOpen ? (
          <div className="sm:hidden">
            <div className="mx-auto max-w-6xl px-4 pb-4">
              <div className="rounded-2xl border border-white/10 bg-black/35 p-2 backdrop-blur-xl">
                <NavLink
                  to="/services"
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-xl px-4 py-3 text-sm ${
                      isActive ? "bg-white/10 text-white" : "text-zinc-200 hover:bg-white/5 hover:text-white"
                    }`
                  }
                >
                  Services
                </NavLink>
                <NavLink
                  to="/work"
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-xl px-4 py-3 text-sm ${
                      isActive ? "bg-white/10 text-white" : "text-zinc-200 hover:bg-white/5 hover:text-white"
                    }`
                  }
                >
                  Work
                </NavLink>
                <NavLink
                  to="/about"
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-xl px-4 py-3 text-sm ${
                      isActive ? "bg-white/10 text-white" : "text-zinc-200 hover:bg-white/5 hover:text-white"
                    }`
                  }
                >
                  About
                </NavLink>
                <NavLink
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-xl px-4 py-3 text-sm ${
                      isActive ? "bg-white/10 text-white" : "text-zinc-200 hover:bg-white/5 hover:text-white"
                    }`
                  }
                >
                  Contact
                </NavLink>
              </div>
            </div>
          </div>
        ) : null}
        <div className="cm-nav-line" />
      </div>
    </header>
  );
}
