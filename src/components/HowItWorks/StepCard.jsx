function StepCard({ number, title, description }) {
  return (
    <div className="text-center">
      <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-full border border-[#1F1B14]/[0.08] bg-white text-[14px] font-extrabold text-[#F08B1D] shadow-[0_20px_45px_-22px_rgba(150,100,20,0.25)]">
        {number}
      </div>
      <h4 className="mb-1.5 text-[14.5px] font-bold tracking-[-0.03em] text-[#1F1B14]">
        {title}
      </h4>
      <p className="mx-auto max-w-[190px] text-[12px] leading-6 text-[#8A8478]">
        {description}
      </p>
    </div>
  );
}

export default StepCard;
