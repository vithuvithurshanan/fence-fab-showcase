import { createFileRoute, Link } from "@tanstack/react-router";
import { Fence, ArrowLeft, Phone, MapPin } from "lucide-react";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions | Affordable Fence" },
      {
        name: "description",
        content: "Terms & Conditions for website use and SMS messaging — Affordable Fence.",
      },
    ],
  }),
  component: TermsPage,
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

function TermsPage() {
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
              Terms &amp; Conditions
            </h1>
            <p className="text-sm text-muted-foreground">
              Effective Date: January 19, 2025&nbsp;&nbsp;|&nbsp;&nbsp;Last
              Updated: July 9, 2026
            </p>
          </div>

          <div className="divide-y divide-border space-y-0">
            {/* Intro */}
            <p className="pb-6 text-sm text-muted-foreground leading-relaxed">
              Welcome to Affordable Fence. By accessing this website or using
              our services, you agree to be bound by these Terms and Conditions.
              If you do not agree with any part of these terms, please do not
              use our website or services.
            </p>

            <div className="py-6">
              <Section number="1" title="Business Identity">
                <p>
                  These Terms and Conditions govern your use of the services
                  provided by Affordable Fence, located at 36 Helbock Dr,
                  Phoenix, NY 13135. Contact:{" "}
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
              <Section number="2" title="Age Requirement (18+)">
                <p>
                  By using this website or enrolling in our services, including
                  SMS messaging, you confirm that you are at least 18 years of
                  age. Our SMS program is not directed to individuals under 18.
                </p>
              </Section>
            </div>

            <div className="py-6">
              <Section number="3" title="Terminology">
                <p>
                  "Client," "You," and "Your" refers to the user of this
                  website. "The Company," "We," "Our," and "Us" refers to
                  Affordable Fence.
                </p>
              </Section>
            </div>

            {/* SMS highlighted section */}
            <div className="py-6">
              <h2 className="mb-4 text-base font-semibold text-foreground">
                4. SMS Messaging Terms of Service
              </h2>
              <div className="rounded-xl border border-border bg-secondary/40 p-6 space-y-5 text-sm text-muted-foreground leading-relaxed">
                <div className="space-y-1.5">
                  <h3 className="font-semibold text-foreground text-[13.5px]">
                    4a. Program Description &amp; Message Types
                  </h3>
                  <p>
                    By providing your phone number and checking the SMS consent
                    checkbox on our contact forms, you agree to receive recurring
                    automated text messages from Affordable Fence. Messages may
                    include:
                  </p>
                  <ul className="list-disc space-y-1 pl-5">
                    <li>Free estimate confirmations and scheduling notifications</li>
                    <li>Appointment reminders and project status updates</li>
                    <li>Customer support and service follow-up communications</li>
                    <li>
                      Promotional offers and seasonal announcements related to
                      our fence services
                    </li>
                  </ul>
                </div>

                <div className="space-y-1.5">
                  <h3 className="font-semibold text-foreground text-[13.5px]">
                    4b. Message Frequency
                  </h3>
                  <p>
                    Message frequency varies based on your service activity and
                    interactions with us. You may receive up to 4–8 messages per
                    month. Frequency may increase during active service periods.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <h3 className="font-semibold text-foreground text-[13.5px]">
                    4c. Message &amp; Data Rates
                  </h3>
                  <p>
                    Message and data rates may apply for any messages sent to
                    you from us and to us from you. Charges are determined by
                    your mobile carrier and your individual service plan.
                    Affordable Fence is not responsible for any carrier charges.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <h3 className="font-semibold text-foreground text-[13.5px]">
                    4d. How to Opt Out (STOP)
                  </h3>
                  <p>
                    You can opt out of receiving SMS messages at any time by
                    replying{" "}
                    <strong className="text-foreground">STOP</strong> to any
                    message we send. After opting out, you will receive a
                    one-time confirmation message and will no longer receive SMS
                    messages from us unless you re-enroll.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <h3 className="font-semibold text-foreground text-[13.5px]">
                    4e. How to Get Help (HELP)
                  </h3>
                  <p>
                    For help with our SMS program, reply{" "}
                    <strong className="text-foreground">HELP</strong> to any
                    message or contact us directly at:
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

                <div className="space-y-1.5">
                  <h3 className="font-semibold text-foreground text-[13.5px]">
                    4f. Carrier Liability Disclaimer
                  </h3>
                  <p>
                    Mobile carriers are not liable for delayed or undelivered
                    messages. Affordable Fence cannot guarantee delivery of SMS
                    messages. Delivery of information through SMS may be subject
                    to your mobile carrier's capability and coverage area.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <h3 className="font-semibold text-foreground text-[13.5px]">
                    4g. Supported Carriers
                  </h3>
                  <p>
                    Our SMS program is supported by all major U.S. wireless
                    carriers including AT&amp;T, Verizon, T-Mobile, and Sprint.
                    Not all carriers are supported for all messages.
                  </p>
                </div>
              </div>
            </div>

            <div className="py-6">
              <Section number="5" title="Cookies">
                <p>
                  We use cookies in accordance with our Privacy Policy to
                  improve user experience and website functionality.
                </p>
              </Section>
            </div>

            <div className="py-6">
              <Section number="6" title="Intellectual Property & License">
                <p>
                  Unless otherwise stated, Affordable Fence owns the
                  intellectual property rights for all content on this website.
                  You may not copy, reproduce, republish, sell, or redistribute
                  any material without prior written permission.
                </p>
              </Section>
            </div>

            <div className="py-6">
              <Section number="7" title="Comments & User Content">
                <p>
                  Affordable Fence reserves the right to monitor and remove any
                  comments or user-generated content on our platforms that are
                  inappropriate, offensive, or violate these terms.
                </p>
              </Section>
            </div>

            <div className="py-6">
              <Section number="8" title="Content Liability">
                <p>
                  We are not responsible for content that appears on external
                  websites linking to us. You agree to defend and protect
                  Affordable Fence against any claims arising from your website
                  or digital properties.
                </p>
              </Section>
            </div>

            <div className="py-6">
              <Section number="9" title="Disclaimer">
                <p>
                  To the maximum extent permitted by applicable law, Affordable
                  Fence excludes all warranties, representations, and conditions
                  relating to our website and services. We are not liable for
                  any loss or damage (including, without limitation, damage for
                  loss of business, profits, or revenue) arising from the use of
                  our website or services.
                </p>
              </Section>
            </div>

            <div className="py-6">
              <Section number="10" title="Changes to These Terms">
                <p>
                  We reserve the right to update these Terms and Conditions at
                  any time. Changes will be posted on this page with a revised
                  "Last Updated" date. Continued use of our website or services
                  constitutes acceptance of the updated terms.
                </p>
              </Section>
            </div>

            <div className="pt-6">
              <Section number="11" title="Contact Information">
                <p>
                  For questions about these Terms and Conditions, please contact
                  us:
                </p>
              </Section>

              {/* Contact cards */}
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="flex items-start gap-3 rounded-xl border border-border bg-secondary/30 p-4">
                  <Phone className="mt-0.5 size-4 shrink-0 text-primary" />
                  <div className="text-sm">
                    <span className="block font-semibold text-foreground">Phone</span>
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
                    <span className="block font-semibold text-foreground">Address</span>
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
