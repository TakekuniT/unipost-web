import { FiRefreshCcw, FiXCircle, FiCreditCard } from "react-icons/fi";

export default function RefundPolicy() {
  return (
    <main className="bg-white">
      <div className="max-w-4xl mx-auto py-24 px-6">
        {/* Header */}
        <header className="mb-16">
          <h1 className="text-4xl font-black text-slate-900 mb-4">
            Refund & Cancellation Policy
          </h1>
          <p className="text-slate-600">
            This policy explains how cancellations and refunds work for UniPost
            subscriptions.
          </p>
        </header>

        {/* Subscriptions */}
        <Section icon={<FiCreditCard />} title="1. Subscriptions">
          UniPost offers a recurring monthly subscription for the Creator Pro
          plan. By subscribing, you authorize us to charge your selected payment
          method on a monthly basis until the subscription is canceled.
        </Section>

        {/* Cancellation */}
        <Section icon={<FiXCircle />} title="2. Cancellation">
          You may cancel your subscription at any time through your account
          settings in the UniPost app. After cancellation, you will continue to
          have access to paid features until the end of your current billing
          cycle. No additional charges will occur after that period.
        </Section>

        {/* Refunds */}
        <Section icon={<FiRefreshCcw />} title="3. Refunds">
          Because UniPost is a digital service, we generally do not provide
          refunds for partially used billing periods. If you believe you were
          charged in error, please contact us at{" "}
          <span className="font-semibold text-slate-900">
            takekuni@tanemori.org
          </span>{" "}
          within 14 days of the charge. If approved, refunds will be issued to
          the original payment method within 5–10 business days.
        </Section>

        {/* Footer note */}
        <p className="mt-16 text-sm text-slate-500">
          Last updated: {new Date().toLocaleDateString()}
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
      <p className="text-slate-600 leading-relaxed">{children}</p>
    </section>
  );
}
