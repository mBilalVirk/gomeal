import { services } from "../../data/services";
import ServiceCard from "./ServiceCard";
import { useScrollReveal } from "../../hooks/useScrollReveal";

function Services() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="services"
      ref={ref}
      className={`scroll-mt-24 transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}`}
    >
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-[520px] text-center">
          <h2 className="text-[clamp(2rem,3vw,2.3rem)] font-extrabold tracking-[-0.06em] text-[#1F1B14]">
            Why Choose GoMeal
          </h2>
          <p className="mt-2 text-[14.5px] leading-7 text-[#8A8478]">
            Everything you need for a fast, reliable food ordering experience.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map(({ title, description, icon: Icon }) => (
            <ServiceCard
              key={title}
              title={title}
              description={description}
              Icon={Icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
