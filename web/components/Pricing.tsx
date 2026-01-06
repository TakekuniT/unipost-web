export default function Pricing() {
  return (
    <section id="pricing" className="py-20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold mb-4">Transparent Pricing</h2>
        <p className="text-gray-600 mb-12 text-lg">
          Choose the plan that fits your creative workflow.
        </p>

        <div className="p-10 border-2 border-purple-600 rounded-3xl bg-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-purple-600 text-white px-4 py-1 text-sm font-bold rounded-bl-lg">
            POPULAR
          </div>
          <h3 className="text-2xl font-bold mb-2">Creator Pro</h3>
          <div className="flex justify-center items-baseline mb-6">
            <span className="text-5xl font-extrabold">$9.99</span>
            <span className="text-gray-500 ml-2">/month</span>
          </div>

          <ul className="text-left space-y-4 mb-10">
            <li className="flex items-center">
              <CheckIcon /> Unlimited Posts
            </li>
            <li className="flex items-center">
              <CheckIcon /> Full Scheduling Access
            </li>
            <li className="flex items-center">
              <CheckIcon /> Sync up to 5 Platforms
            </li>
            <li className="flex items-center">
              <CheckIcon /> No Watermarks
            </li>
          </ul>

          <button className="w-full bg-purple-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-purple-700 transition">
            Get Started with Pro
          </button>
        </div>
      </div>
    </section>
  );
}

const CheckIcon = () => (
  <svg
    className="w-5 h-5 text-green-500 mr-3"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5 13l4 4L19 7"
    />
  </svg>
);
