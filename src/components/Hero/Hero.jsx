import HeroCTA from "./HeroCTA";
import DashboardMockup from "./DashboardMockup";

function Hero({ onOpenAuth }) {
  return (
    <section id="home" className="scroll-mt-24 pb-0 pt-3 text-center sm:pt-6">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 rounded-full bg-[#F5A623]/10 px-4 py-2 text-[12.5px] font-bold text-[#F08B1D] ring-1 ring-[#F5A623]/15">
          <span aria-hidden="true">🍔</span>
          Food delivery, made effortless
        </div>

        <h1 className="mx-auto mt-5 max-w-[680px] text-[clamp(2.2rem,5vw,3.125rem)] font-extrabold leading-[1.08] tracking-[-0.06em] text-[#1F1B14]">
          Order your favorite food{" "}
          <span className="text-[#F5A623]">faster</span> with GoMeal
        </h1>

        <p className="mx-auto mt-4 max-w-[480px] text-[15.5px] leading-7 text-[#8A8478]">
          Browse thousands of dishes from local restaurants, track your order
          live, and get it delivered hot — right to your door.
        </p>

        <HeroCTA onOpenAuth={onOpenAuth} />
      </div>

      <div className="mx-auto max-w-[1180px] px-4 pb-0 sm:px-6 lg:px-8">
        <DashboardMockup />
      </div>
    </section>
  );
}

export default Hero;
