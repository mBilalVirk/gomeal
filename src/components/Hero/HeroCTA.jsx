import { ArrowRight, Download } from "lucide-react";

function HeroCTA({ onOpenAuth }) {
  return (
    <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
      <button
        type="button"
        onClick={onOpenAuth}
        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#F5A623] to-[#F08B1D] px-6 py-3.5 text-sm font-bold text-white shadow-[0_16px_26px_-10px_rgba(240,139,29,0.55)] transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5A623]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#FFF9EC]"
      >
        <Download size={18} strokeWidth={2.2} />
        Free Download
      </button>
      <a
        href="#services"
        className="inline-flex items-center gap-2 rounded-full border border-[#1F1B14]/[0.08] bg-white px-6 py-3.5 text-sm font-bold text-[#1F1B14] shadow-[0_6px_16px_-8px_rgba(31,27,20,0.15)] transition hover:-translate-y-0.5 hover:bg-[#FFF3DC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5A623]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#FFF9EC]"
      >
        Explore Services
        <ArrowRight size={18} strokeWidth={2.2} />
      </a>
    </div>
  );
}

export default HeroCTA;
