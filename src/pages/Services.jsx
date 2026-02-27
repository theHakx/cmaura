import Reveal from "../components/motion/Reveal";
import ParallaxMedia from "../components/motion/ParallaxMedia";

export default function Services() {
  return (
    <div className="py-16 sm:py-24">
      <div className="grid gap-10">
        <Reveal>
          <div className="grid gap-6">
            <div className="grid gap-3">
              <div className="text-xs tracking-[0.25em] text-zinc-400">SERVICES</div>
              <h1 className="text-5xl font-semibold leading-[1.05] sm:text-6xl">
                Build faster.
                <br />
                See clearer.
                <br />
                Operate smarter.
              </h1>
              <p className="max-w-2xl text-zinc-200/80">
                We combine modern engineering with business intelligence to remove friction, reveal what matters, and ship systems that teams actually use.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="cm-chip">MVP build</span>
              <span className="cm-chip">Systems & automation</span>
              <span className="cm-chip">Dashboards & BI</span>
              <span className="cm-chip">AI features</span>
              <span className="cm-chip">Integrations</span>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-6 pt-2">
          <Reveal>
            <div className="cm-card cm-card-hover overflow-hidden">
              <div className="relative aspect-[21/9]">
                <ParallaxMedia
                  alt="Systems and strategy"
                  className="h-full w-full object-cover opacity-80"
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=2000&q=80"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/35 to-black/10" />
                <div className="absolute inset-0 p-6 sm:p-10">
                  <div className="max-w-2xl">
                    <div className="text-xs tracking-[0.25em] text-zinc-300/90">THE DIFFERENCE</div>
                    <div className="mt-3 text-2xl font-semibold sm:text-3xl">
                      Not just code.
                      <br />
                      Build decisions.
                    </div>
                    <div className="mt-3 text-sm text-zinc-200/80">
                      Engineering makes it real. Business intelligence makes it right. Together, you get systems that are measurable, maintainable, and actually adopted.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            <Reveal>
              <div className="grid gap-3">
                <div className="text-2xl font-semibold sm:text-3xl">MVPs that turn into products</div>
                <div className="text-sm text-zinc-200/80">
                  You don’t need a perfect first version — you need a working system that proves value, then evolves.
                </div>
                <div className="grid gap-2 text-sm text-zinc-300">
                  <div>
                    <span className="font-semibold text-zinc-100">Problem:</span> ideas stuck in meetings.
                  </div>
                  <div>
                    <span className="font-semibold text-zinc-100">Solution:</span> rapid prototypes, then production-ready builds.
                  </div>
                  <div>
                    <span className="font-semibold text-zinc-100">Outcome:</span> something real in weeks, with a roadmap.
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="cm-chip">UI/UX</span>
                  <span className="cm-chip">API</span>
                  <span className="cm-chip">Auth</span>
                  <span className="cm-chip">Deploy</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="cm-card cm-card-hover overflow-hidden">
                <div className="relative aspect-[16/10]">
                  <ParallaxMedia
                    alt="MVP development"
                    className="h-full w-full object-cover opacity-85"
                    src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1600&q=80"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="text-sm font-semibold">Fast build, strong foundations</div>
                  <div className="mt-2 text-sm text-zinc-300">
                    Clean architecture, good UX, and the essentials you need to keep moving.
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Reveal>
              <div className="cm-card cm-card-hover overflow-hidden">
                <div className="relative aspect-[16/10]">
                  <ParallaxMedia
                    alt="Automation"
                    className="h-full w-full object-cover opacity-85"
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="text-sm font-semibold">Systems & automation</div>
                  <div className="mt-2 text-sm text-zinc-300">
                    Internal tools that cut admin work — approvals, capture, reporting, and integrations.
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="grid gap-3">
                <div className="text-2xl font-semibold sm:text-3xl">Remove friction from operations</div>
                <div className="text-sm text-zinc-200/80">
                  If work lives across spreadsheets, emails, and scattered tools, we unify it into one clear system.
                </div>
                <div className="grid gap-2 text-sm text-zinc-300">
                  <div>
                    <span className="font-semibold text-zinc-100">Automate:</span> routing, approvals, reminders.
                  </div>
                  <div>
                    <span className="font-semibold text-zinc-100">Integrate:</span> payments, email, CRM, and third-party platforms.
                  </div>
                  <div>
                    <span className="font-semibold text-zinc-100">Audit:</span> permissions, logs, and traceability.
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="cm-chip">Dashboards</span>
                  <span className="cm-chip">Workflows</span>
                  <span className="cm-chip">Integrations</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="grid gap-6 pt-6">
          <Reveal>
            <div className="grid gap-2">
              <div className="text-xs tracking-[0.25em] text-zinc-400">PROBLEMS → SOLUTIONS</div>
              <h2 className="text-3xl font-semibold sm:text-4xl">Where we help most</h2>
            </div>
          </Reveal>

          <div className="cm-card cm-card-hover overflow-hidden">
            <div className="grid divide-y divide-white/5">
              <div className="grid gap-2 p-6 sm:grid-cols-12 sm:gap-6">
                <div className="sm:col-span-4">
                  <div className="text-sm font-semibold">No visibility</div>
                  <div className="mt-1 text-sm text-zinc-200/70">You can’t see performance, pipeline, or cost drivers.</div>
                </div>
                <div className="sm:col-span-8">
                  <div className="text-sm text-zinc-300">
                    We define the right KPIs, clean the data, and build dashboards that leaders can trust — so decisions become obvious.
                  </div>
                </div>
              </div>

              <div className="grid gap-2 p-6 sm:grid-cols-12 sm:gap-6">
                <div className="sm:col-span-4">
                  <div className="text-sm font-semibold">Manual operations</div>
                  <div className="mt-1 text-sm text-zinc-200/70">Too many repetitive steps, too many handoffs.</div>
                </div>
                <div className="sm:col-span-8">
                  <div className="text-sm text-zinc-300">
                    We build internal systems and automation that reduce admin overhead, errors, and turnaround time.
                  </div>
                </div>
              </div>

              <div className="grid gap-2 p-6 sm:grid-cols-12 sm:gap-6">
                <div className="sm:col-span-4">
                  <div className="text-sm font-semibold">AI without outcomes</div>
                  <div className="mt-1 text-sm text-zinc-200/70">You want AI help, but not a risky experiment.</div>
                </div>
                <div className="sm:col-span-8">
                  <div className="text-sm text-zinc-300">
                    We add practical AI features (summaries, extraction, search, copilots) with clear value, guardrails, and measurable results.
                  </div>
                </div>
              </div>

              <div className="grid gap-2 p-6 sm:grid-cols-12 sm:gap-6">
                <div className="sm:col-span-4">
                  <div className="text-sm font-semibold">Complex delivery</div>
                  <div className="mt-1 text-sm text-zinc-200/70">Vendors, platforms, integrations, specialist needs.</div>
                </div>
                <div className="sm:col-span-8">
                  <div className="text-sm text-zinc-300">
                    We use our knowledge and connections to source the right tooling and coordinate the moving parts — so projects don’t stall.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 pt-6">
          <Reveal>
            <h2 className="text-2xl font-semibold">Process</h2>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-4">
            <Reveal>
              <div className="cm-card cm-card-hover p-6">
                <div className="text-xs text-zinc-400">Step 01</div>
                <div className="mt-2 text-sm font-semibold">Discovery</div>
                <div className="mt-2 text-sm text-zinc-300">
                  Map the problem, constraints, and success metrics. Quick alignment on scope and timeline.
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.03}>
              <div className="cm-card cm-card-hover p-6">
                <div className="text-xs text-zinc-400">Step 02</div>
                <div className="mt-2 text-sm font-semibold">Prototype</div>
                <div className="mt-2 text-sm text-zinc-300">
                  Fast UI + flow prototypes to validate direction before heavy build.
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <div className="cm-card cm-card-hover p-6">
                <div className="text-xs text-zinc-400">Step 03</div>
                <div className="mt-2 text-sm font-semibold">Build</div>
                <div className="mt-2 text-sm text-zinc-300">
                  Implement in short cycles with demos, testing, and measurable progress.
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.09}>
              <div className="cm-card cm-card-hover p-6">
                <div className="text-xs text-zinc-400">Step 04</div>
                <div className="mt-2 text-sm font-semibold">Launch</div>
                <div className="mt-2 text-sm text-zinc-300">
                  Deploy, monitor, and refine. Training + handover so your team can run it confidently.
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal>
          <div className="cm-card cm-card-hover overflow-hidden">
            <div className="grid gap-0 sm:grid-cols-12">
              <div className="p-6 sm:col-span-7 sm:p-10">
                <div className="text-xs tracking-[0.25em] text-zinc-400">NEXT STEPS</div>
                <div className="mt-3 text-3xl font-semibold sm:text-4xl">
                  Tell us what’s slowing you down.
                </div>
                <div className="mt-3 max-w-xl text-sm text-zinc-200/80">
                  We’ll respond with a short plan: scope, timeline, and a practical recommendation — including where our engineering, BI, and connections can create the biggest leverage.
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4 backdrop-blur-xl">
                    <div className="text-xs tracking-[0.25em] text-zinc-400">SEND US</div>
                    <div className="mt-2 grid gap-2 text-sm text-zinc-300">
                      <div>What you do + what feels broken</div>
                      <div>Any screenshots/spreadsheets</div>
                      <div>Rough timeline + budget range</div>
                      <div>Who will use the system</div>
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4 backdrop-blur-xl">
                    <div className="text-xs tracking-[0.25em] text-zinc-400">YOU GET</div>
                    <div className="mt-2 grid gap-2 text-sm text-zinc-300">
                      <div>Clear problem breakdown</div>
                      <div>Recommended approach</div>
                      <div>Milestones + timeline</div>
                      <div>Measurable success metrics</div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 text-sm text-zinc-200/80">
                  Typical response time: <span className="font-semibold text-zinc-100">24–48 hours</span>.
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="cm-chip">Discovery call</span>
                  <span className="cm-chip">Proposal</span>
                  <span className="cm-chip">Prototype</span>
                  <span className="cm-chip">Build</span>
                </div>
              </div>

              <div className="relative sm:col-span-5">
                <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/30 to-transparent" />
                <ParallaxMedia
                  alt="Delivery"
                  className="h-full w-full object-cover opacity-80"
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1600&q=80"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
