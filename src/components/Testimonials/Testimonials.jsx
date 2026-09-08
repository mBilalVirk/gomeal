import { testimonials } from "../../data/testimonials";
import TestimonialCard from "./TestimonialCard";
import { useScrollReveal } from "../../hooks/useScrollReveal";

function Testimonials() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="testimonials"
      ref={ref}
      className={`scroll-mt-24 transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}`}
    >
      <div className="mx-auto max-w-[1180px] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-[520px] text-center">
          <h2 className="text-[clamp(2rem,3vw,2.3rem)] font-extrabold tracking-[-0.06em] text-[#1F1B14]">
            What Our Customers Say
          </h2>
          <p className="mt-2 text-[14.5px] leading-7 text-[#8A8478]">
            Real feedback from real GoMeal users.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {testimonials.map((item) => (
            <TestimonialCard
              key={item.name}
              quote={item.quote}
              name={item.name}
              location={item.location}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
