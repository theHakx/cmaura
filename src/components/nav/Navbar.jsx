import { NavLink } from "react-router-dom";

const linkBase =
  "relative rounded-full px-3 py-1.5 text-sm tracking-wide transition";
const linkActive =
  "text-white bg-white/10 ring-1 ring-fuchsia-400/30 shadow-[0_0_0_1px_rgba(168,85,247,0.12),0_0_32px_rgba(168,85,247,0.18)]";
const linkInactive = "text-zinc-200 hover:text-white hover:bg-white/5";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-black/35 backdrop-blur-xl">
      <div className="cm-soft-glow relative">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <NavLink
            to="/"
            className="group inline-flex items-center gap-2 text-lg font-semibold text-white"
          >
            <span className="relative">
              CMaura
              <span className="pointer-events-none absolute -inset-x-2 -inset-y-1 -z-10 rounded-lg bg-gradient-to-r from-fuchsia-500/0 via-fuchsia-500/15 to-indigo-400/0 opacity-0 blur-md transition group-hover:opacity-100" />
            </span>
          </NavLink>
          <nav className="flex items-center gap-2">
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
        </div>
        <div className="cm-nav-line" />
      </div>
    </header>
  );
}
