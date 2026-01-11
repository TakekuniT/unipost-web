"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FiAlertCircle, FiChevronLeft } from "react-icons/fi";
import Link from "next/link";
import { submitBug } from "../actions";

export default function ReportBug() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(formData: FormData) {
    setLoading(true);
    // Logic: await saveBugToDatabase(formData)
    console.log("formData", formData);
    setLoading(false);
    alert("Bug reported. Our team is on it!");
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
            <div className="w-12 h-12 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center text-2xl">
              <FiAlertCircle />
            </div>
            <div>
              <h1 className="text-2xl font-black">Report a Bug</h1>
              <p className="text-slate-500">Help us make UniCore perfect.</p>
            </div>
          </div>

          <form
            action={async (formData) => {
              try {
                await submitBug(formData);
                alert("Successfully submitted!");
              } catch (e) {
                alert("Something went wrong.");
              }
            }}
            className="space-y-6"
          >
            <div>
              <label className="block text-sm font-semibold mb-2">
                What happened? *
              </label>
              <input
                name="title"
                required
                placeholder="e.g. TikTok post failed to sync"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-purple-500 outline-none transition"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">
                Severity
              </label>
              <select
                name="severity"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-purple-500 outline-none transition bg-white"
              >
                <option value="low">Low - Visual glitch</option>
                <option value="medium">
                  Medium - Something isn't working right
                </option>
                <option value="high">High - App crashes / Can't post</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">
                Steps to reproduce
              </label>
              <textarea
                name="steps"
                rows={4}
                placeholder="1. Open dashboard&#10;2. Click upload&#10;3. App freezes..."
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-purple-500 outline-none transition"
              />
            </div>

            <button
              disabled={loading}
              className="w-full py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-purple-600 transition-all active:scale-[0.98] disabled:opacity-50"
            >
              {loading ? "Submitting..." : "Submit Bug Report"}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </main>
  );
}
