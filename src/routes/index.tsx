import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ParallaxSection, Reveal } from "@/components/Parallax";
import {
  Fence,
  Hammer,
  Phone,
  Ruler,
  ShieldCheck,
  Timer,
  Truck,
  Wallet,
  Mail,
  MapPin,
} from "lucide-react";
import heroFence from "@/assets/hero-fence.jpg";
import crewImg from "@/assets/parallax-crew.jpg";
import woodImg from "@/assets/hero-fence.jpg";
import aluminumImg from "@/assets/fence-aluminum.jpg";
import vinylImg from "@/assets/fence-vinyl.jpg";
import chainlinkImg from "@/assets/fence-chainlink.jpg";
import residentialImg from "@/assets/service-residential.jpg";
import commercialImg from "@/assets/service-commercial.jpg";
import diyImg from "@/assets/service-diy.jpg";
import railingImg from "@/assets/service-railing.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Affordable Fence | Wood, Vinyl & Chain Link Installation" },
      {
        name: "description",
        content:
          "Affordable Fence builds wood, vinyl, aluminum and chain link fences with free estimates, fast installs and a 10-year workmanship warranty.",
      },
      { property: "og:title", content: "Affordable Fence | Fence Installation Done Right" },
      {
        property: "og:description",
        content:
          "Free estimates, honest pricing and durable fences installed in days, not weeks. Serving homes and businesses.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  {
    title: "Wood Privacy Fence",
    image: woodImg,
    copy: "Cedar and pressure-treated panels built to stand straight for decades.",
    price: "from $28 / ft",
  },
  {
    title: "Vinyl Fence",
    image: vinylImg,
    copy: "Zero painting, zero rot. A clean white line around your yard, forever.",
    price: "from $34 / ft",
  },
  {
    title: "Aluminum & Ornamental",
    image: aluminumImg,
    copy: "Powder-coated steel and aluminum for pools, gardens and front yards.",
    price: "from $42 / ft",
  },
  {
    title: "Chain Link",
    image: chainlinkImg,
    copy: "The most affordable way to secure a property line, pet run or lot.",
    price: "from $16 / ft",
  },
];

const fencingTypes = [
  {
    title: "Residential Fence",
    image: residentialImg,
    copy: "Durable residential fences that enhance security and keep your family and pets safe.",
    points: ["Privacy & picket styles", "Pet-safe gates", "HOA-friendly designs"],
  },
  {
    title: "Commercial Fence",
    image: commercialImg,
    copy: "Protect your commercial property from theft and trespassers with well-built, tasteful fencing.",
    points: ["Adequate height & barbed wire", "Heavy-duty materials", "Custom access gates"],
  },
  {
    title: "DIY Fencing",
    image: diyImg,
    copy: "Top-quality gates, hardware, posts and concrete so you can install your own fence with ease.",
    points: ["Materials by the panel", "Hardware & concrete", "Install guidance included"],
  },
  {
    title: "Railings",
    image: railingImg,
    copy: "High-quality railings built to your requirements and installed wherever you need them.",
    points: ["Porch & step railings", "Aluminum and wrought iron", "Code-compliant heights"],
  },
];


const steps = [
  { icon: Phone, title: "Call or request", copy: "Tell us the property line and what you need." },
  { icon: Ruler, title: "Free measure", copy: "We measure on site and quote the same day." },
  { icon: Hammer, title: "Install", copy: "Most residential fences finished in 1–2 days." },
  { icon: ShieldCheck, title: "Warranty", copy: "10-year workmanship warranty in writing." },
];

const promises = [
  { icon: Wallet, title: "Honest pricing", copy: "Per-foot pricing with no surprise line items." },
  { icon: Timer, title: "On schedule", copy: "We show up on the day we promised. Every time." },
  { icon: Truck, title: "Own crews", copy: "No subcontractors — our installers, our standards." },
];

function Index() {
  return (
    <main className="bg-background text-foreground">
      {/* Hero */}
      <ParallaxSection
        image={heroFence}
        speed={0.28}
        className="flex min-h-screen items-center justify-center px-6"
      >
        <div className="mx-auto max-w-3xl py-32 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-on-image/30 bg-on-image/10 px-4 py-1.5 text-xs font-medium tracking-[0.2em] text-on-image uppercase backdrop-blur-sm">
              <Fence className="size-4" /> Licensed &amp; insured
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-6 text-5xl leading-[1.05] font-bold tracking-tight text-on-image sm:text-7xl">
              Affordable Fence
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mx-auto mt-6 max-w-xl text-lg text-on-image-muted">
              Strong, good-looking fences at a fair price. Free estimates, fast installs, and a
              10-year workmanship warranty on every job.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Button variant="hero" size="xl" asChild>
                <a href="#quote">Get a free estimate</a>
              </Button>
              <Button variant="onImage" size="xl" asChild>
                <a href="#services">See fence types</a>
              </Button>
            </div>
          </Reveal>
        </div>
      </ParallaxSection>

      {/* Stats */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-14 md:grid-cols-4">
          {[
            ["2,400+", "Fences installed"],
            ["18 yrs", "In business"],
            ["1–2 days", "Typical install"],
            ["10 yrs", "Workmanship warranty"],
          ].map(([big, small], i) => (
            <Reveal key={big} delay={i * 80} className="text-center">
              <div className="text-3xl font-bold text-primary md:text-4xl">{big}</div>
              <div className="mt-1 text-sm text-muted-foreground">{small}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <p className="text-sm font-semibold tracking-[0.2em] text-accent uppercase">
            What we build
          </p>
          <h2 className="mt-3 max-w-2xl text-4xl font-bold tracking-tight">
            Every fence style, installed by our own crews
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 100}>
              <article className="group h-full overflow-hidden rounded-xl border border-border bg-card shadow-[var(--shadow-card)] transition-transform duration-300 hover:-translate-y-1">
                <div className="overflow-hidden">
                  <img
                    src={s.image}
                    alt={`${s.title} installed by Affordable Fence`}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-xl font-semibold">{s.title}</h3>
                    <span className="text-sm font-medium text-primary">{s.price}</span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{s.copy}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Parallax break */}
      <ParallaxSection image={crewImg} speed={0.2} className="px-6 py-32">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <h2 className="text-4xl font-bold tracking-tight text-on-image sm:text-5xl">
              Posts set in concrete. Lines set with a laser.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-on-image-muted">
              We dig below the frost line, brace every post overnight and come back to hang panels
              only when the footing is solid. That is why our fences stay straight.
            </p>
          </Reveal>
        </div>
      </ParallaxSection>

      {/* Process */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <h2 className="text-center text-4xl font-bold tracking-tight">How it works</h2>
        </Reveal>
        <div className="mt-14 grid gap-8 md:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 100}>
              <div className="relative rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
                <span className="absolute -top-3 left-6 rounded-full bg-[image:var(--gradient-primary)] px-2.5 py-0.5 text-xs font-bold text-primary-foreground">
                  {i + 1}
                </span>
                <s.icon className="size-6 text-primary" />
                <h3 className="mt-4 font-semibold">{s.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{s.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Promises */}
      <section className="bg-secondary/60 py-24">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-3">
          {promises.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <div className="flex gap-4">
                <p.icon className="mt-1 size-6 shrink-0 text-accent" />
                <div>
                  <h3 className="font-semibold">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.copy}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <ParallaxSection image={woodImg} speed={0.18} className="px-6 py-28">
        <div id="quote" className="mx-auto max-w-2xl text-center">
          <Reveal>
            <h2 className="text-4xl font-bold tracking-tight text-on-image">
              Free estimate, no pressure
            </h2>
            <p className="mt-4 text-on-image-muted">
              Send us your address and fence length — you'll have a written quote within 24 hours.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button variant="hero" size="xl" asChild>
                <a href="tel:+18005553362">
                  <Phone /> (800) 555-FENCE
                </a>
              </Button>
              <Button variant="onImage" size="xl" asChild>
                <a href="mailto:quotes@affordablefence.com">
                  <Mail /> Email us
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </ParallaxSection>

      <footer className="border-t border-border bg-card">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 text-sm text-muted-foreground sm:flex-row">
          <span className="flex items-center gap-2 font-semibold text-foreground">
            <Fence className="size-4 text-primary" /> Affordable Fence
          </span>
          <span className="flex items-center gap-2">
            <MapPin className="size-4" /> Serving the tri-county area
          </span>
          <span>© {new Date().getFullYear()} Affordable Fence. All rights reserved.</span>
        </div>
      </footer>
    </main>
  );
}
