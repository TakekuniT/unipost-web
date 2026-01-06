import {
  FiLock,
  FiDatabase,
  FiShare2,
  FiShield,
  FiEdit3,
  FiMail,
  FiExternalLink,
} from "react-icons/fi";

export default function PrivacyPolicy() {
  return (
    <main className="bg-white">
      <div className="max-w-4xl mx-auto py-24 px-6">
        <header className="mb-16">
          <h1 className="text-4xl font-black text-slate-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-slate-600">
            This policy explains how UniPost handles data and privacy.
          </p>
        </header>

        <Section icon={<FiLock />} title="Overview">
          UniPost (formerly referred to as XPost during development) is a
          developer application used to test and manage social media content
          publishing across platforms such as Instagram, YouTube, and TikTok.
        </Section>

        <Section icon={<FiDatabase />} title="Information We Collect">
          UniPost does not collect, store, or sell personal user data. When you
          connect a social media account, we temporarily receive access tokens
          provided by the respective platform solely to perform actions you
          explicitly authorize, such as uploading content.
        </Section>

        <Section icon={<FiEdit3 />} title="How We Use Information">
          Information is used only to:
          <ul className="list-disc ml-6 mt-3 space-y-1 text-slate-600">
            <li>Publish content on behalf of the user</li>
            <li>Develop and test social media automation features</li>
            <li>Authenticate requests to third-party APIs</li>
          </ul>
        </Section>

        <Section icon={<FiDatabase />} title="Data Storage">
          UniPost does not permanently store personal information, login
          credentials, or access tokens beyond their required usage. Uploaded
          media files are processed temporarily and deleted after use.
        </Section>

        <Section icon={<FiShare2 />} title="Data Sharing">
          UniPost does not sell, trade, or share user data with third parties.
        </Section>

        {/* 🔐 THIRD-PARTY SERVICES + GOOGLE DISCLOSURE */}
        <Section icon={<FiShield />} title="Third-Party Services">
          UniPost interacts with third-party APIs including but not limited to:
          <ul className="list-disc ml-6 mt-3 space-y-1 text-slate-600">
            <li>Meta (Instagram and Facebook APIs)</li>
            <li>Google (YouTube API)</li>
            <li>TikTok API</li>
          </ul>
          <div className="mt-6 space-y-4 text-slate-600">
            <p>
              <strong>Google API Disclosure:</strong> UniPost&apos;s use and
              transfer of information received from Google APIs to any other app
              will adhere to the{" "}
              <a
                href="https://developers.google.com/terms/api-services-user-data-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 font-medium inline-flex items-center gap-1 hover:underline"
              >
                Google API Services User Data Policy
                <FiExternalLink className="text-sm" />
              </a>
              , including the Limited Use requirements.
            </p>

            <p>
              <strong>User Revocation:</strong> Users can revoke UniPost&apos;s
              access to their Google data at any time via the{" "}
              <a
                href="https://myaccount.google.com/permissions"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 font-medium inline-flex items-center gap-1 hover:underline"
              >
                Google Security Settings page
                <FiExternalLink className="text-sm" />
              </a>
              .
            </p>
          </div>
        </Section>

        <Section icon={<FiShield />} title="Data Security">
          Reasonable technical measures are used to protect data during
          processing. However, no system can be guaranteed to be completely
          secure, especially during development.
        </Section>

        <Section icon={<FiEdit3 />} title="Changes to This Policy">
          This Privacy Policy may be updated as the application evolves. Any
          changes will be reflected on this page.
        </Section>

        <Section icon={<FiMail />} title="Contact">
          If you have questions about this Privacy Policy, please contact{" "}
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
