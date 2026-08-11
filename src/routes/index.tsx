import { useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
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
  Clock,
} from "lucide-react";
import heroFence from "@/assets/hero-fence.jpg";
import crewImg from "@/assets/parallax-crew.jpg";
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
    image: heroFence,
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
];function ContactForm() {
  useEffect(() => {
    const existing = document.querySelector(
      'script[src="https://link.kdlead.com/js/form_embed.js"]'
    );
    if (existing) existing.remove();

    const script = document.createElement("script");
    script.src = "https://link.kdlead.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const s = document.querySelector(
        'script[src="https://link.kdlead.com/js/form_embed.js"]'
      );
      if (s) s.remove();
    };
  }, []);

  return (
    <div className="w-full rounded-xl bg-background p-4">
      <iframe
        src="https://link.kdlead.com/widget/form/Kh1FyIs2j9geLQbuwWxd"
        style={{ width: "100%", height: "904px", border: "none", borderRadius: "8px" }}
        id="inline-Kh1FyIs2j9geLQbuwWxd"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Affordable Fence"
        data-height="904"
        data-layout-iframe-id="inline-Kh1FyIs2j9geLQbuwWxd"
        data-form-id="Kh1FyIs2j9geLQbuwWxd"
        title="Affordable Fence"
      />
    </div>
  );
}

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
                <a href="#contact">Get a free estimate</a>
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

      {/* Fencing types / services */}
      <section id="services-offered" className="bg-secondary/40 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="text-sm font-semibold tracking-[0.2em] text-accent uppercase">
              Our services
            </p>
            <h2 className="mt-3 max-w-2xl text-4xl font-bold tracking-tight">
              Residential, commercial, DIY and railings
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Full-service fence installation for homes and businesses — plus materials if you would
              rather build it yourself.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {fencingTypes.map((t, i) => (
              <Reveal key={t.title} delay={i * 100}>
                <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-[var(--shadow-card)] transition-transform duration-300 hover:-translate-y-1">
                  <img
                    src={t.image}
                    alt={`${t.title} installation by Affordable Fence`}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="h-44 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-lg font-semibold">{t.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{t.copy}</p>
                    <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
                      {t.points.map((p) => (
                        <li key={p} className="flex items-start gap-2">
                          <ShieldCheck className="mt-0.5 size-4 shrink-0 text-primary" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
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
      <section id="how-it-works" className="mx-auto max-w-6xl px-6 py-24">
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

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-4xl px-6 py-24">
        <Reveal>
          <p className="text-center text-sm font-semibold tracking-[0.2em] text-accent uppercase">
            Got Questions?
          </p>
          <h2 className="mt-3 text-center text-4xl font-bold tracking-tight">
            Frequently Asked Questions
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {[
            {
              q: "How fast can you install a fence?",
              a: "Most residential fences take 1–2 days once posts are set in concrete.",
            },
            {
              q: "Do you offer free on-site estimates?",
              a: "Yes! We measure your property line and provide a clear written quote within 24 hours.",
            },
            {
              q: "What warranty do you provide?",
              a: "We back every installation with a written 10-year workmanship warranty.",
            },
            {
              q: "Do you handle HOA approvals and permits?",
              a: "Yes, we help with permit filings and offer HOA-compliant fence designs.",
            },
          ].map((faq, i) => (
            <Reveal key={faq.q} delay={i * 80}>
              <div className="h-full rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
                <h3 className="font-semibold text-foreground">{faq.q}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{faq.a}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-secondary/40 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="text-center text-sm font-semibold tracking-[0.2em] text-accent uppercase">
              Get in Touch
            </p>
            <h2 className="mt-3 text-center text-4xl font-bold tracking-tight">
              Request Your Free Estimate
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
              Fill out the form below and our team will get back to you within 24 hours with a custom quote.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-8 lg:grid-cols-12">
            {/* Contact Info */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6 rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
              <div>
                <h3 className="text-2xl font-bold tracking-tight">Contact Information</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Have questions about your project or need an urgent estimate? Reach out to us directly.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Phone className="size-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Phone</h4>
                    <a href="tel:+13158563323" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      315-856-3323
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Mail className="size-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Email</h4>
                    <a href="mailto:quotes@affordablefence.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      quotes@affordablefence.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <MapPin className="size-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Address</h4>
                    <p className="text-sm text-muted-foreground">
                      36 Helbock Dr, Phoenix, NY 13135
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Clock className="size-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Working Hours</h4>
                    <p className="text-sm text-muted-foreground">
                      Mon – Sat: 7:00 AM – 6:00 PM
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-accent/10 border border-accent/20 p-4 text-xs font-medium text-accent flex items-center gap-2">
                <ShieldCheck className="size-4 shrink-0" />
                Licensed, Bonded &amp; Insured · 10-Year Warranty
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7 rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <ParallaxSection image={heroFence} speed={0.18} className="px-6 py-28">
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
                <a href="tel:+13158563323">
                  <Phone /> 315-856-3323
                </a>
              </Button>
              <Button variant="onImage" size="xl" asChild>
                <a href="#contact">
                  <Mail /> Fill Out Estimate Form
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </ParallaxSection>

      <footer className="border-t border-border bg-card">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 text-sm text-muted-foreground sm:flex-row">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <span className="flex items-center gap-2 font-semibold text-foreground">
              <Fence className="size-4 text-primary" /> Affordable Fence
            </span>
            <span className="hidden sm:inline text-border">•</span>
            <span className="flex items-center gap-2">
              <MapPin className="size-4 text-primary" /> 36 Helbock Dr, Phoenix, NY 13135
            </span>
          </div>

          <div className="flex items-center gap-6">
            <Link to="/terms" className="hover:text-primary transition-colors">
              Terms &amp; Conditions
            </Link>
            <Link to="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <span>© {new Date().getFullYear()} Affordable Fence.</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
