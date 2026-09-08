import { Globe, MessageCircle, Play, Send } from "lucide-react";
import FooterColumn from "./FooterColumn";
import Newsletter from "./Newsletter";

const companyLinks = ["About Us", "Careers", "Blog", "Press"];
const supportLinks = ["Help Center", "Contact Us", "FAQs", "Terms & Privacy"];
const socialLinks = [
  { label: "Instagram", href: "#", icon: MessageCircle },
  { label: "Facebook", href: "#", icon: Globe },
  { label: "Twitter", href: "#", icon: Send },
  { label: "YouTube", href: "#", icon: Play },
];

function Footer() {
  return (
    <footer className="border-t border-[#1F1B14]/[0.08] bg-[#FFF9EC] py-14 text-[#1F1B14]">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 border-b border-[#1F1B14]/[0.08] pb-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-[21px] font-extrabold tracking-[-0.05em] text-[#1F1B14]">
              GoMeal<span className="text-[#F08B1D]">.</span>
            </div>
            <p className="mt-1 text-[13px] text-[#8A8478]">
              Good food, right on time.
            </p>
          </div>
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[#F5A623]/25 bg-[#F5A623]/10 px-3.5 py-2 text-[12px] font-semibold text-[#F08B1D]">
            <span className="h-2 w-2 rounded-full bg-[#F5A623]" />
            Delivering happiness daily
          </span>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          <div>
            <p className="max-w-[240px] text-[13.5px] leading-7 text-[#8A8478]">
              Delicious food, delivered fast. GoMeal connects you with the best
              local restaurants in your city.
            </p>
            <div className="mt-5 flex items-center gap-2.5">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#1F1B14]/[0.08] bg-white text-[#8A8478] transition hover:border-[#F5A623] hover:bg-[#F5A623] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5A623]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#FFF9EC]"
                >
                  <Icon size={14} strokeWidth={2.2} />
                </a>
              ))}
            </div>
          </div>

          <FooterColumn title="Company" links={companyLinks} />
          <FooterColumn title="Support" links={supportLinks} />

          <div>
            <h5 className="mb-4 text-[14px] font-bold text-[#1F1B14]">
              Newsletter
            </h5>
            <p className="text-[13.5px] leading-7 text-[#8A8478]">
              Get the latest offers and updates in your inbox.
            </p>
            <Newsletter />
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-[#1F1B14]/[0.08] pt-5 text-[12.5px] text-[#8A8478] sm:flex-row sm:items-center sm:justify-between">
          <span>© 2024 GoMeal. All Rights Reserved.</span>
          <span className="flex items-center gap-3">
            <a href="#" className="transition hover:text-[#F08B1D]">
              Privacy Policy
            </a>
            <a href="#" className="transition hover:text-[#F08B1D]">
              Terms of Service
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
