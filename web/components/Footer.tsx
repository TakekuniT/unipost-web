import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {/* Brand Info */}
        <div>
          <h3 className="font-bold text-lg mb-4">UniPost</h3>
          <p className="text-sm text-gray-500">
            Simplifying social media for modern creators.
          </p>
        </div>

        {/* Support - STRIPE LOOKS FOR THIS */}
        <div>
          <h3 className="font-bold text-lg mb-4">Customer Service</h3>
          <p className="text-sm text-gray-600 mb-2">
            Email: support@unipost.app
          </p>
          <p className="text-sm text-gray-500">
            Response time: Within 24-48 hours
          </p>
        </div>

        {/* Legal Links - STRIPE LOOKS FOR THESE */}
        <div>
          <h3 className="font-bold text-lg mb-4">Legal</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <Link href="/terms" className="hover:text-purple-600">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-purple-600">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/refund-policy" className="hover:text-purple-600">
                Refund Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-gray-200 text-center text-xs text-gray-400">
        © {currentYear} UniPost. All rights reserved.
      </div>
    </footer>
  );
}
