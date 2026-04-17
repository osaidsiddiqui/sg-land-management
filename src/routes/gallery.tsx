import { Link } from "react-router-dom";
import { useState } from "react";
import truck from "@/assets/truck-excavator.jpg";
import truck2 from "@/assets/truck-excavator-2.jpg";
import treeRem from "@/assets/tree-removal.jpg";
import cleared from "@/assets/land-cleared.jpg";
import stump from "@/assets/stump-removal.jpg";
import road from "@/assets/road-build.jpg";
import drive from "@/assets/driveway-gravel.jpg";
import lc2 from "@/assets/land-clearing-2.jpg";
import { Eye } from "lucide-react";

const photos = [
  { src: truck, cat: "Excavation" },
  { src: treeRem, cat: "Land Clearing" },
  { src: cleared, cat: "Land Clearing" },
  { src: stump, cat: "Land Clearing" },
  { src: road, cat: "Driveways" },
  { src: drive, cat: "Driveways" },
  { src: truck2, cat: "Excavation" },
  { src: lc2, cat: "Demolition" },
];

const filters = ["All", "Excavation", "Land Clearing", "Driveways", "Demolition", "Grade Work"] as const;

export default function GalleryPage() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const visible = active === "All" ? photos : photos.filter((p) => p.cat === active);

  return (
    <>
      <section className="relative grain bg-darkbg text-cream py-20 text-center px-6">
        <p className="font-rye text-rust uppercase tracking-[0.3em] text-sm">Before & After — See What We Can Do</p>
        <h1 className="font-display text-5xl md:text-6xl mt-4">OUR WORK</h1>
      </section>

      <section className="bg-cream py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {filters.map((f) => (
              <button key={f} onClick={() => setActive(f)}
                className={`font-rye uppercase tracking-wider text-sm px-4 py-2 border-2 transition ${
                  active === f ? "bg-rust text-cream border-rust" : "border-ink text-ink hover:bg-ink hover:text-cream"
                }`}>
                {f}
              </button>
            ))}
          </div>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [&>*]:mb-4">
            {visible.map((p, i) => (
              <div key={i} className="relative group break-inside-avoid overflow-hidden border-2 border-ink">
                <img src={p.src} alt={`${p.cat} project`} className="w-full block" />
                <div className="absolute inset-0 bg-darkbg/80 opacity-0 group-hover:opacity-100 transition flex flex-col items-center justify-center">
                  <Eye className="text-cream" size={36} />
                  <span className="font-rye text-rust mt-2 uppercase tracking-wider text-sm">{p.cat}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-rust text-cream text-center py-14 px-6">
        <h2 className="font-rye text-3xl md:text-4xl">Like What You See? Get Your Free Estimate</h2>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <a href="tel:4235575377" className="btn-ink">📞 Call 423-557-5377</a>
          <Link to="/contact" className="btn-outline-cream">Request Online</Link>
        </div>
      </section>
    </>
  );
}
