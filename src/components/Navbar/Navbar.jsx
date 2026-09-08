import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Feedback", href: "#feedback" },
];

function Navbar({ onOpenAuth }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#home");

  useEffect(() => {
    const syncHash = () => setActiveHash(window.location.hash || "#home");
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-[#1F1B14]/[0.08] bg-[#FFF9EC]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1180px] items-center justify-between px-4 py-3.5 sm:px-6 md:px-10">
        <a
          href="#home"
          className="flex items-center gap-2 text-[19px] font-extrabold tracking-[-0.04em] text-[#1F1B14]"
        >
          GoMeal<span className="text-[#F08B1D]">.</span>
        </a>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-[14.5px] font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5A623]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#FFF9EC] ${
                activeHash === item.href
                  ? "text-[#F08B1D]"
                  : "text-[#1F1B14]/70 hover:text-[#F08B1D]"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <button
            type="button"
            onClick={() => onOpenAuth("login")}
            className="rounded-full px-4 py-2.5 text-sm font-bold text-[#1F1B14] transition hover:bg-[#FFF3DC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5A623]/60"
          >
            Login
          </button>
          <button
            type="button"
            onClick={() => onOpenAuth("register")}
            className="rounded-full bg-gradient-to-r from-[#F5A623] to-[#F08B1D] px-5 py-3 text-sm font-bold text-white shadow-[0_16px_26px_-10px_rgba(240,139,29,0.55)] transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5A623]/60"
          >
            Register
          </button>
        </div>

        <button
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
          className="inline-flex items-center justify-center rounded-full border border-[#1F1B14]/[0.08] bg-white p-2.5 text-[#1F1B14] shadow-sm transition hover:bg-[#FFF3DC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5A623]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#FFF9EC] md:hidden"
        >
          {isOpen ? (
            <X size={20} strokeWidth={2.2} />
          ) : (
            <Menu size={20} strokeWidth={2.2} />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`grid overflow-hidden border-t border-[#1F1B14]/[0.08] bg-[#FFF9EC]/95 transition-[grid-template-rows] duration-300 ease-in-out md:hidden ${
          isOpen ? "grid-rows-[1fr] border-t" : "grid-rows-[0fr] border-t-0"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <nav
            className="flex flex-col gap-2 px-4 pb-4 pt-3"
            aria-label="Mobile navigation"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`rounded-xl px-3 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5A623]/60 ${
                  activeHash === item.href
                    ? "bg-white text-[#F08B1D]"
                    : "text-[#1F1B14]/75 hover:bg-white hover:text-[#F08B1D]"
                }`}
              >
                {item.label}
              </a>
            ))}
            <div className="mt-2 grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => {
                  onOpenAuth("login");
                  setIsOpen(false);
                }}
                className="rounded-full border border-[#1F1B14]/[0.08] bg-white px-4 py-3 text-sm font-bold text-[#1F1B14]"
              >
                Login
              </button>
              <button
                type="button"
                onClick={() => {
                  onOpenAuth("register");
                  setIsOpen(false);
                }}
                className="rounded-full bg-gradient-to-r from-[#F5A623] to-[#F08B1D] px-4 py-3 text-sm font-bold text-white"
              >
                Register
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
