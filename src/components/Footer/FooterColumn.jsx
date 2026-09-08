function FooterColumn({ title, links }) {
  return (
    <div>
      <h5 className="mb-4 text-[14px] font-bold text-[#1F1B14]">{title}</h5>
      <ul className="space-y-2.5 text-[13.5px] text-[#8A8478]">
        {links.map((link) => (
          <li key={link}>
            <a
              href="#"
              className="transition hover:text-[#F08B1D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5A623]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#FFF9EC]"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterColumn;
