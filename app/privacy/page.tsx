import { Header } from "@/components/header";

export default function Privacy() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="max-w-4xl mx-auto p-6 bg-white text-gray-800 mt-10">
        <h1 className="text-3xl font-bold mb-6">
          Privacy Policy for Maha Behavioral Health Services
        </h1>

        <p className="mb-6">
          <strong>Effective Date:</strong> May 28, 2025
        </p>

        <p className="mb-6">
          Maha Behavioral Health Services (&quot;we,&quot; &quot;our,&quot; or
          &quot;us&quot;) is committed to protecting your privacy. This Privacy
          Policy explains how we collect, use, disclose, and safeguard your
          information when you visit our website{" "}
          <a
            href="https://mahabehavioralhealth.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            https://mahabehavioralhealth.com
          </a>{" "}
          (the &quot;Site&quot;). Please read this policy carefully to
          understand our views and practices regarding your personal data and
          how we will treat it.
        </p>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">
            1. Information We Collect
          </h2>
          <p className="mb-3">
            When you use our Site, we may collect the following types of
            information:
          </p>

          <h3 className="text-xl font-semibold mb-2">
            a. Personal Information
          </h3>
          <ul className="list-disc list-inside mb-4 space-y-1">
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Mailing address</li>
            <li>
              Any other information you voluntarily provide to us through
              contact forms, appointment requests, newsletter sign-ups, or
              communication with us.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">
            b. Non-Personal Information
          </h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Browser type and version</li>
            <li>Device information</li>
            <li>IP address</li>
            <li>Operating system</li>
            <li>Pages visited and time spent on the Site</li>
            <li>Referral URLs</li>
            <li>
              Other technical data collected through cookies and similar
              tracking technologies
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">
            2. How We Use Your Information
          </h2>
          <p>We use your information for the following purposes:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>To respond to your inquiries and provide requested services</li>
            <li>To schedule and manage appointments</li>
            <li>
              To send you important updates, newsletters, and marketing
              communications (where permitted)
            </li>
            <li>
              To improve our website and services based on your feedback and
              usage patterns
            </li>
            <li>To comply with legal obligations and protect our rights</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">
            3. Cookies and Tracking Technologies
          </h2>
          <p>
            Our Site uses cookies and similar technologies to enhance your
            browsing experience. Cookies help us understand website traffic and
            usage patterns. You can control cookie preferences through your
            browser settings.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">
            4. How We Share Your Information
          </h2>
          <p>
            We do not sell, trade, or rent your personal information to third
            parties. We may share your data with:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Trusted service providers who assist us in operating the Site or
              delivering services (under confidentiality agreements)
            </li>
            <li>
              Legal authorities if required by law or to protect our rights
            </li>
            <li>
              In connection with business transfers such as mergers or
              acquisitions, subject to confidentiality
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">5. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to
            protect your personal information from unauthorized access,
            alteration, disclosure, or destruction.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">6. Your Data Rights</h2>
          <p>Depending on your jurisdiction, you may have the right to:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Access the personal data we hold about you</li>
            <li>Request correction or deletion of your data</li>
            <li>Object to or restrict certain processing of your data</li>
            <li>Withdraw consent where processing is based on consent</li>
            <li>Lodge a complaint with a data protection authority</li>
          </ul>
          <p className="mt-3">
            To exercise your rights, please contact us using the details below.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">7. Children’s Privacy</h2>
          <p>
            Our Site is not intended for children under 13 years of age. We do
            not knowingly collect personal data from children under 13. If you
            believe we have collected such data, please contact us to request
            deletion.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">
            8. Links to Other Websites
          </h2>
          <p>
            Our Site may contain links to third-party websites. We are not
            responsible for their privacy practices and encourage you to review
            their policies.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">
            9. Changes to This Privacy Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. The revised
            policy will be posted on this page with the updated effective date.
            Please check back periodically.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">10. Contact Us</h2>
          <p>
            If you have questions or concerns about this Privacy Policy or how
            we handle your data, please contact us at:
          </p>
          <address className="not-italic mt-3 space-y-1">
            <p>
              <strong>Maha Behavioral Health Services</strong>
            </p>
            <p>
              Email:{" "}
              <a
                href="mailto:info@mahabehavioralhealth.com"
                className="text-blue-600 underline"
              >
                info@mahabehavioralhealth.com
              </a>
            </p>
            <p>Phone: [Insert Phone Number]</p>
            <p>Address: [Insert Physical Address]</p>
          </address>
        </section>
      </div>
    </main>
  );
}
