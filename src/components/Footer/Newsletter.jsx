import { useState } from "react";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="flex items-center gap-2 rounded-full border border-[#1F1B14]/[0.08] bg-white p-1.5 shadow-[0_10px_24px_-18px_rgba(31,27,20,0.25)]">
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter your email"
          aria-label="Email address"
          className="w-full bg-transparent px-3 py-2 text-[13px] text-[#1F1B14] placeholder:text-[#8A8478] outline-none"
          required
        />
        <button
          type="submit"
          className="rounded-full bg-[#F5A623] px-4 py-2 text-[12px] font-bold text-white transition hover:bg-[#F08B1D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5A623]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#FFF9EC]"
        >
          Join
        </button>
      </div>
      {submitted && (
        <p className="mt-2 text-xs text-[#8A8478]">Thanks for subscribing!</p>
      )}
    </form>
  );
}

export default Newsletter;
