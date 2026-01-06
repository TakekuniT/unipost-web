export default function Hero({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <section className="relative py-24 overflow-hidden bg-white">
      {/* Decorative background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-50 via-transparent to-transparent -z-10" />

      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
          {title}
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-purple-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-lg hover:shadow-purple-200 transition-all">
            Start Syncing for Free
          </button>
          <button className="bg-white text-gray-700 border border-gray-200 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-50 transition">
            View Live Demo
          </button>
        </div>

        {/* Visual proof: List your supported platforms */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 opacity-40 grayscale font-semibold text-gray-500 uppercase tracking-widest text-xs">
          <span>YouTube</span>
          <span>TikTok</span>
          <span>Instagram</span>
          <span>Facebook</span>
          <span>LinkedIn</span>
        </div>
      </div>
    </section>
  );
}
