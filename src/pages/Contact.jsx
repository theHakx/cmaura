import { useState } from "react";
import Reveal from "../components/motion/Reveal";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const onChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: "loading", message: "" });

    try {
      const res = await fetch("http://localhost:5000/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setStatus({ state: "error", message: data.message || "Failed to send" });
        return;
      }

      setStatus({ state: "success", message: "Message sent" });
      setForm({ name: "", email: "", company: "", phone: "", message: "" });
    } catch {
      setStatus({ state: "error", message: "Failed to send" });
    }
  };

  return (
    <div className="py-16 sm:py-24">
      <div className="grid gap-10">
        <Reveal>
          <div className="grid gap-6">
            <div className="grid gap-3">
              <div className="text-xs tracking-[0.25em] text-zinc-400">CONTACT</div>
              <h1 className="text-5xl font-semibold leading-[1.05] sm:text-6xl">
                Let’s build
                <br />
                something real.
              </h1>
              <p className="max-w-2xl text-zinc-200/80">
                Tell us what you’re trying to achieve. We’ll respond with focused questions and a practical plan — scope, timeline, and the fastest path to results.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="cm-chip">24–48h response</span>
              <span className="cm-chip">MVPs</span>
              <span className="cm-chip">Automation</span>
              <span className="cm-chip">Dashboards & BI</span>
              <span className="cm-chip">AI features</span>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          <Reveal>
            <div className="cm-card cm-card-hover p-6">
              <div className="text-xs tracking-[0.25em] text-zinc-400">CLIVE HAKAPERI</div>
              <div className="mt-3 grid gap-2 text-sm text-zinc-300">
                <a className="text-zinc-100 hover:underline" href="tel:+263788710804">
                  +263 788 710 804
                </a>
                <a className="text-zinc-100 hover:underline" href="mailto:clive.hakaperi@cmaura.com">
                  clive.hakaperi@cmaura.com
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="cm-card cm-card-hover p-6">
              <div className="text-xs tracking-[0.25em] text-zinc-400">MUNESU CHITAVA</div>
              <div className="mt-3 grid gap-2 text-sm text-zinc-300">
                <a className="text-zinc-100 hover:underline" href="tel:+447727057645">
                  +44 7727 057645
                </a>
                <a className="text-zinc-100 hover:underline" href="mailto:munesu.chitava@cmaura.com">
                  munesu.chitava@cmaura.com
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal delay={0.05}>
            <form onSubmit={onSubmit} className="cm-card cm-card-hover grid gap-4 p-6">
              <div>
                <div className="text-sm font-semibold">Send a message</div>
                <div className="mt-1 text-sm text-zinc-200/70">
                  Give us the context and we’ll handle the structure.
                </div>
              </div>
              <input
                className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-500 focus:border-fuchsia-300/60"
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={onChange}
                required
              />
              <input
                className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-500 focus:border-fuchsia-300/60"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={onChange}
                required
              />
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-500 focus:border-fuchsia-300/60"
                  name="company"
                  placeholder="Company (optional)"
                  value={form.company}
                  onChange={onChange}
                />
                <input
                  className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-500 focus:border-fuchsia-300/60"
                  name="phone"
                  placeholder="Phone (optional)"
                  value={form.phone}
                  onChange={onChange}
                />
              </div>
              <textarea
                className="min-h-[160px] w-full resize-none rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-500 focus:border-fuchsia-300/60"
                name="message"
                placeholder="What are you building? What’s the goal? What’s slowing you down?"
                value={form.message}
                onChange={onChange}
                required
              />

              <button
                disabled={status.state === "loading"}
                className="cm-btn-primary disabled:opacity-60"
                type="submit"
              >
                {status.state === "loading" ? "Sending..." : "Send"}
              </button>

              {status.state !== "idle" ? (
                <div
                  className={`text-sm ${
                    status.state === "success" ? "text-emerald-300" : "text-rose-300"
                  }`}
                >
                  {status.message}
                </div>
              ) : null}
            </form>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="cm-card cm-card-hover p-6">
              <div className="text-sm font-semibold">What happens next</div>
              <div className="mt-2 text-sm text-zinc-200/70">
                Typical response time: <span className="font-semibold text-zinc-100">24–48 hours</span>.
              </div>

              <div className="mt-4 grid gap-3">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4 backdrop-blur-xl">
                  <div className="text-xs tracking-[0.25em] text-zinc-400">WE ASK</div>
                  <div className="mt-2 grid gap-2 text-sm text-zinc-300">
                    <div>What does success look like?</div>
                    <div>What’s the deadline or pressure point?</div>
                    <div>What data and tools do you already use?</div>
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4 backdrop-blur-xl">
                  <div className="text-xs tracking-[0.25em] text-zinc-400">YOU GET</div>
                  <div className="mt-2 grid gap-2 text-sm text-zinc-300">
                    <div>Clear scope + milestones</div>
                    <div>Recommended approach (engineering + BI)</div>
                    <div>Timeline and next steps</div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="grid gap-6 pt-6">
          <Reveal>
            <h2 className="text-2xl font-semibold">FAQ</h2>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-3">
            <Reveal>
              <div className="cm-card cm-card-hover p-6">
                <div className="text-sm font-semibold">How fast?</div>
                <div className="mt-2 text-sm text-zinc-300">
                  For most enquiries we reply within 24–48 hours. If it’s urgent, mention the deadline and we’ll prioritise.
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="cm-card cm-card-hover p-6">
                <div className="text-sm font-semibold">What does it cost?</div>
                <div className="mt-2 text-sm text-zinc-300">
                  Pricing depends on scope. We can do fixed-scope MVP builds or ongoing monthly improvements depending on what you need.
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="cm-card cm-card-hover p-6">
                <div className="text-sm font-semibold">Do you maintain?</div>
                <div className="mt-2 text-sm text-zinc-300">
                  Yes. We can support what we ship — monitoring, updates, improvements, and new features as your needs evolve.
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
}
