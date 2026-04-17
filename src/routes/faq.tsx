import { Link } from "react-router-dom";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "Do you offer free estimates?", a: "Yes — always. We come out to your property, look at the job, and give you a straight quote with no obligation. Call us at 423-557-5377 to schedule." },
  { q: "What areas do you serve?", a: "We serve Mountain City, Gray, Johnson City, Kingsport, and the broader East Tennessee region. Not sure if you're in our area? Just call and ask — we'll let you know." },
  { q: "What is the 20% discount?", a: "We're currently offering 20% off any dirt work service including grading, site prep, culverts, land clearing, tree work, retaining walls, building roads, and driveways. Call today to lock it in." },
  { q: "What types of excavation do you do?", a: "We handle residential and commercial excavation including site prep, house pads, trenching, footers, road building, culvert installation, and large-scale earthmoving." },
  { q: "Can you clear land that has heavy trees and brush?", a: "Absolutely. Land clearing is one of our specialties. We remove trees, stumps, brush, and debris — and haul everything off the property so you're left with a clean slate." },
  { q: "Do you build and fix driveways?", a: "Yes — new driveway installs and repairs on existing drives. We grade the base properly so your driveway holds up long-term, whether it's gravel, or sub-prep for concrete/asphalt." },
  { q: "Do you do demolition?", a: "Yes. We handle residential and commercial demolition — we knock it down, haul it off, and clear the site for your next build." },
  { q: "How do I get started?", a: "Give us a call at 423-557-5377 or email s.glandmanagementt@gmail.com. Tell us what you've got and we'll schedule a free on-site estimate." },
];

export default function FaqPage() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <>
      <section className="relative grain bg-cream py-20 text-center px-6">
        <h1 className="font-display text-4xl md:text-6xl text-ink">FREQUENTLY ASKED QUESTIONS</h1>
        <p className="text-warm text-sm mt-4"><Link to="/" className="hover:text-rust">Home</Link> / FAQ</p>
      </section>

      <section className="bg-cream pb-20">
        <div className="max-w-3xl mx-auto px-6 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="bg-cream-2 border-2 border-ink">
                <button onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 text-left p-5">
                  <span className="font-rye text-lg text-ink">{f.q}</span>
                  <ChevronDown className={`text-rust transition-transform shrink-0 ${isOpen ? "rotate-180" : ""}`} />
                </button>
                <div className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-warm leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-darkbg text-cream text-center py-14 px-6">
        <h2 className="font-rye text-2xl md:text-3xl">Still have questions?</h2>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <a href="tel:4235575377" className="btn-rust">📞 Call 423-557-5377</a>
          <a href="mailto:s.glandmanagementt@gmail.com" className="btn-outline-cream">Send an Email</a>
        </div>
      </section>
    </>
  );
}
