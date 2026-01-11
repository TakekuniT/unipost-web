"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FiZap, FiChevronLeft } from "react-icons/fi";
import Link from "next/link";
import { submitFeature } from "../actions";

export default function RequestFeature() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(formData: FormData) {
    setLoading(true);
    console.log("formData", formData);
    setLoading(false);
    alert("Great idea! We've added it to our roadmap.");
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />

      <div className="max-w-2xl mx-auto px-6 py-20">
        <Link
          href="/"
          className="inline-flex items-center text-sm text-slate-500 hover:text-purple-600 mb-8 transition"
        >
          <FiChevronLeft className="mr-1" /> Back to Home
        </Link>

        <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center text-2xl">
              <FiZap />
            </div>
            <div>
              <h1 className="text-2xl font-black">Suggest a Feature</h1>
              <p className="text-slate-500">What should we build next?</p>
            </div>
          </div>

          <form
            action={async (formData) => {
              try {
                await submitFeature(formData);
                alert("Successfully submitted!");
              } catch (e) {
                alert("Something went wrong.");
              }
            }}
            className="space-y-6"
          >
            <div>
              <label className="block text-sm font-semibold mb-2">
                Feature Name *
              </label>
              <input
                name="feature"
                required
                placeholder="e.g. LinkedIn Integration"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-purple-500 outline-none transition"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">
                How would this help you?
              </label>
              <textarea
                name="description"
                rows={5}
                required
                placeholder="Tell us why you need this and how it would improve your workflow..."
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-purple-500 outline-none transition"
              />
            </div>

            <button
              disabled={loading}
              className="w-full py-4 bg-purple-600 text-white font-bold rounded-2xl hover:bg-purple-700 shadow-lg shadow-purple-200 transition-all active:scale-[0.98] disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Feedback"}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </main>
  );
}
