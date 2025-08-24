import Link from "next/link";

export default function Page() {
  const bgUrl = "https://i.ibb.co/DHmzX3kq/image.png";

  return (
    <main>
      <a href="#content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-black/70 text-white px-4 py-2 rounded">Skip to content</a>

      <section
        aria-label="Spacy orbital hotel hero"
        className="relative min-h-screen w-full overflow-hidden"
        style={{
          backgroundImage: `url(${bgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(0,0,0,.45) 0%, rgba(0,0,0,.65) 40%, rgba(0,0,0,.85) 100%)" }} />

        {/* Top bar */}
        <header className="relative z-10">
          <div className="mx-auto max-w-7xl px-6 pt-6">
            <div className="flex items-center justify-between rounded-full border border-white/10 bg-black/30 px-3 py-2 backdrop-blur supports-[backdrop-filter]:bg-black/30">
              <Link href="#" className="flex items-center gap-2">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-tr from-brand to-brand-accent shadow-glow" aria-hidden="true" />
                <span className="font-semibold tracking-tight">Spacy</span>
              </Link>
              <nav aria-label="Top bar" className="flex items-center gap-2">
                <Link href="#pricing" className="btn btn-secondary btn-sm">Pricing</Link>
                <Link href="/dashboard" className="btn btn-primary btn-sm">Dashboard</Link>
              </nav>
            </div>
          </div>
        </header>

        {/* Decorative gradient accents */}
        <div className="pointer-events-none absolute -top-40 -right-40 h-96 w-96 rounded-full bg-brand/30 blur-3xl twinkle" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-[28rem] w-[28rem] rounded-full bg-brand-accent/20 blur-3xl twinkle" />

        <div id="content" className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">
          <div className="mx-auto max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm text-white/80 backdrop-blur">
              <span className="h-2 w-2 animate-pulse rounded-full bg-brand" />
              Boarding soon • 2027
            </div>

            <h1 className="text-balance text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">
              Welcome to Spacy
            </h1>
            <p className="mt-4 text-pretty text-lg text-white/80 sm:mt-6 sm:text-xl">
              Earth’s first orbiting luxury hotel. Wake to the curve of our blue planet, dine among the stars, and sleep in serene microgravity suites.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <Link href="#reserve" className="btn btn-primary">
                Reserve Priority Access
              </Link>
              <Link href="#learn" className="btn btn-secondary">
                Explore the Station
              </Link>
            </div>

            <div className="mt-10 flex items-center justify-center gap-6 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Zero-gravity suites
              </div>
              <div className="hidden h-1 w-1 rounded-full bg-white/40 sm:block" />
              <div className="hidden items-center gap-2 sm:flex">
                <span className="h-1.5 w-1.5 rounded-full bg-sky-300" />
                Panoramic Earth views
              </div>
              <div className="hidden h-1 w-1 rounded-full bg-white/40 md:block" />
              <div className="hidden items-center gap-2 md:flex">
                <span className="h-1.5 w-1.5 rounded-full bg-pink-400" />
                Aurora lounge & stargazing
              </div>
            </div>
          </div>
        </div>

        {/* Subtle bottom fade for smooth scroll */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black to-transparent" />
      </section>

      {/* Anchors for CTAs (stub) */}
      <section id="reserve" className="bg-black px-6 py-16 text-center text-white/80">
        <p className="mx-auto max-w-2xl">
          Priority reservations open soon. This is a preview anchor section.
        </p>
      </section>
      <section id="learn" className="bg-black px-6 pb-16 text-center text-white/80">
        <p className="mx-auto max-w-2xl">
          Learn more about life aboard Spacy. This is a preview anchor section.
        </p>
      </section>
      <section id="pricing" className="bg-black px-6 pb-24 text-center text-white/80">
        <p className="mx-auto max-w-2xl">
          Pricing details arriving soon. This is a preview anchor section.
        </p>
      </section>
    </main>
  );
}
