import LegalLayout from "@/app/components/LegalLayout";

export const metadata = {
  title: "GDPR Compliance — InagenAI",
  description: "InagenAI's commitment to GDPR compliance and your data rights under EU law.",
};

export default function GdprPage() {
  return (
    <LegalLayout title="GDPR Compliance" lastUpdated="April 4, 2025">
      <Section title="1. Overview">
        <p>
          InagenAI is committed to protecting the personal data of individuals in the European Union (EU) and European Economic Area (EEA) in accordance with the General Data Protection Regulation (GDPR) (EU) 2016/679. This page outlines our obligations and your rights under the GDPR.
        </p>
        <p>
          This page should be read alongside our{" "}
          <a href="/privacy" className="text-[#0a0a0a] underline underline-offset-2 hover:opacity-60 transition-opacity duration-150">
            Privacy Policy
          </a>
          , which provides full details on how we collect and use personal data.
        </p>
      </Section>

      <Section title="2. Data Controller">
        <p>
          InagenAI acts as the data controller for personal data collected through our website and services. As data controller, we determine the purposes and means of processing your personal data.
        </p>
        <p>
          For any GDPR-related inquiries, please contact us at:{" "}
          <a href="mailto:privacy@inagenai.com" className="text-[#6b7280] hover:text-[#0a0a0a] transition-colors duration-150">
            privacy@inagenai.com
          </a>
        </p>
      </Section>

      <Section title="3. Legal Basis for Processing">
        <p>We process personal data only where we have a valid legal basis to do so. The legal bases we rely on include:</p>
        <ul>
          <li><strong>Consent</strong> — where you have given us clear consent to process your personal data for a specific purpose, such as signing up for our waitlist or newsletter</li>
          <li><strong>Legitimate interests</strong> — where processing is necessary for our legitimate business interests, provided those interests are not overridden by your rights and interests</li>
          <li><strong>Contract</strong> — where processing is necessary to perform a contract we have with you, or to take steps at your request before entering into a contract</li>
          <li><strong>Legal obligation</strong> — where we are required to process your data to comply with applicable law</li>
        </ul>
      </Section>

      <Section title="4. Data We Collect">
        <p>We collect only the minimum personal data necessary to provide our services. This may include:</p>
        <ul>
          <li>Email address (when you join our waitlist or contact us)</li>
          <li>Technical data such as IP address, browser type, and usage information collected automatically via cookies and analytics tools</li>
        </ul>
        <p>
          We do not collect sensitive personal data (such as racial or ethnic origin, health data, or biometric data) unless explicitly required and consented to.
        </p>
      </Section>

      <Section title="5. Your Rights Under GDPR">
        <p>If you are located in the EU or EEA, you have the following rights regarding your personal data:</p>
        <ul>
          <li><strong>Right of access</strong> — you have the right to request a copy of the personal data we hold about you</li>
          <li><strong>Right to rectification</strong> — you have the right to request correction of inaccurate or incomplete personal data</li>
          <li><strong>Right to erasure</strong> — you have the right to request deletion of your personal data in certain circumstances (&ldquo;right to be forgotten&rdquo;)</li>
          <li><strong>Right to restriction of processing</strong> — you have the right to request that we restrict the processing of your personal data in certain circumstances</li>
          <li><strong>Right to data portability</strong> — you have the right to receive your personal data in a structured, commonly used, machine-readable format</li>
          <li><strong>Right to object</strong> — you have the right to object to processing based on legitimate interests or for direct marketing purposes</li>
          <li><strong>Right to withdraw consent</strong> — where processing is based on consent, you have the right to withdraw that consent at any time without affecting the lawfulness of prior processing</li>
          <li><strong>Rights related to automated decision-making</strong> — you have the right not to be subject to decisions based solely on automated processing that produce significant effects on you</li>
        </ul>
        <p>
          To exercise any of these rights, please contact us at{" "}
          <a href="mailto:privacy@inagenai.com" className="text-[#6b7280] hover:text-[#0a0a0a] transition-colors duration-150">
            privacy@inagenai.com
          </a>
          . We will respond to your request within 30 days as required by the GDPR.
        </p>
      </Section>

      <Section title="6. Data Retention">
        <p>
          We retain personal data only for as long as necessary to fulfill the purposes for which it was collected, or as required by law. When data is no longer needed, we securely delete or anonymize it. The specific retention period depends on the nature of the data and the purpose of processing.
        </p>
      </Section>

      <Section title="7. International Data Transfers">
        <p>
          If we transfer your personal data outside the EU or EEA, we ensure appropriate safeguards are in place to protect your data in accordance with GDPR requirements. These may include standard contractual clauses approved by the European Commission, adequacy decisions, or other lawful transfer mechanisms.
        </p>
      </Section>

      <Section title="8. Third-Party Processors">
        <p>
          We may share personal data with trusted third-party service providers who process data on our behalf (data processors). We ensure all processors are bound by data processing agreements that comply with GDPR requirements and provide sufficient guarantees regarding data protection.
        </p>
        <p>
          Our third-party processors may include email and communication service providers, analytics platforms, and infrastructure providers. We only share the minimum data necessary for each processor to perform their service.
        </p>
      </Section>

      <Section title="9. Cookies and Tracking">
        <p>
          We use cookies and similar tracking technologies on our website. Where required by law, we obtain your consent before placing non-essential cookies. You can manage your cookie preferences through your browser settings at any time.
        </p>
        <p>
          We use analytics tools (including Google Analytics) to understand how visitors use our site. These tools may process personal data such as IP addresses. Where applicable, we have configured these tools to anonymize data in compliance with GDPR.
        </p>
      </Section>

      <Section title="10. Data Security">
        <p>
          We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, accidental loss, destruction, or damage. These measures are reviewed and updated regularly to maintain an appropriate level of security.
        </p>
      </Section>

      <Section title="11. Data Breach Notification">
        <p>
          In the event of a personal data breach that is likely to result in a risk to your rights and freedoms, we will notify the relevant supervisory authority within 72 hours of becoming aware of the breach, as required by the GDPR. Where the breach is likely to result in a high risk to your rights and freedoms, we will also notify you directly without undue delay.
        </p>
      </Section>

      <Section title="12. Right to Lodge a Complaint">
        <p>
          If you believe we have not handled your personal data in accordance with the GDPR, you have the right to lodge a complaint with your local data protection supervisory authority. In the EU, you can find your local authority through the{" "}
          <a
            href="https://edpb.europa.eu/about-edpb/about-edpb/members_en"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6b7280] hover:text-[#0a0a0a] transition-colors duration-150"
          >
            European Data Protection Board
          </a>
          .
        </p>
        <p>
          We do, however, encourage you to contact us first so we have an opportunity to address your concerns directly.
        </p>
      </Section>

      <Section title="13. Changes to This Page">
        <p>
          We may update this GDPR page from time to time to reflect changes in our practices or legal requirements. We will update the &ldquo;Last updated&rdquo; date when we do so. We encourage you to review this page periodically.
        </p>
      </Section>

      <Section title="14. Contact Us">
        <p>For any GDPR-related questions or to exercise your rights, please contact:</p>
        <p className="mt-3 font-medium text-[#0a0a0a]">
          InagenAI — Data Privacy<br />
          <a href="mailto:privacy@inagenai.com" className="text-[#6b7280] hover:text-[#0a0a0a] transition-colors duration-150">
            privacy@inagenai.com
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
