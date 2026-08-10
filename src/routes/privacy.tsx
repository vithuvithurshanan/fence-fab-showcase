import { createFileRoute, Link } from "@tanstack/react-router";
import { Fence, ArrowLeft, Phone, MapPin } from "lucide-react";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Affordable Fence" },
      {
        name: "description",
        content:
          "Privacy Policy and SMS Data Protection Notice for Affordable Fence.",
      },
    ],
  }),
  component: PrivacyPage,
});

function Section({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-3">
      <h2 className="text-base font-semibold text-foreground">
        {number}. {title}
      </h2>
      <div className="space-y-2 text-sm text-muted-foreground leading-relaxed">
        {children}
      </div>
    </section>
  );
}

function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground px-6 pb-20 pt-28">
      <div className="mx-auto max-w-3xl">
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
        >
          <ArrowLeft className="size-4" /> Back to Home
        </Link>

        <div className="rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)] md:p-12">
          {/* Header */}
          <div className="mb-8 space-y-2">
            <span className="flex items-center gap-2 text-lg font-bold text-foreground">
              <Fence className="size-5 text-primary" /> Affordable Fence
            </span>
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
              Privacy Policy
            </h1>
            <p className="text-sm text-muted-foreground">
              Effective Date: January 19, 2025&nbsp;&nbsp;|&nbsp;&nbsp;Last
              Updated: July 9, 2026
            </p>
          </div>

          <div className="divide-y divide-border space-y-0">
            {/* Intro */}
            <p className="pb-6 text-sm text-muted-foreground leading-relaxed">
              Affordable Fence ("we," "our," or "us") is committed to protecting
              your privacy and personal information. This Privacy Policy explains
              how we collect, use, disclose, and safeguard your data in
              compliance with applicable U.S. data protection laws, including the
              California Consumer Privacy Act (CCPA) and the General Data
              Protection Regulation (GDPR) where applicable.
            </p>

            <div className="py-6">
              <Section number="1" title="Information We Collect">
                <p>
                  We may collect the following categories of personal information
                  when you contact us, request a quote, submit a web form, or
                  use our services:
                </p>
                <ul className="list-disc space-y-1 pl-5">
                  <li>Full name</li>
                  <li>Mailing or service address</li>
                  <li>Email address</li>
                  <li>Mobile phone number</li>
                  <li>Service request details and project descriptions</li>
                  <li>Communication history and preferences</li>
                </ul>
              </Section>
            </div>

            {/* SMS highlighted section */}
            <div className="py-6">
              <h2 className="mb-4 text-base font-semibold text-foreground">
                2. SMS / Text Message Communications
              </h2>
              <div className="rounded-xl border border-border bg-secondary/40 p-6 space-y-5 text-sm text-muted-foreground leading-relaxed">
                <div className="space-y-1.5">
                  <h3 className="font-semibold text-foreground text-[13.5px]">
                    2a. How We Collect Your Mobile Number
                  </h3>
                  <p>
                    We collect your mobile phone number when you voluntarily
                    provide it through our website contact forms, phone calls, or
                    other direct communication channels. By providing your mobile
                    number and checking the SMS consent checkbox on our forms,
                    you expressly consent to receive SMS (text message)
                    communications from Affordable Fence.
                  </p>
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-semibold text-foreground text-[13.5px]">
                    2b. Types of Messages We Send
                  </h3>
                  <p>
                    By opting in, you may receive recurring automated text
                    messages from Affordable Fence, including:
                  </p>
                  <ul className="list-disc space-y-1 pl-5">
                    <li>
                      Free estimate confirmations and appointment reminders
                    </li>
                    <li>Project status updates and scheduling notifications</li>
                    <li>Customer support and follow-up communications</li>
                    <li>
                      Promotional offers and seasonal announcements related to
                      our fence services
                    </li>
                  </ul>
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-semibold text-foreground text-[13.5px]">
                    2c. Message Frequency
                  </h3>
                  <p>
                    Message frequency varies based on your interactions with us,
                    ongoing service needs, and active promotions. You may receive
                    up to 4–8 messages per month depending on your service
                    activity.
                  </p>
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-semibold text-foreground text-[13.5px]">
                    2d. Message &amp; Data Rates
                  </h3>
                  <p>
                    Message and data rates may apply. Charges are determined by
                    your mobile carrier and your individual service plan.
                    Affordable Fence is not responsible for any charges incurred
                    from your mobile carrier.
                  </p>
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-semibold text-foreground text-[13.5px]">
                    2e. How to Opt Out (STOP)
                  </h3>
                  <p>
                    You may cancel SMS messages at any time by replying{" "}
                    <strong className="text-foreground">STOP</strong> to any
                    text message you receive from us. After opting out, you will
                    receive one final confirmation message and will no longer
                    receive SMS communications from Affordable Fence unless you
                    re-enroll.
                  </p>
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-semibold text-foreground text-[13.5px]">
                    2f. How to Get Help (HELP)
                  </h3>
                  <p>
                    For help with our SMS program, reply{" "}
                    <strong className="text-foreground">HELP</strong> to any
                    message, or contact us directly at:
                  </p>
                  <p>
                    Phone:{" "}
                    <a
                      href="tel:+13158563323"
                      className="font-medium text-primary hover:underline"
                    >
                      315-856-3323
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="py-6">
              <Section
                number="3"
                title="Mobile Information & SMS Consent — No Third-Party Sharing"
              >
                <p>
                  No mobile information (including your mobile phone number and
                  SMS opt-in consent data) will be shared with third parties or
                  affiliates for marketing or promotional purposes.
                </p>
                <p className="font-medium text-foreground">
                  All other categories of personal data exclude text messaging
                  originator opt-in data and consent; this information will not
                  be shared with any third parties under any circumstances.
                </p>
              </Section>
            </div>

            <div className="py-6">
              <Section number="4" title="How We Use Your Information">
                <p>
                  We use the personal information we collect to:
                </p>
                <ul className="list-disc space-y-1 pl-5">
                  <li>Provide and manage fence installation services</li>
                  <li>Respond to inquiries and service requests</li>
                  <li>Schedule appointments and send reminders</li>
                  <li>
                    Send promotional communications (with your consent)
                  </li>
                  <li>Improve our website and service quality</li>
                  <li>Comply with applicable laws and regulations</li>
                </ul>
              </Section>
            </div>

            <div className="py-6">
              <Section number="5" title="Cookies and Tracking Technologies">
                <p>
                  We use cookies and similar technologies to improve website
                  functionality, analyze traffic, and enhance user experience.
                  Cookies do not store sensitive personal information. By
                  continuing to use this website, you consent to our use of
                  cookies in accordance with this policy.
                </p>
              </Section>
            </div>

            <div className="py-6">
              <Section number="6" title="Data Security">
                <p>
                  We implement reasonable administrative, technical, and physical
                  security measures to protect your personal data against
                  unauthorized access, disclosure, alteration, or destruction.
                  However, no method of electronic transmission or storage is
                  100% secure.
                </p>
              </Section>
            </div>

            <div className="py-6">
              <Section number="7" title="Data Retention">
                <p>
                  We retain your personal information only for as long as
                  necessary to fulfill the purposes outlined in this Privacy
                  Policy, or as required by applicable law. When your data is no
                  longer needed, we securely delete or anonymize it.
                </p>
              </Section>
            </div>

            <div className="py-6">
              <Section number="8" title="Your Privacy Rights">
                <p>
                  Depending on your location, you may have the following rights
                  regarding your personal data:
                </p>
                <ul className="list-disc space-y-1 pl-5">
                  <li>
                    <strong className="text-foreground">Access:</strong> Request
                    a copy of the personal data we hold about you
                  </li>
                  <li>
                    <strong className="text-foreground">Correction:</strong>{" "}
                    Request correction of inaccurate personal data
                  </li>
                  <li>
                    <strong className="text-foreground">Deletion:</strong>{" "}
                    Request deletion of your personal data (including your mobile
                    number and SMS consent record)
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Opt-Out of SMS:
                    </strong>{" "}
                    Reply STOP to any text message at any time
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Opt-Out of Marketing:
                    </strong>{" "}
                    Contact us directly to be removed from marketing lists
                  </li>
                </ul>
                <p>
                  To exercise any of these rights, call{" "}
                  <a
                    href="tel:+13158563323"
                    className="text-primary hover:underline"
                  >
                    315-856-3323
                  </a>
                  .
                </p>
              </Section>
            </div>

            <div className="py-6">
              <Section number="9" title="Changes to This Privacy Policy">
                <p>
                  We may update this Privacy Policy from time to time. We will
                  post the updated policy on this page with a revised "Last
                  Updated" date. Continued use of our website or services after
                  any changes constitutes your acceptance of the updated policy.
                </p>
              </Section>
            </div>

            <div className="pt-6">
              <Section number="10" title="Contact Information">
                <p>
                  If you have questions or concerns about this Privacy Policy,
                  please contact us:
                </p>
              </Section>

              {/* Contact cards */}
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="flex items-start gap-3 rounded-xl border border-border bg-secondary/30 p-4">
                  <Phone className="mt-0.5 size-4 shrink-0 text-primary" />
                  <div className="text-sm">
                    <span className="block font-semibold text-foreground">
                      Phone
                    </span>
                    <a
                      href="tel:+13158563323"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      315-856-3323
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-xl border border-border bg-secondary/30 p-4">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                  <div className="text-sm">
                    <span className="block font-semibold text-foreground">
                      Address
                    </span>
                    <span className="text-muted-foreground">
                      36 Helbock Dr, Phoenix, NY 13135
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
