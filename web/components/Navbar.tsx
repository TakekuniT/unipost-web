import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b border-gray-100 py-4 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold text-purple-600 tracking-tight"
        >
          UniPost
        </Link>

        <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
          <Link href="#features" className="hover:text-purple-600 transition">
            Features
          </Link>
          <Link href="#pricing" className="hover:text-purple-600 transition">
            Pricing
          </Link>
          <Link
            href="/refund-policy"
            className="hover:text-purple-600 transition"
          >
            Refunds
          </Link>
        </div>

        <Link
          href="#pricing"
          className="bg-purple-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-purple-700 transition"
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
}
