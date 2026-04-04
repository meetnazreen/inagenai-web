import LegalLayout from "@/app/components/LegalLayout";

export const metadata = {
  title: "Privacy Policy — InagenAI",
  description: "How InagenAI collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="April 4, 2025">
      <Section title="1. Introduction">
        <p>
          InagenAI (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this policy carefully. If you disagree with its terms, please discontinue use of our site and services.
        </p>
      </Section>

      <Section title="2. Information We Collect">
        <p>We may collect information about you in the following ways:</p>
        <SubSection title="Information You Provide">
          <p>
            We collect information you voluntarily provide to us, such as your name, email address, and any other details you submit through our waitlist, contact forms, or account registration.
          </p>
        </SubSection>
        <SubSection title="Automatically Collected Information">
          <p>
            When you access our website, we may automatically collect certain technical data, including your IP address, browser type and version, operating system, referring URLs, and pages viewed. This data is used to operate and improve our services.
          </p>
        </SubSection>
        <SubSection title="Cookies and Tracking Technologies">
          <p>
            We may use cookies, web beacons, and similar tracking technologies to collect information about your browsing behavior and preferences. You can control cookie settings through your browser; however, disabling cookies may affect the functionality of our site.
          </p>
        </SubSection>
      </Section>

      <Section title="3. How We Use Your Information">
        <p>We use the information we collect to:</p>
        <ul>
          <li>Operate, maintain, and improve our website and services</li>
          <li>Send you updates, notifications, and communications you have requested</li>
          <li>Respond to your comments, questions, and requests</li>
          <li>Monitor and analyze usage patterns and trends</li>
          <li>Detect, investigate, and prevent fraudulent or unauthorized activity</li>
          <li>Comply with applicable legal obligations</li>
        </ul>
      </Section>

      <Section title="4. Sharing Your Information">
        <p>
          We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website and services, subject to confidentiality agreements. We may also disclose your information when required by law, court order, or governmental authority, or to protect the rights, property, or safety of InagenAI, our users, or others.
        </p>
      </Section>

      <Section title="5. Data Retention">
        <p>
          We retain your personal information only for as long as necessary to fulfill the purposes described in this policy, unless a longer retention period is required or permitted by law. When your information is no longer needed, we will securely delete or anonymize it.
        </p>
      </Section>

      <Section title="6. Security">
        <p>
          We implement reasonable administrative, technical, and physical safeguards to protect your personal information from unauthorized access, use, alteration, or destruction. However, no security system is impenetrable, and we cannot guarantee the absolute security of your data. You use our services at your own risk.
        </p>
      </Section>

      <Section title="7. Third-Party Links">
        <p>
          Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites. We encourage you to review the privacy policies of any third-party sites you visit.
        </p>
      </Section>

      <Section title="8. Children&rsquo;s Privacy">
        <p>
          Our services are not directed to individuals under the age of 13, and we do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child under 13, please contact us immediately and we will take steps to delete such information.
        </p>
      </Section>

      <Section title="9. Your Rights">
        <p>
          Depending on your jurisdiction, you may have the right to access, correct, update, or request deletion of your personal information. To exercise any of these rights, please contact us using the details below. We will respond to your request within a reasonable timeframe and in accordance with applicable law.
        </p>
      </Section>

      <Section title="10. Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. When we do, we will revise the &ldquo;Last updated&rdquo; date at the top of this page. We encourage you to review this policy periodically to stay informed about how we protect your information.
        </p>
      </Section>

      <Section title="11. Contact Us">
        <p>
          If you have questions or concerns about this Privacy Policy, please contact us at:
        </p>
        <p className="mt-3 font-medium text-[#0a0a0a]">
          InagenAI<br />
          <a href="mailto:hello@inagenai.com" className="text-[#6b7280] hover:text-[#0a0a0a] transition-colors duration-150">
            hello@inagenai.com
          </a>
        </p>
      </Section>
    </LegalLayout>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h2 className="text-[17px] font-semibold text-[#0a0a0a] mb-3 tracking-[-0.01em]">{title}</h2>
      <div className="text-[15px] text-[#374151] leading-[1.75] space-y-3">{children}</div>
    </div>
  );
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-3">
      <h3 className="text-[14px] font-medium text-[#0a0a0a] mb-1">{title}</h3>
      <div className="text-[15px] text-[#374151] leading-[1.75]">{children}</div>
    </div>
  );
}
