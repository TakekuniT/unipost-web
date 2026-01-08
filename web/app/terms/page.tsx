import {
  FiFileText,
  FiUserCheck,
  FiShield,
  FiAlertTriangle,
} from "react-icons/fi";

export default function TermsOfService() {
  return (
    <main className="bg-white">
      <div className="max-w-4xl mx-auto py-24 px-6">
        <header className="mb-16">
          <h1 className="text-4xl font-black text-slate-900 mb-4">
            Terms of Service
          </h1>
          <p className="text-slate-600">
            These Terms govern your access to and use of the UniCore
            application.
          </p>
        </header>

        <Section icon={<FiFileText />} title="1. Acceptance of Terms">
          By accessing or using UniCore, you agree to be bound by these Terms of
          Service. If you do not agree to these Terms, you may not use the
          application.
        </Section>

        <Section icon={<FiUserCheck />} title="2. Description of Service">
          UniCore is a software application that enables users to manage and
          publish content to third-party social media platforms such as
          Instagram, YouTube, and TikTok. UniCore only performs actions
          explicitly authorized by the user.
        </Section>

        {/* 🔒 UPDATED USER RESPONSIBILITIES */}
        <Section icon={<FiShield />} title="3. User Responsibilities">
          You are solely responsible for all content you create, upload, or
          publish using UniCore.
          <ul className="list-disc ml-6 mt-4 space-y-2 text-slate-600">
            <li>
              <strong>Compliance with Platform Rules:</strong> You agree to
              comply with the Community Guidelines, Terms of Service, and API
              policies of all connected platforms, including but not limited to
              YouTube&apos;s Terms of Service and TikTok&apos;s Community
              Guidelines.
            </li>

            <li>
              <strong>No Spam or Abuse:</strong> You may not use UniCore to
              distribute spam, engage in deceptive or &quot;get rich quick&quot;
              schemes, artificially manipulate engagement, or post content that
              violates third-party intellectual property or copyright laws.
            </li>
          </ul>
        </Section>

        <Section icon={<FiAlertTriangle />} title="4. Disclaimer of Warranties">
          UniCore is provided on an &quot;as-is&quot; and
          &quot;as-available&quot; basis. We make no warranties regarding
          uninterrupted service, availability, or specific results from use of
          the application.
        </Section>

        <Section icon={<FiAlertTriangle />} title="5. Limitation of Liability">
          To the maximum extent permitted by law, UniCore shall not be liable
          for any indirect, incidental, special, or consequential damages
          arising out of or related to your use of the service.
        </Section>

        <Section icon={<FiFileText />} title="6. Changes to These Terms">
          We may update these Terms from time to time. Updates will be posted on
          this page, and continued use of UniCore constitutes acceptance of the
          revised Terms.
        </Section>

        <Section icon={<FiFileText />} title="7. Contact">
          If you have questions about these Terms, please contact{" "}
          <span className="font-semibold text-slate-900">
            takekuni@tanemori.org
          </span>
          .
        </Section>

        <p className="mt-16 text-sm text-slate-500">
          Last updated: January 2026
        </p>
      </div>
    </main>
  );
}

/* ---------------- Section Component ---------------- */

function Section({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-12">
      <div className="flex items-center gap-3 mb-4">
        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-purple-50 text-purple-600">
          {icon}
        </div>
        <h2 className="text-xl font-bold text-slate-900">{title}</h2>
      </div>
      <div className="text-slate-600 leading-relaxed">{children}</div>
    </section>
  );
}
