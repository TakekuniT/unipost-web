import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { FiShare2, FiClock, FiVideo } from "react-icons/fi";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />

      {/* HERO */}
      <Hero
        title="Sync Your Socials with UniCore"
        subtitle="Schedule once, publish everywhere. UniCore helps creators automate posting to TikTok, YouTube, Instagram, and more — all from one clean dashboard."
      />

      {/* FEATURES */}
      <section
        id="features"
        className="py-28 bg-gradient-to-b from-slate-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">
              Built for Modern Creators
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Powerful automation tools designed to save time and grow faster.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<FiShare2 />}
              title="Multi-Platform Sync"
              desc="Post once and publish everywhere. UniCore automatically adapts your content for each platform."
            />
            <FeatureCard
              icon={<FiClock />}
              title="Smart Scheduling"
              desc="Queue content ahead of time and publish at the perfect moment — even while you're offline."
            />
            <FeatureCard
              icon={<FiVideo />}
              title="Clean Exports"
              desc="Remove watermarks and branding to deliver professional, platform-ready videos."
            />
          </div>
        </div>
      </section>

      {/* PRICING */}
      <Pricing />

      <Footer />
    </main>
  );
}

/* ---------------- Feature Card ---------------- */

function FeatureCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="group relative p-8 bg-white rounded-3xl border border-slate-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-purple-50 text-purple-600 mb-6 group-hover:scale-105 transition">
        <span className="text-2xl">{icon}</span>
      </div>

      <h3 className="text-xl font-bold mb-3">{title}</h3>

      <p className="text-slate-600 leading-relaxed">{desc}</p>

      {/* subtle hover ring */}
      <div className="absolute inset-0 rounded-3xl ring-1 ring-transparent group-hover:ring-purple-500/20 transition pointer-events-none" />
    </div>
  );
}
