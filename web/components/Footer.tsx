import Link from "next/link";
import {
  FiMail,
  FiAlertCircle,
  FiZap,
  FiFileText,
  FiDollarSign,
  FiHelpCircle,
  FiClock,
} from "react-icons/fi";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
        {/* Brand Info */}
        <div className="flex flex-col">
          <h3 className="font-bold text-xl mb-4 text-slate-900">UniCore</h3>
          <p className="text-sm text-gray-500 leading-relaxed">
            The all-in-one dashboard for modern creators. Post once, reach
            everywhere.
          </p>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="font-bold text-sm uppercase tracking-wider text-slate-400 mb-5">
            Contact Us
          </h3>
          <div className="space-y-4">
            <p className="flex items-center gap-3 text-sm text-gray-600">
              <FiMail className="text-purple-500 text-lg" />
              <span className="font-medium">taki.unicore@gmail.com</span>
            </p>
            <p className="flex items-center gap-3 text-sm text-gray-500">
              <FiClock className="text-gray-400 text-lg" />
              <span>Reply within 3-5 days</span>
            </p>
          </div>
        </div>

        {/* Customer Service / Feedback */}
        <div>
          <h3 className="font-bold text-sm uppercase tracking-wider text-slate-400 mb-5">
            Support & Feedback
          </h3>
          <ul className="space-y-3 text-sm text-gray-600">
            <li>
              <Link
                href="/report-bug"
                className="flex items-center gap-2 hover:text-purple-600 transition-colors"
              >
                <FiAlertCircle className="text-red-400" />
                Report a Bug
              </Link>
            </li>
            <li>
              <Link
                href="/feature-request"
                className="flex items-center gap-2 hover:text-purple-600 transition-colors"
              >
                <FiZap className="text-yellow-500" />
                Request a Feature
              </Link>
            </li>
            <li>
              <Link
                href="/faq"
                className="flex items-center gap-2 hover:text-purple-600 transition-colors"
              >
                <FiHelpCircle />
                Help Center / FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-bold text-sm uppercase tracking-wider text-slate-400 mb-5">
            Legal
          </h3>
          <ul className="space-y-3 text-sm text-gray-600">
            <li>
              <Link
                href="/terms"
                className="flex items-center gap-2 hover:text-purple-600 transition-colors"
              >
                <FiFileText />
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                href="/privacy"
                className="flex items-center gap-2 hover:text-purple-600 transition-colors"
              >
                <FiFileText />
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/refund-policy"
                className="flex items-center gap-2 hover:text-purple-600 transition-colors"
              >
                <FiDollarSign />
                Refund Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-gray-200">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>© {currentYear} UniCore. Operated by Takekuni Tanemori.</p>
          <p>All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
