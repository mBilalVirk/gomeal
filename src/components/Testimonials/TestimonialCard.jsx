import { Star } from "lucide-react";

function TestimonialCard({ quote, name, location, image }) {
  return (
    <article className="rounded-[18px] border border-[#1F1B14]/[0.08] bg-white p-6 shadow-[0_20px_45px_-22px_rgba(150,100,20,0.25)] sm:p-7">
      <div
        className="mb-3 flex items-center gap-1 text-[#F5B400]"
        aria-label="Five star rating"
      >
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={`${name}-${index}`}
            size={14}
            fill="currentColor"
            strokeWidth={1.6}
          />
        ))}
      </div>
      <p className="mb-5 text-[13.5px] leading-7 text-[#1F1B14]/85">
        “{quote}”
      </p>
      <div className="flex items-center gap-3">
        <img
          src={image}
          alt={name}
          className="h-[38px] w-[38px] rounded-full object-cover"
        />
        <div>
          <b className="block text-[13px] font-bold text-[#1F1B14]">{name}</b>
          <span className="text-[11.5px] text-[#8A8478]">{location}</span>
        </div>
      </div>
    </article>
  );
}

export default TestimonialCard;
