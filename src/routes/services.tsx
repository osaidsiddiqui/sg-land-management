import { Link } from "react-router-dom";
import svcExcavation from "@/assets/svc-excavation.jpg";
import svcLandClearing from "@/assets/svc-land-clearing.jpg";
import svcTreeWork from "@/assets/svc-tree-work.jpg";

const services = [
  { img: svcExcavation, title: "Excavation", body: "Professional excavation for residential and commercial sites. We handle everything from small trenching jobs to large-scale earthmoving. Our equipment is well-maintained and our operators are experienced in East Tennessee terrain." },
  { img: svcLandClearing, title: "Land Clearing", body: "Got trees, brush, stumps, or overgrowth? We clear it all. Whether you're prepping a new build site, opening up acreage, or cleaning up after a storm — we clear land efficiently and haul everything away." },
  { img: svcTreeWork, title: "Tree Work", body: "Tree removal, trimming, and brush haul-off. We handle trees of all sizes, including those in tight or difficult-to-reach areas. Land stays clean, trees come down safely." },
  { img: "https://davcodirtworx.com/wp-content/uploads/2023/03/land-leveling-and-grading.jpeg", title: "Grade Work", body: "Proper grading is the foundation of any successful project. We grade for drainage, building pads, driveways, and more — leaving your land level, stable, and ready for what comes next." },
  { img: "https://www.excavationcompanywacotx.com/wp-content/uploads/2024/11/house-pad-site-construction-1a.jpg", title: "Site Prep & House Pads", body: "Before you can build, the ground has to be right. We handle full site preparation including clearing, grading, and compacting house pads to spec — ready for your foundation pour." },
  { img: "https://t4.ftcdn.net/jpg/01/40/32/03/360_F_140320329_pzh3Roco5doPHrT8RVuFPHGKWllXdocJ.jpg", title: "Demolition", body: "Residential and commercial demolition done safely and efficiently. We knock it down, haul it off, and leave your lot cleared and ready for the next chapter." },
  { img: "https://heattrak.com/cdn/shop/articles/driveway_construction.jpg?v=1567709188&width=2048", title: "Driveways & Driveway Repair", body: "New driveway installs and repair of existing drives. Whether it's gravel, base material, or grading for concrete/asphalt sub-prep — we build driveways that last." },
  { img: "https://weinsteinconstruction.com/wp-content/uploads/2024/09/How-to-calculate-the-cost-of-retaining-walls-in-los-angeles.jpg", title: "Retaining Walls", body: "Erosion problems? Sloped land? We design and build retaining walls that hold your ground in place, prevent washout, and add structural integrity to your property." },
  { img: "https://reissearthworks.com/wp-content/uploads/2024/02/culvert-water-issue-install-scaled.jpg", title: "Culvert Installation", body: "Proper water flow management starts with the right culvert. We install culverts for driveways, roads, and drainage channels to protect your land from erosion and flooding." },
  { img: "https://www.designingbuildings.co.uk/w/images/2/24/Road_surfacing.jpg", title: "Building Roads", body: "Need to cut a road through your property? We grade, clear, and build private roads, farm roads, and access roads — built right for the terrain." },
  { img: "https://www.ngearthworks.co.nz/wp-content/uploads/2021/08/footings-and-trenching.jpg", title: "Footers & Trenching", body: "We dig footers for foundations and trench for utilities, drainage lines, and more. Precise, clean, and on spec." },
  { img: "https://images.squarespace-cdn.com/content/v1/585f14bf1b631b9683afdfd5/44283f7e-cee9-4073-a0a7-9072debf5e82/brush+removal", title: "Brush Haul Off", body: "We don't just clear it — we haul it. Brush, debris, logs — all removed from the site completely." },
];

export default function ServicesPage() {
  return (
    <>
      <section className="relative grain bg-darkbg text-cream py-24 text-center px-6">
        <p className="font-rye text-rust uppercase tracking-[0.3em] text-sm">Free Estimates on Everything</p>
        <h1 className="font-display text-5xl md:text-6xl mt-4">OUR SERVICES</h1>
        <p className="text-warm text-sm mt-4"><Link to="/" className="hover:text-rust">Home</Link> / Services</p>
        <p className="max-w-2xl mx-auto mt-6 text-cream/80">From breaking new ground to clearing thick Tennessee brush, S.G. Land Management handles every phase of your project. We offer free estimates on all services — just give us a call.</p>
      </section>

      <section className="bg-cream py-16">
        <div className="max-w-5xl mx-auto px-6 space-y-8">
          {services.map((s, i) => {
            const dark = i % 2 === 1;
            const reverse = i % 2 === 1;
            return (
              <div key={s.title} className={`relative grain border-l-8 border-rust overflow-hidden ${dark ? "bg-darkbg text-cream" : "bg-cream-2 text-ink"}`}>
                <div className={`relative z-10 flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} gap-0`}>
                  <div className="md:w-2/5 aspect-[4/3] md:aspect-auto overflow-hidden bg-ink">
                    <img src={s.img} alt={s.title} loading="lazy" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 p-8 md:p-10">
                    <h2 className="font-rye text-2xl md:text-3xl">{s.title}</h2>
                    <p className={`mt-3 ${dark ? "text-cream/80" : "text-warm"}`}>{s.body}</p>
                    <Link to="/contact" className="btn-rust mt-5 text-sm">Get a Free Estimate →</Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-rust text-cream text-center py-12 px-6">
        <h2 className="font-rye text-2xl md:text-3xl">20% OFF ALL DIRT WORK</h2>
        <p className="mt-2">Call <a href="tel:4235575377" className="underline font-bold">423-557-5377</a> for Your Free Estimate</p>
      </section>
    </>
  );
}
