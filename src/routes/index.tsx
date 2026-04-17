import { Link } from "react-router-dom";
import { SectionHeading } from "@/components/SectionHeading";
import { Testimonials } from "@/components/Testimonials";
import logo from "@/assets/sgland_logo.png";
import truck from "@/assets/truck-excavator.jpg";
import road from "@/assets/road-build.jpg";
import cleared from "@/assets/land-cleared.jpg";
import svcExcavation from "@/assets/svc-excavation.jpg";
import svcLandClearing from "@/assets/svc-land-clearing.jpg";
import svcTreeWork from "@/assets/svc-tree-work.jpg";

const services = [
  { img: svcExcavation, name: "Excavation", desc: "Residential & commercial earthmoving." },
  { img: svcLandClearing, name: "Land Clearing", desc: "Trees, brush & stumps cleared and hauled." },
  { img: svcTreeWork, name: "Tree Work", desc: "Removal, trimming & brush haul-off." },
  { img: "https://davcodirtworx.com/wp-content/uploads/2023/03/land-leveling-and-grading.jpeg", name: "Grade Work", desc: "Drainage, pads & driveway grading." },
  { img: "https://heattrak.com/cdn/shop/articles/driveway_construction.jpg?v=1567709188&width=2048", name: "Driveways & Repair", desc: "New installs & gravel restoration." },
  { img: "https://www.excavationcompanywacotx.com/wp-content/uploads/2024/11/house-pad-site-construction-1a.jpg", name: "Site Prep & House Pads", desc: "Cleared, graded & compacted to spec." },
  { img: "https://t4.ftcdn.net/jpg/01/40/32/03/360_F_140320329_pzh3Roco5doPHrT8RVuFPHGKWllXdocJ.jpg", name: "Demolition", desc: "Knock down, haul off, leave it clean." },
  { img: "https://weinsteinconstruction.com/wp-content/uploads/2024/09/How-to-calculate-the-cost-of-retaining-walls-in-los-angeles.jpg", name: "Retaining Walls", desc: "Hold the slope. Stop the washout." },
  { img: "https://reissearthworks.com/wp-content/uploads/2024/02/culvert-water-issue-install-scaled.jpg", name: "Culvert Installation", desc: "Drainage protection done right." },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative grain bg-darkbg text-cream overflow-hidden">
        {/* Background video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/hero-poster.jpg"
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        >
          <source src="/hero-video.webm" type="video/webm" />
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-darkbg/60" aria-hidden />
        <img src={logo} alt="" aria-hidden className="absolute inset-0 m-auto w-[420px] opacity-[0.06] pointer-events-none" />
        <svg viewBox="0 0 1440 200" className="absolute bottom-0 left-0 w-full opacity-30" preserveAspectRatio="none">
          <path d="M0,200 L0,140 L120,80 L260,130 L420,40 L560,110 L720,30 L880,120 L1040,60 L1200,130 L1340,70 L1440,110 L1440,200 Z" fill="#000" />
        </svg>
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-14 md:py-20 text-center">
          <p className="font-rye text-rust uppercase tracking-[0.4em] text-sm fade-up">— East Tennessee —</p>
          <h1 className="font-display font-black text-4xl md:text-6xl leading-[1.05] mt-4 fade-up">
            WE MOVE EARTH.<br />WE BUILD YOUR VISION.
          </h1>
          <p className="text-warm max-w-2xl mx-auto mt-4 text-base md:text-lg fade-up">
            Professional excavation, land clearing, demolition, and earthwork across East Tennessee. We show up, we dig in, we get it done right.
          </p>
          <div className="inline-block mt-5 bg-rust text-cream font-rye px-5 py-2 -rotate-2 pulse-soft text-xs md:text-sm shadow-lg">
            🔥 20% OFF ALL DIRT WORK — LIMITED TIME
          </div>
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <Link to="/contact" className="btn-rust">Get a Free Estimate</Link>
            <a href="tel:4235575377" className="btn-outline-cream">📞 423-557-5377</a>
          </div>
          <div className="mt-8 border-y border-cream/40 py-2 font-rye text-[10px] md:text-xs tracking-[0.2em] text-cream">
            FREE ESTIMATES · EAST TENNESSEE LOCALS · FULLY INSURED
          </div>
        </div>
      </section>

      {/* SERVICES SNAPSHOT */}
      <section className="relative grain bg-cream py-20">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <SectionHeading>Our Services</SectionHeading>
          <p className="text-center text-warm max-w-2xl mx-auto mt-4">Earthwork, clearing, demolition, and everything in between — handled by local crews who know East Tennessee land.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {services.map((s) => (
              <div key={s.name} className="svc-card bg-darkbg text-cream border-t-4 border-rust overflow-hidden flex flex-col">
                <div className="aspect-[4/3] overflow-hidden bg-ink">
                  <img src={s.img} alt={s.name} loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-rye text-xl">{s.name}</h3>
                  <p className="text-warm mt-2 text-sm flex-1">{s.desc}</p>
                  <Link to="/services" className="text-rust font-bold text-sm mt-4 inline-block">Learn More →</Link>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-warm mt-8 text-sm">Also: Footers · Trenching · Building Roads · Brush Haul Off</p>
        </div>
      </section>

      {/* DISCOUNT BANNER */}
      <section className="bg-rust text-cream text-center py-14 px-6">
        <h2 className="font-rye text-3xl md:text-4xl">🔥 20% DISCOUNT ON ALL DIRT WORK NEEDS 🔥</h2>
        <p className="mt-3 max-w-2xl mx-auto">Grading · Site Prep · Culverts · Land Clearing · Tree Work · Retaining Walls · Roads · Driveways</p>
        <a href="tel:4235575377" className="btn-ink mt-6 inline-block">Call for Free Quote: 423-557-5377</a>
      </section>

      {/* WHY CHOOSE */}
      <section className="relative grain bg-darkbg text-cream py-20">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <h2 className="font-display text-4xl md:text-5xl text-center">Built on Hard Work & Tennessee Roots</h2>
          <div className="grid md:grid-cols-3 gap-10 mt-14">
            {[
              { i: "⚒️", t: "Local & Experienced", d: "We know East Tennessee land. We've worked it, shaped it, and cleared it across Johnson City, Kingsport, Gray, Mountain City, and beyond." },
              { i: "📋", t: "Free Estimates, Always", d: "No obligation, no pressure. We come out, look at your land, and give you a straight, honest quote." },
              { i: "🏆", t: "Quality You Can See", d: "Every job is done right the first time. From grade work to full demolition — we take pride in the work we leave behind." },
            ].map((f) => (
              <div key={f.t} className="text-center">
                <div className="text-5xl text-tan">{f.i}</div>
                <h3 className="font-rye text-xl mt-4 text-rust">{f.t}</h3>
                <p className="text-cream/80 mt-3">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* WORK PREVIEW */}
      <section className="relative grain bg-cream py-20">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <SectionHeading>Recent Work</SectionHeading>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[truck, road, cleared].map((src, i) => (
              <div key={i} className="aspect-[4/3] overflow-hidden border-2 border-ink">
                <img src={src} alt="S.G. Land Management project" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/gallery" className="btn-ink">See the Full Gallery →</Link>
          </div>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="relative grain bg-cream-2 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <SectionHeading>We Serve East Tennessee</SectionHeading>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {["Mountain City, TN", "Gray, TN", "Johnson City, TN", "Kingsport, TN", "+ Surrounding Areas"].map((c) => (
              <span key={c} className="bg-darkbg text-cream px-5 py-2 rounded-full text-sm flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rust" /> 📍 {c}
              </span>
            ))}
          </div>
          <div className="mt-10 border-4 border-ink overflow-hidden">
            <iframe
              title="Service area map"
              src="https://www.google.com/maps?q=Johnson+City,+TN&output=embed"
              className="w-full h-[400px]"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="bg-rust text-cream text-center py-16 px-6">
        <h2 className="font-rye text-4xl md:text-5xl">READY TO BREAK GROUND?</h2>
        <p className="mt-3 max-w-xl mx-auto">Give us a call or send an email — we'll get you a free estimate fast.</p>
        <div className="flex flex-wrap justify-center gap-4 mt-7">
          <a href="tel:4235575377" className="btn-ink">📞 423-557-5377</a>
          <a href="mailto:s.glandmanagementt@gmail.com" className="btn-outline-cream">Email Us</a>
        </div>
      </section>
    </>
  );
}
