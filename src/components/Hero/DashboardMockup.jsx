import {
  ArrowUpRight,
  Bell,
  Camera,
  CircleDollarSign,
  CreditCard,
  MapPin,
  Search,
  Settings,
  ShoppingBag,
  Sparkles,
  Wallet,
  Plus,
  MessageSquare,
  Clock3,
  ReceiptText,
  UtensilsCrossed,
} from "lucide-react";
import { categories } from "../../data/categories";
import { dishes, orderItems } from "../../data/dishes";
import { useTilt } from "../../hooks/useTilt";

const sidebarItems = [
  { label: "Dashboard", icon: Sparkles, active: true },
  { label: "Food Order", icon: UtensilsCrossed },
  { label: "Favorite", icon: ShoppingBag },
  { label: "Message", icon: MessageSquare },
  { label: "Order History", icon: Clock3 },
  { label: "Bills", icon: ReceiptText },
  { label: "Setting", icon: Settings },
];

function DashboardMockup() {
  const { ref, style } = useTilt();

  return (
    <div className="relative z-10 mt-6 md:mt-8 lg:mt-10">
      <div className="mx-auto max-w-[1010px] perspective-[1800px]">
        <div
          ref={ref}
          style={style}
          className="grid overflow-hidden rounded-[28px] border border-[#1F1B14]/[0.08] bg-white shadow-[0_40px_70px_-30px_rgba(150,100,20,0.35)] transition-transform duration-150 ease-out md:grid-cols-[210px_1fr_260px]"
        >
          <aside className="border-b border-[#1F1B14]/[0.08] bg-[#fff] p-6 md:border-b-0 md:border-r">
            <div className="mb-7 text-[17px] font-extrabold tracking-[-0.05em] text-[#1F1B14]">
              GoMeal<span className="text-[#F08B1D]">.</span>
            </div>

            <nav className="space-y-1.5" aria-label="Sidebar">
              {sidebarItems.map(({ label, icon: Icon, active }) => (
                <button
                  key={label}
                  type="button"
                  className={`flex w-full items-center gap-2.5 rounded-xl px-3 py-2.5 text-left text-[13px] font-semibold transition ${
                    active
                      ? "bg-gradient-to-r from-[#F5A623] to-[#F08B1D] text-white shadow-[0_10px_20px_-12px_rgba(240,139,29,0.75)]"
                      : "text-[#8A8478] hover:bg-[#F6F5F7] hover:text-[#1F1B14]"
                  }`}
                >
                  <Icon size={16} strokeWidth={2.3} />
                  {label}
                </button>
              ))}
            </nav>

            <div className="mt-6 rounded-2xl bg-gradient-to-br from-[#F5A623] to-[#F08B1D] p-4 text-white shadow-[0_12px_24px_-12px_rgba(240,139,29,0.8)]">
              <p className="text-[11.5px] leading-5 opacity-95">
                Upgrade your account to get free voucher
              </p>
              <button
                type="button"
                className="mt-3 rounded-lg bg-white px-3.5 py-2 text-[11px] font-bold text-[#F08B1D] transition hover:bg-[#FFF3DC]"
              >
                Upgrade
              </button>
            </div>
          </aside>

          <main className="bg-[#F6F5F7] p-5 sm:p-6">
            <div className="mb-5 flex items-center justify-between gap-3">
              <h3 className="text-[17px] font-bold tracking-[-0.04em] text-[#1F1B14]">
                Hello, Patricia
              </h3>
              <div className="flex w-full max-w-[220px] items-center gap-2 rounded-xl border border-[#1F1B14]/[0.08] bg-white px-3.5 py-2.5 text-left text-[12px] text-[#8A8478] shadow-sm">
                <Search size={15} strokeWidth={2.2} />
                <span>What do you want eat today...</span>
              </div>
            </div>

            <div className="mb-5 flex items-center justify-between gap-4 rounded-[18px] bg-gradient-to-r from-[#F5A623] to-[#F08B1D] p-5 text-white shadow-[0_20px_28px_-18px_rgba(240,139,29,0.7)]">
              <div>
                <h4 className="text-[17px] font-bold leading-tight">
                  Get Discount Voucher <br /> Up To 20%
                </h4>
                <p className="mt-2 max-w-[220px] text-[11px] leading-5 text-white/85">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
                alt="Patricia"
                className="h-[90px] w-[90px] rounded-full border-[3px] border-white/50 object-cover"
              />
            </div>

            <div className="mb-3 flex items-center justify-between">
              <h5 className="text-[14px] font-bold text-[#1F1B14]">Category</h5>
              <button
                type="button"
                className="text-[11px] font-semibold text-[#F08B1D] transition hover:text-[#d97617]"
              >
                View all →
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
              {categories.map(({ name, icon: Icon }) => (
                <div
                  key={name}
                  className="rounded-xl border border-[#1F1B14]/[0.08] bg-white px-2 py-3 text-center shadow-sm"
                >
                  <div className="mb-1.5 flex justify-center text-[18px] text-[#F08B1D]">
                    <Icon size={18} strokeWidth={2.2} />
                  </div>
                  <span className="text-[10px] font-semibold text-[#8A8478]">
                    {name}
                  </span>
                </div>
              ))}
            </div>

            <div className="mb-3 mt-5 flex items-center justify-between">
              <h5 className="text-[14px] font-bold text-[#1F1B14]">
                Popular Dishes
              </h5>
              <button
                type="button"
                className="text-[11px] font-semibold text-[#F08B1D] transition hover:text-[#d97617]"
              >
                View all →
              </button>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {dishes.map(({ name, price, discount, image }) => (
                <article
                  key={name}
                  className="relative rounded-[14px] border border-[#1F1B14]/[0.08] bg-white p-2.5 shadow-sm"
                >
                  <span className="absolute left-4 top-4 rounded-md bg-[#EF4444] px-1.5 py-1 text-[8.5px] font-bold text-white">
                    {discount}
                  </span>
                  <img
                    src={image}
                    alt={name}
                    className="h-[70px] w-full rounded-[10px] object-cover"
                  />
                  <div className="mt-2.5 flex items-center justify-between gap-2">
                    <b className="text-[11.5px] font-bold text-[#1F1B14]">
                      {name}
                    </b>
                  </div>
                  <div className="mt-1.5 flex items-center justify-between text-[11.5px] font-bold text-[#F08B1D]">
                    <span>{price}</span>
                    <button
                      type="button"
                      aria-label={`Add ${name}`}
                      className="flex h-5 w-5 items-center justify-center rounded-md bg-[#F5A623] text-white shadow-sm transition hover:bg-[#F08B1D]"
                    >
                      <Plus size={12} strokeWidth={2.5} />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </main>

          <aside className="border-t border-[#1F1B14]/[0.08] bg-white p-5 md:border-l md:border-t-0">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2 text-[14px] text-[#8A8478]">
                <Camera size={16} strokeWidth={2.2} />
                <Bell size={16} strokeWidth={2.2} />
                <Settings size={16} strokeWidth={2.2} />
              </div>
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop"
                alt="User avatar"
                className="h-8 w-8 rounded-full object-cover"
              />
            </div>

            <div className="mb-3 text-[12px] font-bold text-[#1F1B14]">
              Your Balance
            </div>
            <div className="rounded-[14px] bg-gradient-to-r from-[#F5A623] to-[#F08B1D] p-3.5 text-white shadow-[0_16px_26px_-14px_rgba(240,139,29,0.75)]">
              <span className="text-[10px] opacity-85">Balance</span>
              <b className="mt-1 block text-[19px] font-bold">$12.00</b>
              <div className="mt-2 flex items-center gap-3 text-[9.5px] font-medium">
                <span className="inline-flex items-center gap-1">
                  <Wallet size={12} strokeWidth={2} />
                  Top Up
                </span>
                <span className="inline-flex items-center gap-1">
                  <ArrowUpRight size={12} strokeWidth={2} />
                  Transfer
                </span>
              </div>
            </div>

            <div className="mt-4 text-[11px] leading-5 text-[#8A8478]">
              <div className="mb-1 flex items-center gap-2 text-[#1F1B14]">
                <MapPin size={13} strokeWidth={2.2} />
                <b className="font-bold">Elm Street, 23</b>
              </div>
              Lorem ipsum dolor sit amet.
            </div>

            <div className="mt-5 text-[12px] font-bold text-[#1F1B14]">
              Order Menu
            </div>
            <div className="mt-3 space-y-3">
              {orderItems.map(({ name, quantity, price, image }) => (
                <div key={name} className="flex items-center gap-2.5">
                  <img
                    src={image}
                    alt={name}
                    className="h-[30px] w-[30px] rounded-lg object-cover"
                  />
                  <div className="min-w-0 flex-1">
                    <b className="block truncate text-[11px] font-bold text-[#1F1B14]">
                      {name}
                    </b>
                    <span className="text-[9.5px] text-[#8A8478]">
                      {quantity}
                    </span>
                  </div>
                  <span className="text-[11px] font-bold text-[#F08B1D]">
                    {price}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-5 flex items-center justify-between border-t border-dashed border-[#1F1B14]/[0.1] pt-3 text-[12px] font-bold">
              <span>Total</span>
              <span>$202.00</span>
            </div>

            <button
              type="button"
              className="mt-3 w-full rounded-xl bg-gradient-to-r from-[#F5A623] to-[#F08B1D] px-3 py-2.5 text-[12px] font-bold text-white shadow-[0_16px_22px_-12px_rgba(240,139,29,0.75)] transition hover:-translate-y-0.5"
            >
              Checkout
            </button>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default DashboardMockup;
