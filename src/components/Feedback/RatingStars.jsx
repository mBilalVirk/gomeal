import { Star } from "lucide-react";

function RatingStars({ rating, onRate }) {
  return (
    <div className="flex items-center gap-1.5" aria-label="Choose a rating">
      {Array.from({ length: 5 }).map((_, index) => {
        const value = index + 1;
        const filled = value <= rating;

        return (
          <button
            key={value}
            type="button"
            aria-label={`Rate ${value} out of 5`}
            onClick={() => onRate(value)}
            className="text-2xl transition hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5A623]/60 focus-visible:ring-offset-2"
          >
            <Star
              size={22}
              fill={filled ? "currentColor" : "none"}
              className={filled ? "text-[#F5B400]" : "text-[#DDD]"}
              strokeWidth={1.8}
            />
          </button>
        );
      })}
    </div>
  );
}

export default RatingStars;
