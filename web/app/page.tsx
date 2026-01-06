import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section: Explains the "Description of Goods" */}
      <Hero
        title="Sync Your Socials with UniPost"
        subtitle="The all-in-one automation tool for creators. Schedule, sync, and post to TikTok, YouTube, Instagram, and more from a single dashboard."
      />

      {/* Features Section: Helps Stripe understand the product value */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Built for Growth
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon="🚀"
              title="Multi-Platform Sync"
              desc="Post once, publish everywhere. We handle the formatting for each platform."
            />
            <FeatureCard
              icon="⏰"
              title="Smart Scheduling"
              desc="Queue your content for the perfect time, even while you're offline."
            />
            <FeatureCard
              icon="💎"
              title="Watermark Removal"
              desc="Export clean, professional videos without app branding."
            />
          </div>
        </div>
      </section>

      {/* Pricing Section: Mandatory for Stripe Verification */}
      <Pricing />

      <Footer />
    </main>
  );
}

function FeatureCard({
  icon,
  title,
  desc,
}: {
  icon: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100 transition hover:shadow-md">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{desc}</p>
    </div>
  );
}
