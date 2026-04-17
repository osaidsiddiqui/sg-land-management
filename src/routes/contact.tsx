import { useState } from "react";

const SERVICES = ["Grade Work","Land Clearing","Tree Work","Driveways","Site Prep","Demolition","Excavation","Culvert Install","Retaining Wall","Building Roads","Footers/Trenching","Brush Haul Off","Other"];

export default function ContactPage() {
  const [picked, setPicked] = useState<string[]>([]);
  const [sent, setSent] = useState(false);
  const toggle = (s: string) => setPicked((p) => p.includes(s) ? p.filter(x => x !== s) : [...p, s]);

  return (
    <>
      <section className="relative grain bg-darkbg text-cream py-20 text-center px-6">
        <h1 className="font-display text-4xl md:text-6xl">GET YOUR FREE ESTIMATE</h1>
        <p className="max-w-2xl mx-auto mt-5 text-cream/80">Tell us about your project. We'll come out, take a look, and give you a straight, honest quote. No obligation, no pressure.</p>
        <div className="inline-block mt-6 bg-rust text-cream font-rye px-5 py-2 -rotate-2 pulse-soft text-sm">🔥 20% OFF ALL DIRT WORK — Book Now & Save</div>
      </section>

      <section className="bg-cream py-16">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10">
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="bg-cream-2 border-2 border-ink p-8 space-y-5"
          >
            <h2 className="font-rye text-2xl text-ink">Estimate Request</h2>
            {sent && <p className="bg-rust text-cream p-4">✅ Got it! We'll be in touch shortly to schedule your free on-site estimate.</p>}
            <div className="grid sm:grid-cols-2 gap-4">
              <input required placeholder="Full Name" className="bg-cream border-2 border-ink p-3 w-full" />
              <input required type="tel" placeholder="Phone Number" className="bg-cream border-2 border-ink p-3 w-full" />
            </div>
            <input type="email" placeholder="Email Address" className="bg-cream border-2 border-ink p-3 w-full" />
            <input placeholder="City / Location" className="bg-cream border-2 border-ink p-3 w-full" />
            <div>
              <label className="font-bold text-ink block mb-2">Service Needed</label>
              <div className="flex flex-wrap gap-2">
                {SERVICES.map((s) => (
                  <button type="button" key={s} onClick={() => toggle(s)}
                    className={`px-3 py-1.5 text-sm border-2 transition ${picked.includes(s) ? "bg-rust text-cream border-rust" : "border-ink text-ink hover:bg-ink hover:text-cream"}`}>
                    {s}
                  </button>
                ))}
              </div>
            </div>
            <textarea placeholder="Tell us what you need done..." rows={5} className="bg-cream border-2 border-ink p-3 w-full" />
            <button type="submit" className="btn-rust w-full">Send My Estimate Request →</button>
          </form>

          <div className="bg-darkbg text-cream p-8 border-4 border-rust">
            <h2 className="font-rye text-2xl text-rust">Reach Us Direct</h2>
            <ul className="mt-6 space-y-5">
              <li>📞 <a href="tel:4235575377" className="text-rust text-3xl font-bold hover:underline">423-557-5377</a></li>
              <li>📧 <a href="mailto:s.glandmanagementt@gmail.com" className="hover:text-rust break-all">s.glandmanagementt@gmail.com</a></li>
              <li>📍 Serving: Mountain City · Gray · Johnson City · Kingsport · East Tennessee</li>
            </ul>
            <div className="bg-cream text-ink p-5 mt-8 font-rye italic text-center">
              "Give us a call today for a free quote! — S.G. Land Management"
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream pb-16 px-6">
        <div className="max-w-6xl mx-auto border-4 border-ink overflow-hidden">
          <iframe title="Map" src="https://www.google.com/maps?q=Johnson+City,+TN&output=embed" className="w-full h-[400px]" loading="lazy" />
        </div>
      </section>
    </>
  );
}
