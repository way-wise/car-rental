import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read Escalade4lax's privacy policy to understand how we collect, use, and protect your personal information when using our car rental services.",
  keywords: [
    "privacy policy",
    "data protection",
    "personal information",
    "privacy rights",
    "data security",
    "escalade4lax privacy",
  ],
  openGraph: {
    title: "Privacy Policy - Escalade4lax",
    description:
      "Read Escalade4lax's privacy policy to understand how we collect, use, and protect your personal information when using our car rental services.",
    type: "website",
  },
  twitter: {
    title: "Privacy Policy - Escalade4lax",
    description:
      "Read Escalade4lax's privacy policy to understand how we collect, use, and protect your personal information when using our car rental services.",
  },
  alternates: {
    canonical: "/privacy-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-lg bg-white p-8 shadow-lg">
          <h1 className="mb-8 text-3xl font-bold text-gray-900">
            Privacy Policy
          </h1>

          <div className="prose prose-lg max-w-none text-gray-700">
            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                1. Introduction
              </h2>
              <p className="mb-4">
                Welcome to Escalade4lax (&quot;we,&quot; &quot;our,&quot; or
                &quot;us&quot;). We provide premium chauffeured car service in
                Los Angeles and surrounding areas. We are committed to
                protecting your privacy and ensuring the security of your
                personal information. This Privacy Policy explains how we
                collect, use, disclose, and safeguard your information when you
                use our website, booking tools, and related services (the
                &quot;Services&quot; ).
              </p>
              <p>
                By using our services, you agree to the collection and use of
                information in accordance with this policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                2. Information We Collect
              </h2>

              <h3 className="mb-3 text-xl font-medium text-gray-800">
                2.1 Personal Information
              </h3>
              <p className="mb-4">
                We may collect personal information that you provide directly to
                us, including:
              </p>
              <ul className="mb-4 list-disc pl-6">
                <li>
                  Name and contact information (email address, phone number)
                </li>
                <li>Pickup and drop-off addresses, dates, and times</li>
                <li>Flight details (if provided for airport pickups)</li>
                <li>Booking details and ride preferences</li>
                <li>
                  Payment information handled by our payment processor (e.g.,
                  Stripe); we store only tokens and limited metadata, not full
                  card numbers
                </li>
                <li>
                  Government ID or driver&apos;s license details only when
                  legally required (e.g., verification or dispute resolution)
                </li>
              </ul>

              <h3 className="mb-3 text-xl font-medium text-gray-800">
                2.2 Automatically Collected Information
              </h3>
              <p className="mb-4">
                When you use our website and Services, we automatically collect
                certain information, including:
              </p>
              <ul className="mb-4 list-disc pl-6">
                <li>
                  Device and browser information (device type, operating system,
                  browser type, unique identifiers)
                </li>
                <li>
                  Usage data (pages viewed, features used, time spent,
                  interaction patterns)
                </li>
                <li>
                  Location data (with your permission) to support accurate
                  pickup and drop-off
                </li>
                <li>
                  Log information (IP address, access times, referring pages,
                  errors/crashes)
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                3. How We Use Your Information
              </h2>
              <p className="mb-4">
                We use the collected information for various purposes,
                including:
              </p>
              <ul className="mb-4 list-disc pl-6">
                <li>
                  Providing and maintaining our car service and booking platform
                </li>
                <li>
                  Processing payments, refunds, and preventing fraudulent
                  transactions
                </li>
                <li>
                  Coordinating pickups and drop-offs, including flight tracking
                  when provided
                </li>
                <li>
                  Sending booking confirmations, reminders, receipts, and
                  important updates
                </li>
                <li>
                  Improving our website functionality, performance, and user
                  experience
                </li>
                <li>
                  Analyzing usage patterns to enhance service quality and safety
                </li>
                <li>Providing customer support and responding to inquiries</li>
                <li>
                  Complying with legal obligations and enforcing our policies
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                4. Information Sharing and Disclosure
              </h2>
              <p className="mb-4">
                We do not sell, trade, or otherwise transfer your personal
                information to third parties without your consent, except in the
                following circumstances:
              </p>
              <ul className="mb-4 list-disc pl-6">
                <li>
                  <strong>Service Providers:</strong> We share information with
                  trusted vendors who help operate the Services (e.g., payment
                  processing via Stripe, maps and places services via Google
                  Maps Platform, email/SMS providers, hosting, analytics).
                </li>
                <li>
                  <strong>Legal Requirements:</strong> We may disclose
                  information when required by law or to protect our rights,
                  property, or safety
                </li>
                <li>
                  <strong>Business Transfers:</strong> Information may be
                  transferred in connection with a merger, acquisition, or sale
                  of assets
                </li>
                <li>
                  <strong>Consent:</strong> We may share information with your
                  explicit consent
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                5. Data Security
              </h2>
              <p className="mb-4">
                We implement appropriate security measures to protect your
                personal information against unauthorized access, alteration,
                disclosure, or destruction. These measures include:
              </p>
              <ul className="mb-4 list-disc pl-6">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and audits</li>
                <li>Access controls and authentication mechanisms</li>
                <li>Employee training on data protection practices</li>
              </ul>
              <p>
                However, no method of transmission over the internet or
                electronic storage is 100% secure, and we cannot guarantee
                absolute security.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                6. Cookies and Tracking Technologies
              </h2>
              <p className="mb-4">
                We use cookies and similar tracking technologies to enhance your
                experience on our website and Services. These technologies help
                us:
              </p>
              <ul className="mb-4 list-disc pl-6">
                <li>Remember your preferences and settings</li>
                <li>Analyze site usage and performance</li>
                <li>Provide personalized content and recommendations</li>
                <li>Ensure proper app functionality</li>
              </ul>
              <p>
                You can control cookie settings through your device or browser
                settings, but disabling cookies may affect site functionality.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                7. Your Rights and Choices
              </h2>
              <p className="mb-4">
                You have certain rights regarding your personal information,
                including:
              </p>
              <ul className="mb-4 list-disc pl-6">
                <li>
                  <strong>Access:</strong> Request access to your personal
                  information
                </li>
                <li>
                  <strong>Correction:</strong> Request correction of inaccurate
                  or incomplete information
                </li>
                <li>
                  <strong>Deletion:</strong> Request deletion of your personal
                  information
                </li>
                <li>
                  <strong>Portability:</strong> Request a copy of your data in a
                  portable format
                </li>
                <li>
                  <strong>Opt-out:</strong> Opt out of certain communications
                  and data processing
                </li>
              </ul>
              <p>
                To exercise these rights, please contact us using the
                information provided in the &quot;Contact Us&quot; section.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                8. Children&apos;s Privacy
              </h2>
              <p>
                Our services are not intended for children under the age of 13.
                We do not knowingly collect personal information from children
                under 13. If we become aware that we have collected personal
                information from a child under 13, we will take steps to delete
                such information promptly.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                9. Third-Party Services
              </h2>
              <p className="mb-4">
                Our Services may contain links to third-party websites or
                integrate with third-party services, such as Stripe for payments
                and Google Maps Platform for location and autocomplete. This
                Privacy Policy does not apply to these third-party services. We
                encourage you to review the privacy policies of any third-party
                services you use.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                10. Data Retention
              </h2>
              <p>
                We retain your personal information for as long as necessary to
                provide our services and fulfill the purposes outlined in this
                Privacy Policy. We may also retain information as required by
                law or for legitimate business purposes, such as fraud
                prevention and safety.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                11. International Data Transfers
              </h2>
              <p>
                Your information may be transferred to and processed in
                countries other than your country of residence. We ensure that
                appropriate safeguards are in place to protect your information
                in accordance with applicable data protection laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                12. Changes to This Privacy Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. When we
                make changes, we will update the &quot;Last updated&quot; date
                at the top of this policy and notify you through the app or by
                email. Your continued use of our services after any changes
                constitutes acceptance of the updated policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                13. Contact Us
              </h2>
              <p className="mb-4">
                If you have any questions about this Privacy Policy or our
                privacy practices, please contact us at:
              </p>
              <div className="rounded-lg bg-gray-50 p-4">
                <p>
                  <strong>Email:</strong> seung@waywise.pro
                </p>
                <p>
                  <strong>Address:</strong> Saddleback Ridge Rd, Santa Clarita,
                  CA 91351
                </p>
                <p>
                  <strong>Phone:</strong> +1-310-756-5533
                </p>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                14. Governing Law
              </h2>
              <p>
                This Privacy Policy is governed by and construed in accordance
                with the laws of the State of California, without regard to its
                conflict of law principles.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
