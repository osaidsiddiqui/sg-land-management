import { Phone } from "lucide-react";

export function MobileCallButton() {
  return (
    <a
      href="tel:4235575377"
      aria-label="Call S.G. Land Management at 423-557-5377"
      className="md:hidden fixed bottom-5 right-5 z-40 bg-rust text-cream rounded-full shadow-[0_8px_24px_rgba(196,94,26,0.45)] flex items-center gap-2 px-5 py-3 font-rye text-sm pulse-soft border-2 border-cream"
    >
      <Phone className="w-4 h-4 fill-current" />
      Call Now
    </a>
  );
}
