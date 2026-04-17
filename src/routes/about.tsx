import { Link } from "react-router-dom";
import logo from "@/assets/sgland_logo.png";

export default function AboutPage() {
  return (
    <>
      <section className="relative grain bg-cream py-20 text-center px-6 overflow-hidden">
        <img src={logo} alt="" aria-hidden className="absolute inset-0 m-auto w-[700px] opacity-[0.06] pointer-events-none" />
        <div className="relative z-10">
          <h1 className="font-display text-5xl md:text-6xl text-ink">ABOUT S.G. LAND MANAGEMENT</h1>
          <p className="text-warm text-sm mt-4"><Link to="/" className="hover:text-rust">Home</Link> / About</p>
        </div>
      </section>

      <section className="bg-cream py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-5 text-ink leading-relaxed">
            <p>S.G. Land Management is a locally owned and operated excavation and land management company serving <strong>Mountain City, Gray, Johnson City, Kingsport</strong>, and surrounding East Tennessee communities.</p>
            <p>We specialize in the kind of work that builds the foundation for everything else — site prep, grade work, land clearing, demolition, and earthmoving. Our crew brings years of hands-on experience to every job, and we take pride in doing it right the first time.</p>
            <p>We offer free estimates on all services because we believe in straight, honest conversations with our customers — no pressure, no runaround. Just give us a call and we'll come take a look.</p>
            <p>We're currently offering <strong className="text-rust">20% off all dirt work needs</strong>. Whether it's grading, culverts, clearing, or driveways — now is a great time to get your project started.</p>
          </div>
          <div className="bg-darkbg border-4 border-rust p-8 text-cream">
            <img src={logo} alt="logo" className="w-44 h-44 object-contain mx-auto bg-cream rounded-md p-2" />
            <h3 className="font-rye text-2xl text-center mt-6 text-rust">Get In Touch</h3>
            <ul className="mt-6 space-y-3 text-center">
              <li>📞 <a href="tel:4235575377" className="hover:text-rust font-bold">423-557-5377</a></li>
              <li>📧 <a href="mailto:s.glandmanagementt@gmail.com" className="hover:text-rust break-all">s.glandmanagementt@gmail.com</a></li>
              <li>📍 East Tennessee</li>
            </ul>
            <Link to="/contact" className="btn-rust block text-center mt-6">Free Estimate →</Link>
          </div>
        </div>
      </section>

      <section className="relative grain bg-cream-2 py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6 relative z-10">
          {[
            { i: "🤝", t: "Honest & Local", d: "We live and work in East Tennessee. Your land matters to us because it's our community too." },
            { i: "⚒️", t: "Hard Work, Every Time", d: "We don't cut corners. We show up, work hard, and leave the job site better than we found it." },
            { i: "📋", t: "Free Estimates, No Pressure", d: "Call us out, we'll look at your project and give you a straight price. No obligation, ever." },
          ].map((c) => (
            <div key={c.t} className="bg-darkbg text-cream p-8 border-t-4 border-rust">
              <div className="text-4xl text-rust">{c.i}</div>
              <h3 className="font-rye text-xl mt-3">{c.t}</h3>
              <p className="text-cream/80 mt-3">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-cream py-14 text-center px-6">
        <h2 className="font-rye text-2xl uppercase tracking-wider text-ink">Service Area</h2>
        <div className="flex flex-wrap justify-center gap-3 mt-6">
          {["Mountain City, TN", "Gray, TN", "Johnson City, TN", "Kingsport, TN", "+ Surrounding Areas"].map((c) => (
            <span key={c} className="bg-darkbg text-cream px-5 py-2 rounded-full text-sm">📍 {c}</span>
          ))}
        </div>
        <p className="text-warm text-sm mt-8 max-w-3xl mx-auto">
          #excavation #tricitiestn #gradework #EastTennessee #dirtwork #johnsoncitytn #kingsporttn #bristoltn #jonesboroughtn #graytn #tenessee
        </p>
      </section>
    </>
  );
}
