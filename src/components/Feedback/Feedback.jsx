import { useScrollReveal } from "../../hooks/useScrollReveal";
import FeedbackForm from "./FeedbackForm";

function Feedback() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="feedback"
      ref={ref}
      className={`scroll-mt-24 transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}`}
    >
      <div className="mx-auto max-w-[1180px] px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 rounded-[26px] bg-gradient-to-br from-[#FFF3DC] to-[#FDE7C4] p-6 sm:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:p-12">
          <div>
            <h2 className="text-[clamp(2rem,3vw,2.5rem)] font-extrabold tracking-[-0.06em] text-[#1F1B14]">
              We’d love your feedback
            </h2>
            <p className="mt-3 max-w-[340px] text-[14px] leading-7 text-[#8A8478]">
              Tell us about your experience with GoMeal — your feedback helps us
              make the app even better.
            </p>
          </div>

          <FeedbackForm />
        </div>
      </div>
    </section>
  );
}

export default Feedback;
