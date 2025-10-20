import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Read Escalade4lax's terms of service to understand the rules and guidelines for using our car rental platform and services.",
  keywords: [
    "terms of service",
    "terms and conditions",
    "user agreement",
    "service terms",
    "legal terms",
    "escalade4lax terms",
  ],
  openGraph: {
    title: "Terms of Service - Escalade4lax",
    description:
      "Read Escalade4lax's terms of service to understand the rules and guidelines for using our car rental platform and services.",
    type: "website",
  },
  twitter: {
    title: "Terms of Service - Escalade4lax",
    description:
      "Read Escalade4lax's terms of service to understand the rules and guidelines for using our car rental platform and services.",
  },
  alternates: {
    canonical: "/terms-of-service",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-lg bg-white p-8 shadow-lg">
          <h1 className="mb-8 text-3xl font-bold text-gray-900">
            Terms of Service
          </h1>

          <div className="prose prose-lg max-w-none text-gray-700">
            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                1. Acceptance of Terms
              </h2>
              <p className="mb-4">
                Welcome to Escalade4lax (&quot;we,&quot; &quot;our,&quot; or
                &quot;us&quot;). These Terms of Service (&quot;Terms&quot;)
                govern your use of our website, booking platform, and
                professional chauffeured car services (collectively, the
                &quot;Service&quot;). By accessing or using the Service, you
                agree to be bound by these Terms.
              </p>
              <p>
                If you do not agree to these Terms, please do not use our
                Service. We reserve the right to modify these Terms at any time,
                and your continued use of the Service constitutes acceptance of
                any changes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                2. Description of Service
              </h2>
              <p className="mb-4">
                Escalade4lax provides premium point-to-point and hourly
                chauffeured transportation services in Los Angeles and
                surrounding areas. Our Service includes:
              </p>
              <ul className="mb-4 list-disc pl-6">
                <li>
                  Online booking for rides (airport, city-to-city, hourly)
                </li>
                <li>Driver coordination and trip status updates</li>
                <li>
                  Payment processing via trusted third-party providers (e.g.,
                  Stripe)
                </li>
                <li>Receipts, invoices, and trip history</li>
                <li>Customer support and account management</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                3. User Account and Registration
              </h2>

              <h3 className="mb-3 text-xl font-medium text-gray-800">
                3.1 Account Creation
              </h3>
              <p className="mb-4">
                To access certain features of the Service, you may need to
                create an account. You agree to provide accurate, current, and
                complete information during registration and to update such
                information as necessary.
              </p>

              <h3 className="mb-3 text-xl font-medium text-gray-800">
                3.2 Account Security
              </h3>
              <p className="mb-4">
                You are responsible for maintaining the confidentiality of your
                account credentials and for all activities that occur under your
                account. You must notify us immediately of any unauthorized use
                of your account.
              </p>

              <h3 className="mb-3 text-xl font-medium text-gray-800">
                3.3 Account Termination
              </h3>
              <p className="mb-4">
                We reserve the right to suspend or terminate your account at any
                time for violation of these Terms or for any other reason we
                deem appropriate.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                4. Acceptable Use Policy
              </h2>
              <p className="mb-4">You agree not to use the Service to:</p>
              <ul className="mb-4 list-disc pl-6">
                <li>Violate any applicable laws or regulations</li>
                <li>
                  Infringe upon the rights of others, including intellectual
                  property rights
                </li>
                <li>
                  Upload or share harmful, offensive, or inappropriate content
                </li>
                <li>
                  Attempt to gain unauthorized access to our systems or other
                  users&apos; accounts
                </li>
                <li>Interfere with or disrupt the Service or servers</li>
                <li>
                  Engage in fraudulent bookings, payment fraud, fare evasion, or
                  misuse of promotions
                </li>
                <li>
                  Impersonate any person or entity or misrepresent your
                  affiliation
                </li>
                <li>Distribute spam, malware, or other malicious content</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                5. Content and Intellectual Property
              </h2>

              <h3 className="mb-3 text-xl font-medium text-gray-800">
                5.1 Our Content
              </h3>
              <p className="mb-4">
                All content provided through the Service, including but not
                limited to text, graphics, logos, images, software, and design,
                is owned by Escalade4lax or our licensors and is protected by
                copyright, trademark, and other intellectual property laws.
              </p>

              <h3 className="mb-3 text-xl font-medium text-gray-800">
                5.2 User-Generated Content
              </h3>
              <p className="mb-4">
                By uploading or submitting content to our Service, you grant us
                a non-exclusive, worldwide, royalty-free license to use, modify,
                reproduce, and distribute such content in connection with our
                Service.
              </p>

              <h3 className="mb-3 text-xl font-medium text-gray-800">
                5.3 Copyright Infringement
              </h3>
              <p className="mb-4">
                We respect intellectual property rights and will respond to
                valid copyright infringement claims in accordance with
                applicable law.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                6. Ride Safety and Conduct
              </h2>
              <ul className="mb-4 list-disc pl-6">
                <li>Seat belts must be worn at all times where available.</li>
                <li>No smoking, vaping, or illegal substances in vehicles.</li>
                <li>
                  Food and beverages should be handled safely to avoid spills.
                </li>
                <li>
                  Drivers may refuse service if safety is at risk or laws are
                  violated.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                7. Privacy Policy
              </h2>
              <p>
                Your privacy is important to us. Our Privacy Policy explains how
                we collect, use, and protect your information when you use our
                Service. By using our Service, you also agree to our Privacy
                Policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                8. Pricing and Payment Terms
              </h2>

              <h3 className="mb-3 text-xl font-medium text-gray-800">
                8.1 Pricing and Estimates
              </h3>
              <p className="mb-4">
                Quoted prices are based on the information you provide and may
                include base fares, taxes, fees, tolls, surcharges, and gratuity
                if selected. Final charges may vary based on actual trip
                details, wait time, additional stops, route changes, cleaning,
                or damage fees where applicable.
              </p>

              <h3 className="mb-3 text-xl font-medium text-gray-800">
                8.2 Payments and Authorizations
              </h3>
              <p className="mb-4">
                Payments are processed by third-party providers (e.g., Stripe).
                By booking, you authorize charges to your payment method for
                applicable fees. We may place an authorization hold prior to the
                trip. If a payment is declined, we may suspend or cancel the
                booking.
              </p>

              <h3 className="mb-3 text-xl font-medium text-gray-800">
                8.3 Refunds
              </h3>
              <p className="mb-4">
                Refund eligibility depends on the circumstances of the booking
                and our cancellation policy. Certain fees (e.g., no-show,
                late-cancellation, cleaning, or damage) are non-refundable.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                9. Cancellations and Changes
              </h2>
              <ul className="mb-4 list-disc pl-6">
                <li>
                  Changes are subject to availability and may affect pricing.
                </li>
                <li>
                  Late cancellations may incur a fee; no-shows are charged in
                  full.
                </li>
                <li>
                  Airport pickups: provide correct flight details to reduce wait
                  time fees.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                10. Wait Time, No-Show, and Additional Stops
              </h2>
              <ul className="mb-4 list-disc pl-6">
                <li>
                  Complimentary wait time may apply; additional wait billed at
                  standard rates.
                </li>
                <li>
                  No-show occurs if you are unreachable after reasonable
                  attempts within the wait window.
                </li>
                <li>Unscheduled additional stops may incur extra charges.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                11. Vehicle Cleanliness and Damage
              </h2>
              <ul className="mb-4 list-disc pl-6">
                <li>
                  Excessive soilage or spills may result in a cleaning fee.
                </li>
                <li>
                  You may be responsible for repair costs resulting from damage
                  you cause.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                12. Disclaimers and Limitation of Liability
              </h2>

              <h3 className="mb-3 text-xl font-medium text-gray-800">
                12.1 Service Availability
              </h3>
              <p className="mb-4">
                We strive to maintain continuous service availability but do not
                guarantee that the Service will be uninterrupted or error-free.
                Trips may be affected by traffic, weather, road conditions,
                flight delays, or events beyond our control.
              </p>

              <h3 className="mb-3 text-xl font-medium text-gray-800">
                12.2 Limitation of Liability
              </h3>
              <p className="mb-4">
                To the maximum extent permitted by law, Escalade4lax shall not
                be liable for any indirect, incidental, special, consequential,
                or punitive damages, including loss of profits, data, or
                business opportunities. Our total liability for any claim
                related to the Service shall not exceed the amount paid by you
                for the applicable booking.
              </p>

              <h3 className="mb-3 text-xl font-medium text-gray-800">
                12.3 Disclaimer of Warranties
              </h3>
              <p className="mb-4">
                Our Service is provided &quot;as is&quot; and &quot;as
                available&quot; without warranties of any kind, either express
                or implied, including but not limited to warranties of
                merchantability, fitness for a particular purpose, or
                non-infringement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                13. Indemnification
              </h2>
              <p>
                You agree to indemnify, defend, and hold harmless Escalade4lax,
                its officers, directors, employees, and agents from any claims,
                damages, losses, or expenses arising from your use of the
                Service or violation of these Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                14. Third-Party Services
              </h2>
              <p>
                Our Service may integrate with or link to third-party services,
                websites, or applications. We are not responsible for the
                content, privacy practices, or terms of service of any
                third-party services. Your use of third-party services is
                subject to their respective terms and conditions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                15. Termination
              </h2>
              <p className="mb-4">
                Either party may terminate these Terms at any time. Upon
                termination:
              </p>
              <ul className="mb-4 list-disc pl-6">
                <li>Your right to use the Service will cease immediately</li>
                <li>We may delete your account and all associated data</li>
                <li>
                  Sections relating to intellectual property, disclaimers, and
                  limitation of liability will survive termination
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                16. Governing Law and Dispute Resolution
              </h2>

              <h3 className="mb-3 text-xl font-medium text-gray-800">
                16.1 Governing Law
              </h3>
              <p className="mb-4">
                These Terms are governed by and construed in accordance with the
                laws of the State of California, without regard to its conflict
                of law principles.
              </p>

              <h3 className="mb-3 text-xl font-medium text-gray-800">
                16.2 Dispute Resolution
              </h3>
              <p className="mb-4">
                Any disputes arising from these Terms or your use of the Service
                will be resolved through binding arbitration in Los Angeles
                County, California, in accordance with applicable rules, except
                where prohibited by law. You and Escalade4lax agree to waive any
                right to a jury trial.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                17. Changes to Terms
              </h2>
              <p>
                We reserve the right to modify these Terms at any time. We will
                notify you of significant changes through the Service or by
                email. Your continued use of the Service after changes are made
                constitutes acceptance of the new Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                18. Contact Information
              </h2>
              <p className="mb-4">
                If you have any questions about these Terms of Service, please
                contact us at:
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
                19. Entire Agreement
              </h2>
              <p>
                These Terms, together with our Privacy Policy and any additional
                terms that apply to specific features of our Service, constitute
                the entire agreement between you and Escalade4lax regarding your
                use of the Service.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
