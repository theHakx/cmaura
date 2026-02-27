import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Reveal from "../components/motion/Reveal";

import talentT1 from "../assets/portfolio/t1.png";
import talentT2 from "../assets/portfolio/t2.png";
import talentSystem from "../assets/portfolio/TalentProfilng system.png";

import secondment1 from "../assets/portfolio/secondment1.jpg";
import secondment2 from "../assets/portfolio/secondment2.jpg";

import shadesRfpLists from "../assets/portfolio/RFP's lists.png";
import shadesCreatedRfp from "../assets/portfolio/created RFP.jpg";
import shadesPublicBid from "../assets/portfolio/public bid.png";
import shadesHomepage from "../assets/portfolio/Homepage.png";
import shadesOverviewAwarded from "../assets/portfolio/Overview awarded.png";
import shadesNotes from "../assets/portfolio/Notes.png";
import shadesGodfreyBid from "../assets/portfolio/godfrey bid.png";
import shadesAnalytics from "../assets/portfolio/Analytics.png";
import shadesAi1 from "../assets/portfolio/AI 1.png";
import shadesAi2 from "../assets/portfolio/AI 2.png";

import ems1 from "../assets/portfolio/ems1.jpg";
import ems2 from "../assets/portfolio/ems2.jpg";
import ems3 from "../assets/portfolio/ems3.jpg";
import ems4 from "../assets/portfolio/ems4.jpg";
import ems5 from "../assets/portfolio/ems5.jpg";

import payrollBankDetails from "../assets/portfolio/Bank Details.png";
import payrollDashboard from "../assets/portfolio/dashboard.png";
import payrollPayrolls from "../assets/portfolio/Payrolls.png";
import payrollPayslip from "../assets/portfolio/payslip.png";

import omnilearn1 from "../assets/portfolio/Omnilearn.jpg";
import omnilearn2 from "../assets/portfolio/Omnilearn2.jpg";

const STACKS = {
  react: { label: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
  node: { label: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
  express: { label: "Express", icon: "https://cdn.simpleicons.org/express/FFFFFF" },
  mongodb: { label: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
  tailwind: {
    label: "Tailwind",
    icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
  },
  sass: { label: "SCSS", icon: "https://cdn.simpleicons.org/sass/CC6699" },
  python: { label: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
  django: { label: "Django", icon: "https://cdn.simpleicons.org/django/092E20" },
  postgresql: {
    label: "PostgreSQL",
    icon: "https://cdn.simpleicons.org/postgresql/4169E1",
  },
  wordpress: {
    label: "WordPress",
    icon: "https://cdn.simpleicons.org/wordpress/21759B",
  },
};

function StackRow({ stack = [] }) {
  if (!stack.length) return null;

  return (
    <div className="mt-4 flex flex-wrap items-center gap-2">
      {stack
        .map((key) => ({ key, ...STACKS[key] }))
        .filter((item) => item.icon)
        .map((item) => (
          <div
            key={item.key}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/25 px-3 py-1 text-xs text-zinc-200/90 backdrop-blur-xl"
            title={item.label}
          >
            <img
              alt=""
              src={item.icon}
              className="h-4 w-4"
              loading="lazy"
              draggable={false}
            />
            <span>{item.label}</span>
          </div>
        ))}
    </div>
  );
}

function PortfolioCard({ title, subtitle, slides, stack }) {
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [alwaysShowControls, setAlwaysShowControls] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const ignoreNextBackdropClick = useRef(false);

  const openLightbox = () => {
    ignoreNextBackdropClick.current = true;
    setIsOpen(true);
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    const media = window.matchMedia("(hover: none)");
    const apply = () => setAlwaysShowControls(media.matches);
    apply();

    if (typeof media.addEventListener === "function") {
      media.addEventListener("change", apply);
      return () => media.removeEventListener("change", apply);
    }

    media.addListener(apply);
    return () => media.removeListener(apply);
  }, []);

  const safeIndex = ((index % slides.length) + slides.length) % slides.length;
  const slide = slides[safeIndex];
  const showControls = alwaysShowControls || hovered;

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const id = window.setTimeout(() => {
      ignoreNextBackdropClick.current = false;
    }, 0);
    return () => window.clearTimeout(id);
  }, [isOpen]);

  return (
    <div>
      <div
        className="cm-card cm-card-hover group cursor-pointer overflow-hidden"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div
          className="relative h-[260px] bg-black/20 sm:h-[320px]"
          onClick={openLightbox}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter") openLightbox();
            if (e.key === " ") {
              e.preventDefault();
              openLightbox();
            }
          }}
        >
          <img
            alt={slide.alt}
            className="h-full w-full object-contain p-3 opacity-95 transition duration-500 group-hover:scale-[1.01]"
            src={slide.src}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

          <div
            className={
              showControls
                ? "absolute inset-x-0 top-0 flex items-center justify-between p-3 opacity-100 transition-opacity duration-200"
                : "absolute inset-x-0 top-0 flex items-center justify-between p-3 opacity-0 transition-opacity duration-200"
            }
          >
            <button
              type="button"
              aria-label="Previous slide"
              className="rounded-lg border border-white/15 bg-black/35 px-3 py-2 text-xs text-white backdrop-blur-xl transition hover:bg-black/55"
              onClick={(e) => {
                e.stopPropagation();
                setIndex((i) => i - 1);
              }}
            >
              Prev
            </button>
            <button
              type="button"
              aria-label="Next slide"
              className="rounded-lg border border-white/15 bg-black/35 px-3 py-2 text-xs text-white backdrop-blur-xl transition hover:bg-black/55"
              onClick={(e) => {
                e.stopPropagation();
                setIndex((i) => i + 1);
              }}
            >
              Next
            </button>
          </div>

          <div
            className={
              showControls
                ? "absolute bottom-0 left-0 right-0 p-4 opacity-100 transition-opacity duration-200"
                : "absolute bottom-0 left-0 right-0 p-4 opacity-0 transition-opacity duration-200"
            }
          >
            <div className="inline-flex rounded-full border border-white/15 bg-black/35 px-3 py-1 text-[11px] text-zinc-100 backdrop-blur-xl">
              {safeIndex + 1}/{slides.length}
            </div>
            <div className="mt-2 text-sm font-semibold text-white">{slide.label}</div>
            <div className="mt-1 text-xs text-zinc-200/80">{slide.description}</div>
          </div>
        </div>

      <div className="p-6">
        <div className="text-xs tracking-[0.25em] text-zinc-400">SYSTEM</div>
        <div className="mt-2 text-lg font-semibold">{title}</div>
        <div className="mt-2 text-sm text-zinc-300">{subtitle}</div>
        <StackRow stack={stack} />
      </div>
      </div>

      {typeof document !== "undefined"
        ? createPortal(
            <AnimatePresence>
              {isOpen ? (
                <motion.div
                  className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 px-6 sm:px-10 lg:px-16 py-2 sm:py-3"
                  role="dialog"
                  aria-modal="true"
                  initial={shouldReduceMotion ? false : { opacity: 0 }}
                  animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1 }}
                  exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0 }}
                  transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() => {
                    if (ignoreNextBackdropClick.current) return;
                    setIsOpen(false);
                  }}
                >
                  <motion.div
                    className="relative rounded-2xl border border-white/15 bg-black/35 p-[10px] shadow-2xl backdrop-blur-xl"
                    initial={
                      shouldReduceMotion
                        ? false
                        : { scale: 0.99, filter: "blur(6px)" }
                    }
                    animate={
                      shouldReduceMotion ? {} : { scale: 1, filter: "blur(0px)" }
                    }
                    exit={
                      shouldReduceMotion
                        ? { opacity: 0 }
                        : { scale: 0.99, opacity: 0, filter: "blur(6px)" }
                    }
                    transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsOpen(false);
                    }}
                  >
                    <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10" />
                    <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-60" />
                    <div
                      className="absolute left-[10px] right-[10px] top-[10px] z-10 flex items-center justify-between"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <button
                        type="button"
                        aria-label="Previous slide"
                        className="rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-white backdrop-blur-xl transition hover:bg-black/60"
                        onClick={(e) => {
                          e.stopPropagation();
                          setIndex((i) => i - 1);
                        }}
                      >
                        Prev
                      </button>

                      <div className="inline-flex rounded-full border border-white/15 bg-black/40 px-3 py-2 text-[11px] text-zinc-100 backdrop-blur-xl">
                        {safeIndex + 1}/{slides.length}
                      </div>

                      <button
                        type="button"
                        aria-label="Next slide"
                        className="rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-white backdrop-blur-xl transition hover:bg-black/60"
                        onClick={(e) => {
                          e.stopPropagation();
                          setIndex((i) => i + 1);
                        }}
                      >
                        Next
                      </button>
                    </div>

                    <img
                      alt={slide.alt}
                      className="max-h-[92vh] w-auto max-w-full select-none object-contain"
                      src={slide.src}
                      loading="lazy"
                      draggable={false}
                    />

                    <div
                      className="absolute bottom-[10px] left-[10px] right-[10px] z-10"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="rounded-xl border border-white/15 bg-black/45 px-4 py-3 text-left backdrop-blur-xl">
                        <div className="text-sm font-semibold text-white">{slide.label}</div>
                        <div className="mt-1 text-xs text-zinc-200/80">{slide.description}</div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ) : null}
            </AnimatePresence>,
            document.body
          )
        : null}
    </div>
  );
}

export default function Work() {
  const systems = useMemo(
    () => [
      {
        title: "Talent Profiling System",
        subtitle:
          "End-to-end profiling workflow with an admin-facing system view and supporting screens.",
        stack: ["mongodb", "express", "react", "node", "tailwind"],
        slides: [
          {
            src: talentSystem,
            alt: "Talent profiling system",
            label: "System overview",
            description: "High-level dashboard/system view for managing profiling workflows.",
          },
          {
            src: talentT1,
            alt: "Talent profiling screen T1",
            label: "Talent screen (T1)",
            description: "Core profiling UI to capture, review, and structure candidate information.",
          },
          {
            src: talentT2,
            alt: "Talent profiling screen T2",
            label: "Talent screen (T2)",
            description: "Secondary view for deeper profiling and evaluation signals.",
          },
        ],
      },
      {
        title: "Secondment Tracking System",
        subtitle:
          "A tracking system for secondments, assignments and placement progress across teams.",
        stack: ["react", "sass", "python", "django"],
        slides: [
          {
            src: secondment1,
            alt: "Secondment tracking screen 1",
            label: "Tracking overview",
            description: "Overview of placements and current statuses across the organisation.",
          },
          {
            src: secondment2,
            alt: "Secondment tracking screen 2",
            label: "Detail view",
            description: "Drilldown into a specific secondment record and its timeline.",
          },
        ],
      },
      {
        title: "Shades RFP System",
        subtitle:
          "RFP discovery, response drafting, and bid tracking with analytics and AI-assisted insights.",
        stack: ["mongodb", "express", "react", "node", "tailwind"],
        slides: [
          {
            src: shadesRfpLists,
            alt: "RFP lists",
            label: "RFP list",
            description: "Browse and manage RFPs across pipeline stages.",
          },
          {
            src: shadesCreatedRfp,
            alt: "Create RFP",
            label: "Create RFP",
            description: "Structured form flow to capture bid requirements and scope.",
          },
          {
            src: shadesPublicBid,
            alt: "Public bid",
            label: "Public bid",
            description: "Public-facing bid view for submission and review.",
          },
          {
            src: shadesHomepage,
            alt: "RFP homepage",
            label: "Homepage",
            description: "High-level snapshot of pipeline health and activity.",
          },
          {
            src: shadesOverviewAwarded,
            alt: "Awarded overview",
            label: "Awarded overview",
            description: "Track awarded bids with summaries and next-step actions.",
          },
          {
            src: shadesNotes,
            alt: "Notes",
            label: "Notes",
            description: "Notes and collaboration layer for bids and RFPs.",
          },
          {
            src: shadesGodfreyBid,
            alt: "Godfrey bid",
            label: "Bid detail",
            description: "Single bid view with context, documentation, and updates.",
          },
          {
            src: shadesAnalytics,
            alt: "Analytics",
            label: "Analytics",
            description: "Performance and conversion analytics across the RFP pipeline.",
          },
          {
            src: shadesAi1,
            alt: "AI insights 1",
            label: "AI insights",
            description: "AI-assisted analysis to improve bid quality and speed.",
          },
          {
            src: shadesAi2,
            alt: "AI insights 2",
            label: "AI suggestions",
            description: "Recommendations and drafting support for RFP responses.",
          },
        ],
      },
      {
        title: "Employee Management System",
        subtitle:
          "Employee records, admin dashboard and operational workflows in one internal tool.",
        stack: ["react", "sass", "postgresql",'node','express'],
        slides: [
          {
            src: ems1,
            alt: "Employee management system 1",
            label: "Dashboard",
            description: "Operational overview of key employee and admin metrics.",
          },
          {
            src: ems2,
            alt: "Employee management system 2",
            label: "Employee records",
            description: "Manage employee records and profile detail views.",
          },
          {
            src: ems3,
            alt: "Employee management system 3",
            label: "Workflow",
            description: "Internal workflow screens for approvals and administration.",
          },
          {
            src: ems4,
            alt: "Employee management system 4",
            label: "Operations",
            description: "Daily operational views to support team execution.",
          },
          {
            src: ems5,
            alt: "Employee management system 5",
            label: "Reporting",
            description: "Reporting and audit-friendly summaries.",
          },
        ],
      },
      {
        title: "Payroll System",
        subtitle:
          "Payroll processing workflow with employee banking details, payslips, and operational dashboards.",
        stack: ["react", "node", "tailwind", "postgresql"],
        slides: [
          {
            src: payrollDashboard,
            alt: "Payroll system dashboard",
            label: "Dashboard",
            description: "High-level view of payroll status, totals, and key administrative actions.",
          },
          {
            src: payrollBankDetails,
            alt: "Employee bank details",
            label: "Bank details",
            description: "Capture and manage employee banking details for secure payment processing.",
          },
          {
            src: payrollPayrolls,
            alt: "Payrolls list",
            label: "Payroll runs",
            description: "Payroll run listing to review totals, validate entries, and track processing progress.",
          },
          {
            src: payrollPayslip,
            alt: "Payslip",
            label: "Payslip",
            description: "Generated payslip view ready for distribution and record-keeping.",
          },
        ],
      },
      {
        title: "Omnilearn",
        subtitle:
          "Learning platform UI patterns and content workflows for an online course experience.",
        stack: ["wordpress"],
        slides: [
          {
            src: omnilearn1,
            alt: "Omnilearn screen 1",
            label: "Learning overview",
            description: "Course discovery and learning overview experience.",
          },
          {
            src: omnilearn2,
            alt: "Omnilearn screen 2",
            label: "Course detail",
            description: "Course detail and progression UI.",
          },
        ],
      },
    ],
    []
  );

  return (
    <div className="py-16 sm:py-24">
      <div className="grid gap-10">
        <Reveal>
          <div className="grid gap-4">
            <h1 className="text-4xl font-semibold">Work</h1>
            <p className="max-w-2xl text-zinc-200/80">
              A selection of systems we’ve shipped — built to reduce operational friction, improve decision-making, and turn workflows into measurable outcomes.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {systems.map((system, i) => (
            <Reveal key={system.title} delay={i % 2 === 0 ? 0 : 0.05}>
              <PortfolioCard
                title={system.title}
                subtitle={system.subtitle}
                slides={system.slides}
                stack={system.stack}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
