import { Link } from "react-router-dom";
import Reveal from "../components/motion/Reveal";
import ParallaxMedia from "../components/motion/ParallaxMedia";

export default function Home() {
  return (
    <div className="py-16 sm:py-24">
      <div className="grid gap-10">
        <Reveal>
          <div className="grid gap-6">
            <div className="text-xs tracking-[0.25em] text-zinc-300">CMaura</div>
            <div className="relative">
              <div className="pointer-events-none absolute -inset-x-10 -inset-y-10 -z-10 opacity-90 blur-2xl">
                <div className="h-full w-full bg-[radial-gradient(circle_at_30%_30%,rgba(168,85,247,0.28),transparent_55%),radial-gradient(circle_at_70%_40%,rgba(59,130,246,0.18),transparent_55%),radial-gradient(circle_at_55%_70%,rgba(249,115,22,0.10),transparent_60%)]" />
              </div>
              <h1 className="max-w-5xl text-5xl font-semibold leading-[0.95] sm:text-7xl">
                Minimal,
                <span className="bg-gradient-to-r from-fuchsia-300 via-violet-300 to-indigo-300 bg-clip-text text-transparent">
                  {" "}high-impact{" "}
                </span>
                MVP systems.
              </h1>
              <div className="pointer-events-none mt-6 h-px max-w-4xl bg-gradient-to-r from-fuchsia-500/0 via-fuchsia-400/35 to-indigo-400/0" />
            </div>
            <p className="max-w-2xl text-lg text-zinc-200/80">
              We help UK SMEs ship MVPs fast — clean UX, scalable architecture, and real-world delivery.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              to="/services"
              className="cm-btn-primary"
            >
              Our Services
            </Link>
            <Link
              to="/work"
              className="cm-btn-secondary"
            >
              View Work
            </Link>
          </div>
        </Reveal>

        <div className="grid gap-6 pt-4">
          <Reveal>
            <div className="grid gap-4">
              <div className="text-xs tracking-[0.25em] text-zinc-300">TRUSTED DELIVERY</div>
              <div className="flex flex-wrap gap-2">
                <span className="cm-chip">MVP builds</span>
                <span className="cm-chip">Internal tools</span>
                <span className="cm-chip">Automation</span>
                <span className="cm-chip">Dashboards</span>
                <span className="cm-chip">Design + Dev</span>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-3">
            <Reveal>
              <div className="cm-card cm-card-hover p-6">
                <div className="text-xs text-zinc-400">Typical timeline</div>
                <div className="mt-2 text-3xl font-semibold">2–6w</div>
                <div className="mt-2 text-sm text-zinc-300">From kickoff to a usable MVP.</div>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="cm-card cm-card-hover p-6">
                <div className="text-xs text-zinc-400">Focus</div>
                <div className="mt-2 text-3xl font-semibold">Outcomes</div>
                <div className="mt-2 text-sm text-zinc-300">Less busywork. More shipped value.</div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="cm-card cm-card-hover p-6">
                <div className="text-xs text-zinc-400">Stack</div>
                <div className="mt-2 text-3xl font-semibold">MERN</div>
                <div className="mt-2 text-sm text-zinc-300">Production-ready foundations from day one.</div>
              </div>
            </Reveal>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <Reveal>
              <div className="cm-card cm-card-hover p-6">
                <div className="text-xs text-zinc-400">Founder, Retail</div>
                <div className="mt-2 text-sm text-zinc-200">
                  “Fast, clean delivery. The MVP shipped on schedule and didn’t fall apart in production.”
                </div>
                <div className="mt-4 text-xs tracking-[0.25em] text-zinc-400">LOREM / UK</div>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="cm-card cm-card-hover p-6">
                <div className="text-xs text-zinc-400">Ops Lead, Services</div>
                <div className="mt-2 text-sm text-zinc-200">
                  “Automation saved hours weekly. The internal dashboard gave us visibility instantly.”
                </div>
                <div className="mt-4 text-xs tracking-[0.25em] text-zinc-400">LOREM / UK</div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="cm-card cm-card-hover p-6">
                <div className="text-xs text-zinc-400">Director, SME</div>
                <div className="mt-2 text-sm text-zinc-200">
                  “Clear comms, strong design sense, and solid engineering. Would 100% repeat.”
                </div>
                <div className="mt-4 text-xs tracking-[0.25em] text-zinc-400">LOREM / UK</div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.08}>
            <div className="cm-card cm-card-hover overflow-hidden">
              <div className="grid gap-0 lg:grid-cols-2">
                <div className="relative aspect-[16/9] lg:aspect-auto">
                  <ParallaxMedia
                    alt="Featured outcome"
                    className="h-full w-full object-cover opacity-85"
                    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="text-xs tracking-[0.25em] text-zinc-300">FEATURED OUTCOME</div>
                  <div className="mt-2 text-lg font-semibold">A clean MVP that your team can actually run</div>
                  <div className="mt-2 text-sm text-zinc-300">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. We focus on the first version that delivers value.
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="cm-chip">Auth</span>
                    <span className="cm-chip">Admin</span>
                    <span className="cm-chip">Lead capture</span>
                    <span className="cm-chip">Deploy</span>
                  </div>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <Link to="/work" className="cm-btn-secondary">See case studies</Link>
                    <Link to="/contact" className="cm-btn-primary">Start a project</Link>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="grid gap-6 pt-10 sm:grid-cols-3">
          <Reveal>
            <div className="cm-card cm-card-hover p-6">
              <div className="text-sm font-semibold">Build</div>
              <div className="mt-2 text-sm text-zinc-300">From idea to MVP without the chaos.</div>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="cm-card cm-card-hover p-6">
              <div className="text-sm font-semibold">Ship</div>
              <div className="mt-2 text-sm text-zinc-300">Fast iterations. Clear milestones.</div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="cm-card cm-card-hover p-6">
              <div className="text-sm font-semibold">Scale</div>
              <div className="mt-2 text-sm text-zinc-300">MERN foundations that grow with you.</div>
            </div>
          </Reveal>
        </div>

        <div className="grid gap-6 pt-14">
          <Reveal>
            <h2 className="text-2xl font-semibold">How we work</h2>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-3">
            <Reveal>
              <div className="cm-card cm-card-hover p-6">
                <div className="text-sm font-semibold">01. Discovery</div>
                <div className="mt-2 text-sm text-zinc-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="cm-card cm-card-hover p-6">
                <div className="text-sm font-semibold">02. Build</div>
                <div className="mt-2 text-sm text-zinc-300">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="cm-card cm-card-hover p-6">
                <div className="text-sm font-semibold">03. Launch</div>
                <div className="mt-2 text-sm text-zinc-300">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
}
