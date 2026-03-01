export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-24">
      {/* Hero */}
      <section className="max-w-3xl w-full text-center space-y-6">
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-text-secondary">
          Athlete Mental Performance
        </p>
        <h1 className="font-syne text-5xl md:text-7xl font-bold leading-tight tracking-tight">
          Build your
          <br />
          <span className="text-accent">mental edge.</span>
        </h1>
        <p className="text-lg text-text-secondary max-w-xl mx-auto leading-relaxed">
          Mettle helps athletes develop clarity, confidence, and consistency
          under pressure — the mental skills that separate good from great.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <a
            href="/assessment"
            className="inline-block bg-accent hover:bg-accent-dark text-white font-syne font-semibold px-8 py-4 transition-colors"
          >
            Take the Performance Readiness Map
          </a>
          <a
            href="/coaching"
            className="inline-block border border-border text-white hover:border-white font-syne font-semibold px-8 py-4 transition-colors"
          >
            Work with a Coach
          </a>
        </div>
      </section>

      {/* TODO: Add feature sections, testimonials, pricing, Coach Alex CTA */}
    </main>
  );
}
