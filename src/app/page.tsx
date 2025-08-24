import Link from "next/link";

type Hotel = {
  id: string;
  name: string;
  location: string;
  pricePerNight: number;
  img: string;
  accent: string;
};

function getRandomHotels(): Hotel[] {
  const base: Omit<Hotel, "pricePerNight">[] = [
    {
      id: "selene",
      name: "Selene Suites",
      location: "Low Earth Orbit",
      img: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1400&auto=format&fit=crop",
      accent: "from-fuchsia-400/40 to-cyan-300/30",
    },
    {
      id: "aurora",
      name: "Aurora Halo",
      location: "Polar Orbit",
      img: "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?q=80&w=1400&auto=format&fit=crop",
      accent: "from-emerald-300/40 to-sky-300/30",
    },
    {
      id: "odyssey",
      name: "Odyssey Ring",
      location: "Geostationary",
      img: "https://images.unsplash.com/photo-1462332420958-a05d1e002413?q=80&w=1400&auto=format&fit=crop",
      accent: "from-violet-400/40 to-indigo-300/30",
    },
    {
      id: "nova",
      name: "Nova Vista",
      location: "Equatorial",
      img: "https://images.unsplash.com/photo-1451186859696-371d9477be93?q=80&w=1400&auto=format&fit=crop",
      accent: "from-pink-400/40 to-orange-300/30",
    },
    {
      id: "elysium",
      name: "Elysium Dock",
      location: "Sun-synchronous",
      img: "https://images.unsplash.com/photo-1447433819943-74a20887a81e?q=80&w=1400&auto=format&fit=crop",
      accent: "from-rose-400/40 to-amber-300/30",
    },
    {
      id: "zenith",
      name: "Zenith Arc",
      location: "High Earth Orbit",
      img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1400&auto=format&fit=crop",
      accent: "from-cyan-300/40 to-blue-400/30",
    },
  ];

  const shuffled = [...base].sort(() => Math.random() - 0.5);
  return shuffled.map((h) => ({
    ...h,
    pricePerNight: Math.round(12000 + Math.random() * 18000),
  }));
}

export default function Page() {
  const bgUrl = "https://i.ibb.co/DHmzX3kq/image.png";
  const hotels = getRandomHotels();

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
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(0,0,0,.45) 0%, rgba(0,0,0,.65) 40%, rgba(0,0,0,.85) 100%)" }} />

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

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black to-transparent" />
      </section>

      <section id="hotels" className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Discover more orbiting stays</h2>
            <p className="mt-1 text-white/70">Handpicked hotels floating above Earth.</p>
          </div>
          <Link href="#pricing" className="btn btn-secondary btn-sm">View pricing</Link>
        </div>

        <div className="grid auto-rows-[14rem] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-6">
          <Card hotel={hotels[0]} className="lg:col-span-4 lg:row-span-2" />
          <Card hotel={hotels[1]} className="lg:col-span-2" compact />
          <Card hotel={hotels[2]} className="lg:col-span-2" compact />
          <Card hotel={hotels[3]} className="lg:col-span-3" />
          <Card hotel={hotels[4]} className="lg:col-span-3 lg:row-span-2" />
          <Card hotel={hotels[5]} className="lg:col-span-3" compact />
        </div>
      </section>

      <section id="tour" className="relative mx-auto max-w-7xl px-6 pb-20">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Take a quick orbital tour</h2>
            <p className="mt-1 text-white/70">Vibrant glow, crisp playback, and immersive vibes.</p>
          </div>
          <Link href="#reserve" className="btn btn-primary btn-sm">Get early access</Link>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute -top-16 -left-10 h-60 w-60 rounded-full bg-fuchsia-500/30 blur-3xl" aria-hidden />
          <div className="pointer-events-none absolute -bottom-10 -right-6 h-72 w-72 rounded-full bg-cyan-400/30 blur-3xl" aria-hidden />
          <div className="pointer-events-none absolute top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-400/20 blur-3xl" aria-hidden />

          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-glow">
            <video
              className="aspect-video w-full"
              controls
              muted
              loop
              playsInline
              autoPlay
              poster="https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?q=80&w=1200&auto=format&fit=crop"
            >
              <source src="https://assets.mixkit.co/videos/preview/mixkit-planet-earth-rotating-1006-large.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

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

function Card({ hotel, className = "", compact = false }: { hotel: Hotel; className?: string; compact?: boolean }) {
  return (
    <article className={`group relative overflow-hidden rounded-2xl glass ${className}`}>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${hotel.img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "saturate(1.1)",
        }}
        aria-hidden
      />
      <div className={`absolute inset-0 bg-gradient-to-t ${hotel.accent} from-40% to-90%`} aria-hidden />
      <div className="absolute inset-0 bg-black/40" aria-hidden />

      <div className="relative z-10 flex h-full flex-col justify-end p-5">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,.8)]" />
          <span className="text-xs uppercase tracking-wide text-white/80">{hotel.location}</span>
        </div>
        <h3 className={`mt-2 font-bold ${compact ? "text-lg" : "text-2xl"}`}>{hotel.name}</h3>
        <div className="mt-1 flex items-center justify-between">
          <p className="text-white/85">
            <span className="text-sm text-white/70">from</span>{" "}
            <span className="font-semibold">${hotel.pricePerNight.toLocaleString()}</span>
            <span className="text-sm text-white/70">/night</span>
          </p>
          <Link href="#" className="btn btn-secondary btn-sm">Details</Link>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden>
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
        <div className="absolute inset-0 ring-1 ring-white/10" />
      </div>
    </article>
  );
}
