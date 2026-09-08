function ServiceCard({ title, description, Icon }) {
  return (
    <article className="rounded-[20px] border border-[#1F1B14]/[0.08] bg-white p-6 text-center shadow-[0_20px_45px_-22px_rgba(150,100,20,0.25)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_24px_50px_-20px_rgba(150,100,20,0.3)] sm:p-7">
      <div className="mx-auto mb-4 flex h-[52px] w-[52px] items-center justify-center rounded-[16px] bg-[#F5A623]/10 text-[#F08B1D]">
        <Icon size={22} strokeWidth={2.3} />
      </div>
      <h4 className="mb-2 text-[15.5px] font-bold tracking-[-0.03em] text-[#1F1B14]">
        {title}
      </h4>
      <p className="text-[12.5px] leading-6 text-[#8A8478]">{description}</p>
    </article>
  );
}

export default ServiceCard;
