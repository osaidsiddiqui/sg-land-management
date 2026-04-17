import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const reviews = [
  {
    name: "Daniel R.",
    location: "Johnson City, TN",
    text: "S.G. Land Management cleared 4 acres of overgrown brush and stumps for our new build. Crew was on time, professional, and left the site spotless. Free estimate was honest — final price matched exactly.",
  },
  {
    name: "Megan & Cole H.",
    location: "Gray, TN",
    text: "Best driveway work we've ever had done. They graded, hauled in fresh gravel, and fixed the drainage issue we'd been fighting for years. Worth every penny — and the 20% discount sealed it.",
  },
  {
    name: "Tom B.",
    location: "Kingsport, TN",
    text: "Hired them for a full house pad and culvert install. Great communication start to finish. They know East Tennessee dirt and it shows. Will absolutely call again.",
  },
  {
    name: "Sarah M.",
    location: "Mountain City, TN",
    text: "Demolition of an old barn and full site cleanup — done in two days. Fair price, hard workers, no shortcuts. These are the guys you want on your land.",
  },
  {
    name: "Jake P.",
    location: "Bristol, TN",
    text: "Built a 60-foot retaining wall on a tough slope. Holding strong through two heavy rain seasons. Quality work from a local crew that actually cares.",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const next = () => setI((p) => (p + 1) % reviews.length);
  const prev = () => setI((p) => (p - 1 + reviews.length) % reviews.length);

  useEffect(() => {
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, []);

  const r = reviews[i];

  return (
    <section className="relative grain bg-cream-2 py-20">
      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <SectionHeading>What Our Customers Say</SectionHeading>

        <div className="relative mt-12">
          <div
            key={i}
            className="bg-cream border-2 border-ink p-8 md:p-12 shadow-[8px_8px_0_var(--ink)] fade-up"
          >
            <div className="flex justify-center gap-1 text-rust">
              {Array.from({ length: 5 }).map((_, k) => (
                <Star key={k} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <p className="font-display italic text-xl md:text-2xl text-ink mt-6 text-center leading-relaxed">
              "{r.text}"
            </p>
            <div className="mt-8 text-center">
              <div className="font-rye text-rust text-lg">{r.name}</div>
              <div className="text-warm text-sm mt-1">📍 {r.location}</div>
            </div>
          </div>

          <button
            onClick={prev}
            aria-label="Previous review"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-14 bg-ink text-cream w-11 h-11 rounded-full flex items-center justify-center hover:bg-rust transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            aria-label="Next review"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-14 bg-ink text-cream w-11 h-11 rounded-full flex items-center justify-center hover:bg-rust transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {reviews.map((_, k) => (
            <button
              key={k}
              onClick={() => setI(k)}
              aria-label={`Go to review ${k + 1}`}
              className={`h-2 rounded-full transition-all ${
                k === i ? "w-8 bg-rust" : "w-2 bg-ink/30 hover:bg-ink/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
