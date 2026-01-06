import {
  FiCheck,
  FiX,
  FiZap,
  FiCalendar,
  FiShield,
  FiGlobe,
} from "react-icons/fi";
import { IoInfinite, IoSparkles } from "react-icons/io5";

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="py-28 bg-gradient-to-b from-white to-slate-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-black text-slate-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Everything you need to post everywhere — without the chaos.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 items-stretch">
          {/* FREE */}
          <Card>
            <PlanTitle>Free</PlanTitle>
            <Price>$0</Price>

            <PerkList>
              <Perk
                icon={<FiCheck className="text-green-400" />}
                text="10 posts per month"
              />
              <Perk
                icon={<FiX className="text-red-400" />}
                text="Scheduling"
                sub="Instant posting only"
              />
              <Perk
                icon={<FiX className="text-red-400" />}
                text="Watermarked videos"
              />
              <Perk
                icon={<FiCheck className="text-green-400" />}
                text="3 platforms"
              />
            </PerkList>

            <MutedButton>Get Started</MutedButton>
          </Card>

          {/* PRO */}
          <Card highlight>
            <Badge>Most Popular</Badge>

            <PlanTitle accent>Creator Pro</PlanTitle>
            <Price>$9.99</Price>

            <PerkList>
              <Perk
                icon={<IoInfinite className="text-purple-600" />}
                text="Unlimited posts"
              />
              <Perk
                icon={<FiCalendar className="text-purple-600" />}
                text="Advanced scheduling"
              />
              <Perk
                icon={<FiShield className="text-purple-600" />}
                text="No watermarks"
              />
              <Perk
                icon={<FiGlobe className="text-purple-600" />}
                text="5 platforms"
              />
            </PerkList>

            <PrimaryButton>Upgrade to Pro</PrimaryButton>
          </Card>

          {/* ELITE */}
          <Card dark>
            <PlanTitle>Elite</PlanTitle>
            <Price dark>$24.99</Price>

            <PerkList>
              <Perk
                icon={<IoInfinite className="text-yellow-400" />}
                text="Unlimited everything"
                dark
              />
              <Perk
                icon={<FiZap className="text-yellow-400" />}
                text="Priority support"
                dark
              />
              <Perk
                icon={<FiGlobe className="text-yellow-400" />}
                text="All platforms"
                dark
              />
              <Perk
                icon={<IoSparkles className="text-yellow-400" />}
                text="No branding"
                dark
              />
            </PerkList>

            <LightButton>Go Elite</LightButton>
          </Card>
        </div>
      </div>
    </section>
  );
}

/* ------------------ Components ------------------ */

function Card({
  children,
  highlight,
  dark,
}: {
  children: React.ReactNode;
  highlight?: boolean;
  dark?: boolean;
}) {
  return (
    <div
      className={[
        "relative p-8 rounded-3xl transition-all duration-300",
        "hover:-translate-y-1",
        highlight &&
          "border-2 border-purple-600 bg-white shadow-[0_20px_40px_-10px_rgba(124,58,237,0.4)]",
        dark && "bg-slate-900 text-white border border-slate-800 shadow-xl",
        !highlight && !dark && "bg-white border border-slate-200 shadow-sm",
      ].join(" ")}
    >
      {children}
    </div>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="absolute -top-3 right-6 bg-purple-600 text-white text-xs font-black px-3 py-1 rounded-full">
      {children}
    </span>
  );
}

function PlanTitle({
  children,
  accent,
}: {
  children: React.ReactNode;
  accent?: boolean;
}) {
  return (
    <h3
      className={[
        "text-xl font-bold mb-3",
        accent ? "text-purple-600" : "text-slate-900",
      ].join(" ")}
    >
      {children}
    </h3>
  );
}

function Price({
  children,
  dark,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <div className="mb-8">
      <span
        className={[
          "text-4xl font-black",
          dark ? "text-white" : "text-slate-900",
        ].join(" ")}
      >
        {children}
      </span>
      <span className="text-slate-500 ml-2">/month</span>
    </div>
  );
}

function PerkList({ children }: { children: React.ReactNode }) {
  return <ul className="space-y-4 mb-10">{children}</ul>;
}

function Perk({
  icon,
  text,
  sub,
  dark,
}: {
  icon: React.ReactNode;
  text: string;
  sub?: string;
  dark?: boolean;
}) {
  return (
    <li className="flex items-start gap-3 text-sm">
      <span className="mt-1 size-5">{icon}</span>
      <div>
        <p
          className={[
            "font-semibold leading-tight",
            dark ? "text-white" : "text-slate-900",
          ].join(" ")}
        >
          {text}
        </p>
        {sub && <p className="text-xs text-slate-400 font-normal">{sub}</p>}
      </div>
    </li>
  );
}

/* ------------------ Buttons ------------------ */

function PrimaryButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="w-full py-4 rounded-2xl font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:opacity-90 transition shadow-lg">
      {children}
    </button>
  );
}

function MutedButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="w-full py-4 rounded-2xl font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition">
      {children}
    </button>
  );
}

function LightButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="w-full py-4 rounded-2xl font-bold bg-white text-slate-900 hover:bg-slate-100 transition">
      {children}
    </button>
  );
}
