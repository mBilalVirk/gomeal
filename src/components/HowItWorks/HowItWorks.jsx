import { steps } from "../../data/steps";
import StepCard from "./StepCard";
import { useScrollReveal } from "../../hooks/useScrollReveal";

function HowItWorks() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="how"
      ref={ref}
      className={`scroll-mt-24 border-y border-[#1F1B14]/[0.08] bg-white transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}`}
    >
      <div className="mx-auto max-w-[1180px] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-[520px] text-center">
          <h2 className="text-[clamp(2rem,3vw,2.3rem)] font-extrabold tracking-[-0.06em] text-[#1F1B14]">
            How It Works
          </h2>
          <p className="mt-2 text-[14.5px] leading-7 text-[#8A8478]">
            Getting your favorite meal has never been easier.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step) => (
            <StepCard
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
