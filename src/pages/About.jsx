import Reveal from "../components/motion/Reveal";

import clive from "../assets/businessOwners/clive.jpg";
import munesu from "../assets/businessOwners/munesu.jpeg";

export default function About() {
  return (
    <div className="py-16 sm:py-24">
      <div className="grid gap-10">
        <Reveal>
          <div className="grid gap-4">
            <h1 className="text-4xl font-semibold">About</h1>
            <p className="max-w-2xl text-zinc-200/80">
              CMaura is Clive + Munesu + aura — we design and build modern systems for businesses that want speed, clarity, and real results.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6">
          <Reveal>
            <div className="cm-card cm-card-hover p-6">
              <div className="text-sm font-semibold">What we’re about</div>
              <p className="mt-3 text-sm text-zinc-300">
                We build systems that remove friction: internal tools, dashboards, workflow automation, and AI-powered features that make teams faster.
              </p>
              <p className="mt-3 text-sm text-zinc-300">
                Our style is minimal on the surface, serious under the hood — clear UX, reliable engineering, and an obsessive focus on shipping.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            <Reveal>
              <div className="cm-card cm-card-hover overflow-hidden">
                <div className="relative aspect-[4/3]">
                  <img
                    alt="Clive Hakaperi"
                    className="h-full w-full object-cover opacity-90"
                    src={clive}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="text-xs tracking-[0.25em] text-zinc-400">FOUNDER</div>
                  <div className="mt-2 text-lg font-semibold">Clive Hakaperi</div>
                  <div className="mt-1 text-sm text-zinc-200/80">
                    Systems developer specialising in MERN stack + AI.
                  </div>
                  <div className="mt-3 text-sm text-zinc-300">
                    I hold a Computer Science degree obtained in China and have proven experience delivering production systems for reputable organisations — including Econet, where I currently work.
                  </div>
                  <div className="mt-3 text-sm text-zinc-300">
                    My focus is building modern systems end-to-end — from product UX to scalable backends — and turning AI into practical features (automation, extraction, search, copilots) that actually ship.
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="cm-card cm-card-hover overflow-hidden">
                <div className="relative aspect-[4/3]">
                  <img
                    alt="Munesu Chitava"
                    className="h-full w-full object-cover opacity-90"
                    src={munesu}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="text-xs tracking-[0.25em] text-zinc-400">CO-FOUNDER</div>
                  <div className="mt-2 text-lg font-semibold">Munesu Chitava</div>
                  <div className="mt-1 text-sm text-zinc-200/80">
                    Business intelligence officer with strong grounding in marketing, economics, and business.
                  </div>
                  <div className="mt-3 text-sm text-zinc-300">
                    I bridge strategy and execution — translating business goals into actionable insight and clear priorities.
                  </div>
                  <div className="mt-3 text-sm text-zinc-300">
                    With a solid understanding of marketing, economics, and business (and hands-on exposure to logistics), I help shape what we build around real market context, measurable performance, and operational efficiency.
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="grid gap-6 pt-6">
          <Reveal>
            <h2 className="text-2xl font-semibold">What you can expect</h2>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-3">
            <Reveal>
              <div className="cm-card cm-card-hover p-6">
                <div className="text-sm font-semibold">Clarity</div>
                <div className="mt-2 text-sm text-zinc-300">
                  Crisp scopes, simple UX, and documentation that keeps everyone aligned.
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="cm-card cm-card-hover p-6">
                <div className="text-sm font-semibold">Momentum</div>
                <div className="mt-2 text-sm text-zinc-300">
                  Fast delivery cycles with weekly progress you can actually see.
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="cm-card cm-card-hover p-6">
                <div className="text-sm font-semibold">Durability</div>
                <div className="mt-2 text-sm text-zinc-300">
                  Clean architecture, strong security basics, and maintainable code.
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 pt-6">
          <Reveal>
            <div className="cm-card cm-card-hover p-6">
              <div className="text-sm font-semibold">What we build</div>
              <div className="mt-3 grid gap-2 text-sm text-zinc-300">
                <div>Dashboards and admin systems</div>
                <div>Workflow automation and integrations</div>
                <div>Client portals and internal tools</div>
                <div>AI features: summarisation, search, extraction, copilots</div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="cm-card cm-card-hover p-6">
              <div className="text-sm font-semibold">How we work</div>
              <div className="mt-3 grid gap-2 text-sm text-zinc-300">
                <div>Discovery and rapid prototyping</div>
                <div>Build, test, and iterate in short cycles</div>
                <div>Ship with analytics and feedback loops</div>
                <div>Support and improve what’s live</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
