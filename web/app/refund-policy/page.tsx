export default function RefundPolicy() {
  return (
    <div className="max-w-4xl mx-auto py-20 px-6 prose prose-purple">
      <h1 className="text-3xl font-bold mb-8">
        Refund and Cancellation Policy
      </h1>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">1. Subscriptions</h2>
        <p className="text-gray-600">
          UniPost offers a monthly subscription service for our Creator Pro
          plan. By subscribing, you agree to a recurring monthly charge.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">2. Cancellation</h2>
        <p className="text-gray-600">
          You can cancel your subscription at any time through your Account
          Settings in the UniPost app. Upon cancellation, you will retain access
          to Creator Pro features until the end of your current billing period.
          No further charges will be applied after cancellation.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">3. Refunds</h2>
        <p className="text-gray-600">
          As a digital service, UniPost generally does not offer refunds for
          billing periods already started. However, if you believe there has
          been a billing error, please contact us at
          <strong> support@unipost.app</strong> within 14 days of the charge.
          Approved refunds will be processed back to your original payment
          method within 5–10 business days.
        </p>
      </section>
    </div>
  );
}
