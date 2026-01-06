import Link from "next/link";
import { FiMail, FiHelpCircle, FiDollarSign, FiFileText } from "react-icons/fi";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
        {/* Brand Info */}
        <div>
          <h3 className="font-bold text-lg mb-4">UniPost</h3>
          <p className="text-sm text-gray-500">
            Simplifying social media publishing for modern creators.
          </p>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="font-bold text-lg mb-4">Customer Service</h3>
          <p className="flex items-center gap-2 text-sm text-gray-600 mb-2">
            <FiMail className="text-gray-400" />
            takekuni@tanemori.org
          </p>
          <p className="text-sm text-gray-500">
            Response time: Within 3-5 business days
          </p>
        </div>

        {/* Product */}
        {/* <div>
          <h3 className="font-bold text-lg mb-4">Product</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <Link
                href="/pricing"
                className="flex items-center gap-2 hover:text-purple-600"
              >
                <FiDollarSign />
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="/faq"
                className="flex items-center gap-2 hover:text-purple-600"
              >
                <FiHelpCircle />
                FAQ
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="flex items-center gap-2 hover:text-purple-600"
              >
                <FiMail />
                Contact
              </Link>
            </li>
          </ul>
        </div> */}

        {/* Legal */}
        <div>
          <h3 className="font-bold text-lg mb-4">Legal</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <Link
                href="/terms"
                className="flex items-center gap-2 hover:text-purple-600"
              >
                <FiFileText />
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                href="/privacy"
                className="flex items-center gap-2 hover:text-purple-600"
              >
                <FiFileText />
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/refund-policy"
                className="flex items-center gap-2 hover:text-purple-600"
              >
                <FiFileText />
                Refund & Cancellation Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-gray-200 text-center text-xs text-gray-400">
        © {currentYear} UniPost. Operated by Takekuni Tanemori. All rights
        reserved.
      </div>
    </footer>
  );
}
