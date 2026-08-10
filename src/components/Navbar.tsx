import { useState, useEffect } from "react";
import { Fence, Phone, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Fence Types", href: "#services" },
  { label: "Services", href: "#services-offered" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
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

// Apple-logo style SVG (matches Supaste's button icon)
function AppleIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 12.054 14.923"
      style={{ width: 12, height: 15, flexShrink: 0 }}
      fill="rgb(0,0,0)"
    >
      <path d="M 11.669 5.088 C 11.583 5.155 10.067 6.016 10.067 7.931 C 10.067 10.146 11.996 10.93 12.054 10.949 C 12.045 10.997 11.747 12.022 11.036 13.067 C 10.403 13.986 9.741 14.904 8.734 14.904 C 7.727 14.904 7.468 14.315 6.306 14.315 C 5.173 14.315 4.77 14.923 3.85 14.923 C 2.929 14.923 2.286 14.073 1.547 13.028 C 0.691 11.801 0 9.895 0 8.086 C 0 5.185 1.871 3.646 3.713 3.646 C 4.692 3.646 5.508 4.294 6.122 4.294 C 6.707 4.294 7.619 3.607 8.733 3.607 C 9.155 3.607 10.671 3.646 11.669 5.088 Z M 8.204 2.379 C 8.664 1.828 8.99 1.064 8.99 0.3 C 8.99 0.194 8.981 0.087 8.962 0 C 8.213 0.028 7.322 0.503 6.784 1.131 C 6.362 1.615 5.968 2.379 5.968 3.154 C 5.968 3.27 5.988 3.386 5.996 3.424 C 6.044 3.433 6.121 3.443 6.198 3.443 C 6.87 3.443 7.715 2.989 8.204 2.379 Z" />
    </svg>
  );
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  style={{
                    fontFamily:
                      '"Inter Display", "Inter", -apple-system, sans-serif',
                    fontSize: 14,
                    fontWeight: 500,
                    letterSpacing: "-0.02em",
                    color: "rgb(255,255,255)",
                    opacity: 0.6,
                    textDecoration: "none",
                    whiteSpace: "nowrap",
                    transition: "opacity 0.15s ease",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.opacity = "1")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.opacity = "0.6")
                  }
                >
                  {link.label}
                </a>
              ))}
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
                display: "flex",
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
          {navLinks.map((link) => (
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
                fontWeight: 500,
                color: "rgba(255,255,255,0.65)",
                textDecoration: "none",
                transition: "background 0.15s, color 0.15s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor =
                  "rgba(255,255,255,0.06)";
                (e.currentTarget as HTMLElement).style.color =
                  "rgb(255,255,255)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor =
                  "transparent";
                (e.currentTarget as HTMLElement).style.color =
                  "rgba(255,255,255,0.65)";
              }}
            >
              {link.label}
            </a>
          ))}
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

