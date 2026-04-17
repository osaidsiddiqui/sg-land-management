import { Link } from "react-router-dom";
import logo from "@/assets/sgland_logo.png";

export function Footer() {
  return (
    <footer className="relative grain bg-darkbg text-cream border-t-[6px] border-rust">
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10 relative z-10">
        <div>
          <img src={logo} alt="S.G. Land Management" className="h-28 w-28 bg-cream rounded-md p-1" />
          <p className="font-rye text-rust italic mt-4 text-lg">"Breaking Ground in East Tennessee"</p>
          <p className="text-warm text-sm mt-3">© 2024 S.G. Land Management. All Rights Reserved.</p>
        </div>
        <div>
          <h4 className="font-rye text-rust uppercase tracking-wider mb-4">Quick Links</h4>
          <ul className="space-y-2 text-cream/90">
            <li><Link to="/" className="hover:text-rust">Home</Link></li>
            <li><Link to="/services" className="hover:text-rust">Services</Link></li>
            <li><Link to="/about" className="hover:text-rust">About</Link></li>
            <li><Link to="/gallery" className="hover:text-rust">Gallery</Link></li>
            <li><Link to="/faq" className="hover:text-rust">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-rust">Free Estimate</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-rye text-rust uppercase tracking-wider mb-4">Services</h4>
          <ul className="space-y-2 text-cream/90 text-sm">
            <li>Excavation</li><li>Land Clearing</li><li>Grade Work</li>
            <li>Driveways</li><li>Demolition</li><li>Retaining Walls</li>
            <li>Culverts</li><li>Tree Work</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/15 py-5 text-center text-sm relative z-10">
        📞 <a href="tel:4235575377" className="hover:text-rust">423-557-5377</a> · 📧 <a href="mailto:s.glandmanagementt@gmail.com" className="hover:text-rust">s.glandmanagementt@gmail.com</a> · 📍 East Tennessee
      </div>
      <div className="text-center text-xs text-warm pb-6 px-4">
        #EastTennessee #excavation #gradework #dirtwork #johnsoncitytn #kingsporttn
      </div>
    </footer>
  );
}
