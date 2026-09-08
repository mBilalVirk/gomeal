import { useState } from "react";
import RatingStars from "./RatingStars";

function FeedbackForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setRating(0);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <div className="grid gap-3 md:grid-cols-2">
        <label className="block">
          <span className="sr-only">Your name</span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            required
            className="w-full rounded-xl border border-[#1F1B14]/[0.08] bg-white px-4 py-3.5 text-[13.5px] text-[#1F1B14] placeholder:text-[#8A8478] outline-none transition focus:border-[#F5A623] focus:ring-2 focus:ring-[#F5A623]/20"
          />
        </label>

        <label className="block">
          <span className="sr-only">Your email</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your email"
            required
            className="w-full rounded-xl border border-[#1F1B14]/[0.08] bg-white px-4 py-3.5 text-[13.5px] text-[#1F1B14] placeholder:text-[#8A8478] outline-none transition focus:border-[#F5A623] focus:ring-2 focus:ring-[#F5A623]/20"
          />
        </label>
      </div>

      <div className="flex items-center gap-2 rounded-xl border border-[#1F1B14]/[0.08] bg-white px-4 py-3 text-[#1F1B14]">
        <span className="text-[13px] font-medium text-[#1F1B14]">Rating</span>
        <RatingStars rating={rating} onRate={setRating} />
      </div>

      <label className="block">
        <span className="sr-only">Your message</span>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Share your thoughts..."
          required
          rows={4}
          className="min-h-[90px] w-full resize-y rounded-xl border border-[#1F1B14]/[0.08] bg-white px-4 py-3.5 text-[13.5px] text-[#1F1B14] placeholder:text-[#8A8478] outline-none transition focus:border-[#F5A623] focus:ring-2 focus:ring-[#F5A623]/20"
        />
      </label>

      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#F5A623] to-[#F08B1D] px-6 py-3.5 text-sm font-bold text-white shadow-[0_16px_26px_-10px_rgba(240,139,29,0.55)] transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5A623]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#FFF3DC]"
      >
        Submit Feedback →
      </button>

      {submitted && (
        <p className="text-sm font-medium text-[#1F1B14]">
          Thanks for your feedback! We appreciate it.
        </p>
      )}
    </form>
  );
}

export default FeedbackForm;
