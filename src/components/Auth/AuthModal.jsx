import { useEffect, useState } from "react";
import { ArrowRight, X } from "lucide-react";

function AuthModal({ isOpen, initialMode = "login", onClose }) {
  const [mode, setMode] = useState(initialMode);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setMode(initialMode);
      setSubmitted(false);
    }
  }, [initialMode, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1F1B14]/50 p-4 backdrop-blur-sm">
      <div className="relative w-full max-w-[420px] rounded-[24px] border border-[#1F1B14]/[0.08] bg-white p-5 shadow-[0_35px_80px_-30px_rgba(31,27,20,0.45)] sm:p-6">
        <button
          type="button"
          aria-label="Close login form"
          onClick={onClose}
          className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#1F1B14]/[0.08] bg-[#FFF9EC] text-[#1F1B14] transition hover:bg-[#FFF3DC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5A623]/60"
        >
          <X size={18} strokeWidth={2.2} />
        </button>

        <div className="mb-5 flex items-center justify-between rounded-full bg-[#F6F5F7] p-1">
          <button
            type="button"
            onClick={() => setMode("login")}
            className={`flex-1 rounded-full px-3 py-2 text-sm font-semibold transition ${
              mode === "login"
                ? "bg-white text-[#1F1B14] shadow-sm"
                : "text-[#8A8478]"
            }`}
          >
            Login
          </button>
          <button
            type="button"
            onClick={() => setMode("register")}
            className={`flex-1 rounded-full px-3 py-2 text-sm font-semibold transition ${
              mode === "register"
                ? "bg-white text-[#1F1B14] shadow-sm"
                : "text-[#8A8478]"
            }`}
          >
            Register
          </button>
        </div>

        <div className="mb-5">
          <h3 className="text-[24px] font-extrabold tracking-[-0.05em] text-[#1F1B14]">
            {mode === "login" ? "Welcome back" : "Create account"}
          </h3>
          <p className="mt-2 text-sm text-[#8A8478]">
            {mode === "login"
              ? "Access your orders and saved restaurants."
              : "Join GoMeal and start ordering in minutes."}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3.5">
          {mode === "register" && (
            <label className="block">
              <span className="sr-only">Full name</span>
              <input
                type="text"
                placeholder="Full name"
                required
                className="w-full rounded-xl border border-[#1F1B14]/[0.08] bg-[#F6F5F7] px-3.5 py-3 text-sm text-[#1F1B14] placeholder:text-[#8A8478] outline-none transition focus:border-[#F5A623] focus:ring-2 focus:ring-[#F5A623]/20"
              />
            </label>
          )}

          <label className="block">
            <span className="sr-only">Email address</span>
            <input
              type="email"
              placeholder="Email address"
              required
              className="w-full rounded-xl border border-[#1F1B14]/[0.08] bg-[#F6F5F7] px-3.5 py-3 text-sm text-[#1F1B14] placeholder:text-[#8A8478] outline-none transition focus:border-[#F5A623] focus:ring-2 focus:ring-[#F5A623]/20"
            />
          </label>

          <label className="block">
            <span className="sr-only">Password</span>
            <input
              type="password"
              placeholder="Password"
              required
              className="w-full rounded-xl border border-[#1F1B14]/[0.08] bg-[#F6F5F7] px-3.5 py-3 text-sm text-[#1F1B14] placeholder:text-[#8A8478] outline-none transition focus:border-[#F5A623] focus:ring-2 focus:ring-[#F5A623]/20"
            />
          </label>

          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#F5A623] to-[#F08B1D] px-5 py-3 text-sm font-bold text-white shadow-[0_16px_26px_-10px_rgba(240,139,29,0.55)] transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5A623]/60 focus-visible:ring-offset-2"
          >
            {mode === "login" ? "Login" : "Create account"}
            <ArrowRight size={16} strokeWidth={2.2} />
          </button>
        </form>

        {submitted && (
          <p className="mt-4 text-sm font-medium text-[#1F1B14]">
            {mode === "login"
              ? "Logged in successfully."
              : "Registration complete. Welcome aboard!"}
          </p>
        )}
      </div>
    </div>
  );
}

export default AuthModal;
