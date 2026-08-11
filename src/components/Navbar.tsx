import { useState, useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";
import { Fence, Phone, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Fence Types", href: "/#services" },
  { label: "Services", href: "/#services-offered" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
];

// Exact Supaste corner SVG — fills the gap between pill and viewport top
function CornerLeft() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        top: 0,
        left: -20,
        width: 20,
        height: 20,
        overflow: "visible",
        flexShrink: 0,
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        overflow="visible"
        style={{ width: 20, height: 20 }}
      >
        <path d="M 20 0 L 0 0 C 11.046 0 20 8.954 20 20 Z" fill="rgb(0,0,0)" />
      </svg>
    </div>
  );
}

function CornerRight() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        top: 0,
        right: -20,
        width: 20,
        height: 20,
        overflow: "visible",
        flexShrink: 0,
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        overflow="visible"
        style={{ width: 20, height: 20 }}
      >
        <path d="M 0 0 L 20 0 C 8.954 0 0 8.954 0 20 Z" fill="rgb(0,0,0)" />
      </svg>
    </div>
  );
}

export function Navbar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section via IntersectionObserver — re-runs on every route change
  useEffect(() => {
    // Non-home pages: no active highlight
    if (pathname !== "/") {
      setActiveHref("");
      return;
    }

    // Home page: start with Home active
    setActiveHref(window.scrollY < 80 ? "/" : "");

    const sectionIds = navLinks
      .filter((l) => l.href.startsWith("/#"))
      .map((l) => l.href.slice(2)); // "/#services" → "services"

    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveHref(`/#${id}`);
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    const onScroll = () => {
      if (window.scrollY < 80) setActiveHref("/");
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observers.forEach((o) => o.disconnect());
      window.removeEventListener("scroll", onScroll);
    };
  }, [pathname]); // re-runs when route changes

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        display: "flex",
        justifyContent: "center",
      }}
    >
      {/* Main nav pill — exact Supaste structure */}
      <nav
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 30,
          padding: 10,
          backgroundColor: "rgb(0,0,0)",
          borderBottomLeftRadius: 18,
          borderBottomRightRadius: 18,
          boxShadow: scrolled
            ? "0 6px 32px rgba(0,0,0,0.8)"
            : "0 4px 20px rgba(0,0,0,0.6)",
          transition: "box-shadow 0.3s ease",
        }}
      >
        {/* Corner decoration left — the quarter-circle that "connects" to top */}
        <CornerLeft />

        {/* Content row */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 40,
            maxWidth: 1200,
          }}
        >
          {/* LEFT: Logo */}
          <a
            href="/"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              textDecoration: "none",
              flexShrink: 0,
            }}
          >
            {/* App icon — 30×30 rounded square with gradient */}
            <span
              style={{
                width: 30,
                height: 30,
                borderRadius: 8,
                background:
                  "linear-gradient(135deg, #5b9cf6 0%, #7b6cf6 50%, #e879b9 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                boxShadow: "0 2px 10px rgba(91,156,246,0.45)",
              }}
            >
              <Fence
                style={{ width: 16, height: 16, color: "white" }}
                strokeWidth={2.5}
              />
            </span>
            {/* Brand name — Inter Display SemiBold, -0.02em tracking */}
            <span
              style={{
                fontFamily:
                  '"Inter Display", "Inter", -apple-system, sans-serif',
                fontSize: 15,
                fontWeight: 600,
                letterSpacing: "-0.02em",
                color: "rgb(255,255,255)",
                whiteSpace: "nowrap",
              }}
            >
              Affordable Fence
            </span>
          </a>

          {/* RIGHT: Nav links + CTA */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 20,
            }}
          >
            {/* Nav links — desktop only, opacity 0.6 exactly like Supaste */}
            <div
              className="hidden md:flex"
              style={{ flexDirection: "row", alignItems: "center", gap: 20 }}
            >
            {navLinks.map((link) => {
                const isActive = activeHref === link.href;
                return (
                <a
                  key={link.href}
                  href={link.href}
                  style={{
                    fontFamily:
                      '"Inter Display", "Inter", -apple-system, sans-serif',
                    fontSize: 14,
                    fontWeight: isActive ? 600 : 500,
                    letterSpacing: "-0.02em",
                    color: isActive ? "rgb(0,0,0)" : "rgb(255,255,255)",
                    opacity: isActive ? 1 : 0.6,
                    textDecoration: "none",
                    whiteSpace: "nowrap",
                    transition: "opacity 0.15s ease, background 0.15s ease, color 0.15s ease",
                    backgroundColor: isActive ? "rgb(255,255,255)" : "transparent",
                    borderRadius: isActive ? 6 : 0,
                    padding: isActive ? "4px 10px" : "4px 0",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) (e.currentTarget as HTMLElement).style.opacity = "1";
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) (e.currentTarget as HTMLElement).style.opacity = "0.6";
                  }}
                >
                  {link.label}
                </a>
                );
              })}
            </div>

            {/* CTA button — white bg, black text, Apple icon, exactly like Supaste "Download" */}
            <a
              href="tel:+13158563323"
              className="hidden md:flex"
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 6,
                backgroundColor: "rgb(255,255,255)",
                borderRadius: 8,
                padding: "7px 14px",
                textDecoration: "none",
                flexShrink: 0,
                transition: "opacity 0.15s ease",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.opacity = "0.88")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.opacity = "1")
              }
            >
              <Phone
                style={{ width: 12, height: 12, color: "rgb(0,0,0)", flexShrink: 0 }}
                strokeWidth={2.5}
              />
              <span
                style={{
                  fontFamily:
                    '"Inter Display", "Inter", -apple-system, sans-serif',
                  fontSize: 12,
                  fontWeight: 600,
                  color: "rgb(0,0,0)",
                  whiteSpace: "nowrap",
                }}
              >
                Free Quote
              </span>
            </a>

            {/* Mobile hamburger */}
            <button
              className="flex md:hidden"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "rgba(255,255,255,0.6)",
                padding: 4,
                alignItems: "center",
                justifyContent: "center",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color =
                  "rgb(255,255,255)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color =
                  "rgba(255,255,255,0.6)")
              }
            >
              {mobileOpen ? (
                <X style={{ width: 18, height: 18 }} />
              ) : (
                <Menu style={{ width: 18, height: 18 }} />
              )}
            </button>
          </div>
        </div>

        {/* Corner decoration right */}
        <CornerRight />
      </nav>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div
          style={{
            position: "absolute",
            top: "calc(100% + 4px)",
            left: 12,
            right: 12,
            borderRadius: "0 0 18px 18px",
            backgroundColor: "rgba(0,0,0,0.97)",
            backdropFilter: "blur(20px)",
            padding: 8,
            boxShadow: "0 8px 40px rgba(0,0,0,0.8)",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          {navLinks.map((link) => {
            const isActive = activeHref === link.href;
            return (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                display: "block",
                padding: "10px 16px",
                borderRadius: 10,
                fontFamily: '"Inter Display", "Inter", -apple-system, sans-serif',
                fontSize: 14,
                fontWeight: isActive ? 600 : 500,
                color: isActive ? "rgb(255,255,255)" : "rgba(255,255,255,0.65)",
                textDecoration: "none",
                transition: "background 0.15s, color 0.15s",
                backgroundColor: isActive ? "rgba(255,255,255,0.12)" : "transparent",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor =
                  isActive ? "rgba(255,255,255,0.18)" : "rgba(255,255,255,0.06)";
                (e.currentTarget as HTMLElement).style.color = "rgb(255,255,255)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor =
                  isActive ? "rgba(255,255,255,0.12)" : "transparent";
                (e.currentTarget as HTMLElement).style.color = isActive
                  ? "rgb(255,255,255)"
                  : "rgba(255,255,255,0.65)";
              }}
            >
              {link.label}
            </a>
            );
          })}
          <div
            style={{
              marginTop: 6,
              borderTop: "1px solid rgba(255,255,255,0.08)",
              paddingTop: 6,
            }}
          >
            <a
              href="tel:+13158563323"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "10px 16px",
                borderRadius: 10,
                fontFamily: '"Inter Display", "Inter", -apple-system, sans-serif',
                fontSize: 14,
                fontWeight: 600,
                color: "rgb(255,255,255)",
                textDecoration: "none",
              }}
            >
              <Phone style={{ width: 16, height: 16, flexShrink: 0 }} />
              (315) 856-3323
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

