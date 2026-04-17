import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/sgland_logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const dark = scrolled;
  return (
    <header
      className={`sticky top-0 z-50 w-full border-b-[3px] transition-colors ${
        dark ? "bg-darkbg text-cream border-rust" : "bg-cream text-ink border-ink"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="S.G. Land Management logo" className="h-14 w-14 object-contain" />
          <span className="hidden sm:block font-rye text-lg leading-tight">S.G. Land<br />Management</span>
        </Link>
        <nav className="hidden lg:flex items-center gap-8 font-body font-bold text-sm uppercase tracking-wider">
          {links.map((l) => (
            <Link key={l.to} to={l.to} className="nav-link">{l.label}</Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <a href="tel:4235575377" className="text-rust font-bold flex items-center gap-1 text-sm">
            <Phone size={16} /> 423-557-5377
          </a>
          <Link to="/contact" className="btn-rust text-sm">Free Estimate</Link>
        </div>
        <button className="lg:hidden" onClick={() => setOpen(true)} aria-label="Open menu">
          <Menu size={32} strokeWidth={3} />
        </button>
      </div>
      {open && (
        <div className="fixed inset-0 z-50 bg-cream text-ink flex flex-col overflow-y-auto">
          <div className="flex items-center justify-between p-3 border-b-2 border-ink shrink-0">
            <img src={logo} alt="logo" className="h-10 w-10" />
            <span className="font-rye text-base">S.G. Land Management</span>
            <button onClick={() => setOpen(false)} aria-label="Close"><X size={28} strokeWidth={3} /></button>
          </div>
          <nav className="flex flex-col">
            {links.map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)}
                className="px-6 py-3 border-b border-ink/30 font-rye text-lg">
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="p-4 space-y-2 mt-auto">
            <a href="tel:4235575377" className="btn-ink block text-center text-sm py-2.5">📞 423-557-5377</a>
            <Link to="/contact" onClick={() => setOpen(false)} className="btn-rust block text-center text-sm py-2.5">Free Estimate</Link>
          </div>
        </div>
      )}
    </header>
  );
}
