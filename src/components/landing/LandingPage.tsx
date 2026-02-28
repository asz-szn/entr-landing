import { useState, useRef, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import HeroCanvas from "./HeroCanvas";
import EntrAnywhereSection from "./EntrAnywhereSection";
import cardNoWallet from "@/assets/card-no-wallet.png";
import entrLogo from "@/assets/entr-logo.svg";
import cardSecure from "@/assets/card-secure.png";
import cardFairResale from "@/assets/card-fair-resale.png";
import cardInfiniteScale from "@/assets/card-infinite-scale.png";
import cardRoyalties from "@/assets/card-royalties.png";

/* ═══════════════════════════════════════════
   NAV
   ═══════════════════════════════════════════ */
const Nav = () => (
  <nav className="flex items-center justify-between px-8 py-5 border-b border-foreground/[0.15]">
    <span className="text-xl font-bold tracking-tight">E/</span>
    <div className="hidden md:flex items-center gap-8 font-mono text-[11px] tracking-wider">
      <a href="#features" className="opacity-40 hover:opacity-100 transition-opacity">Features</a>
      <a href="#events" className="opacity-40 hover:opacity-100 transition-opacity">Events</a>
      <a href="#waitlist" className="opacity-40 hover:opacity-100 transition-opacity">Waitlist</a>
    </div>
    <a href="#waitlist" className="font-mono text-[11px] tracking-widest opacity-50 hover:opacity-100 transition-opacity flex items-center gap-2">
      JOIN WAITLIST <ArrowUpRight className="w-3 h-3" />
    </a>
  </nav>
);

/* ═══════════════════════════════════════════
   HERO
   ═══════════════════════════════════════════ */
const Hero = () => (
  <div className="flex flex-col">
    <div className="px-4 md:px-8 pt-8 md:pt-12 pb-4 md:pb-6">
      <div className="flex items-end justify-between gap-8 mb-0">
    <h1 className="text-[clamp(3rem,12vw,11rem)] font-medium leading-[0.85] tracking-[-0.04em] text-foreground">
          NỀN TẢNG
        </h1>
        <div className="hidden lg:block pb-2 text-right flex-shrink-0 max-w-xs">
          <p className="font-mono text-[11px] tracking-wider leading-relaxed opacity-50">
            ENTR IS A BLOCKCHAIN-BASED TICKETING PLATFORM
          </p>
          <p className="font-mono text-[11px] tracking-wider font-bold">
            BUILDING THE FUTURE OF LIVE EVENTS
          </p>
          <a href="#" className="inline-flex items-center gap-2 mt-2 font-mono text-[11px] tracking-widest hover:opacity-60 transition-opacity">
            [ &nbsp; ⊕ READ MORE &nbsp; ]
          </a>
        </div>
      </div>

      <div className="flex items-end justify-center gap-4 md:gap-6 mb-0">
        <h1 className="text-[clamp(3rem,12vw,11rem)] font-medium leading-[0.85] tracking-[-0.04em] text-foreground">
          MUA VÉ
        </h1>
      </div>

      <div className="flex items-center justify-between gap-4">
        <img src={entrLogo} alt="ENTR logo" className="h-[clamp(3rem,12vw,11rem)] w-auto" />
        <h1 className="text-[clamp(3rem,12vw,11rem)] font-medium leading-[0.85] tracking-[-0.04em] text-foreground">
          SỰ KIỆN
        </h1>
      </div>

      <div className="flex items-center gap-4">
        <span className="inline-flex items-center gap-2 px-4 py-2 border border-foreground/[0.2] font-mono text-[11px] tracking-wider">
          ⚡ FAIR QUEUING
        </span>
        <span className="inline-flex items-center gap-2 px-4 py-2 border border-foreground/[0.2] font-mono text-[11px] tracking-wider">
          ⚡ ZERO CRASHES
        </span>
        <span className="hidden md:inline-flex items-center gap-2 px-4 py-2 border border-foreground/[0.2] font-mono text-[11px] tracking-wider">
          ⚡ P2P RESALE
        </span>
      </div>
    </div>

    <div className="relative w-full h-[200px] md:h-[260px] lg:h-[300px]">
      <HeroCanvas />
    </div>
  </div>
);

/* ═══════════════════════════════════════════
   SECTION BAR — simple line with label
   ═══════════════════════════════════════════ */
const SectionBar = ({ label, num }: { label: string; num: string }) => (
  <div className="flex items-center justify-between px-8 py-4 border-t border-foreground/[0.15]">
    <span className="font-mono text-[11px] tracking-[0.2em] uppercase opacity-50">◇ {label}</span>
    <span className="font-mono text-[11px] tracking-widest opacity-20">{num}</span>
  </div>
);

/* ═══════════════════════════════════════════
   STATS
   ═══════════════════════════════════════════ */
const stats = [
  { value: "100K+", label: "TPS Capacity" },
  { value: "<1ms", label: "Latency" },
  { value: "0%", label: "Scalpers" },
];

const StatsBar = () => (
  <div className="flex flex-col md:flex-row md:items-stretch md:divide-x divide-foreground/[0.15]">
    {stats.map((s) => (
      <div key={s.label} className="p-6 md:p-8 flex-1 border-b md:border-b-0 border-foreground/[0.15] last:border-b-0">
        <p className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight">{s.value}</p>
        <p className="font-mono text-[10px] md:text-xs tracking-wider mt-2 opacity-30">{s.label}</p>
      </div>
    ))}
  </div>
);

/* ═══════════════════════════════════════════
   FEATURES
   ═══════════════════════════════════════════ */
const features = [
  { num: "001", title: "Fair Queuing", desc: "Verified blockchain position — no bots, no scalpers, provably fair" },
  { num: "002", title: "Zero Crashes", desc: "Infinite scale with decentralized infra — no single point of failure" },
  { num: "003", title: "True Ownership", desc: "NFT tickets with smart-contract-enforced price caps on resale" },
];

const FeaturesSection = () => (
  <div id="features">
    <div className="flex flex-col md:flex-row md:divide-x divide-foreground/[0.15]">
      {features.map((f) => (
        <div key={f.num} className="flex-1 p-8 border-b md:border-b-0 border-foreground/[0.15] last:border-b-0">
          <div className="flex items-start justify-between mb-6">
            <h3 className="text-xl md:text-2xl font-bold tracking-tight">{f.title}</h3>
            <span className="font-mono text-[10px] opacity-30">{f.num}</span>
          </div>
          <div className="border-t border-foreground/[0.12] pt-4">
            <p className="font-mono text-[11px] opacity-50">{f.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

/* ═══════════════════════════════════════════
   HOW IT WORKS
   ═══════════════════════════════════════════ */
const howItWorks = [
  { num: "01", title: "Fair Queuing", items: ["Blockchain Queue — verified position", "Transparent Drops — provably fair"] },
  { num: "02", title: "Zero Crashes", items: ["Infinite Scale — handle any demand", "Decentralized — no single failure"] },
  { num: "03", title: "True Ownership", items: ["NFT Tickets — fully on-chain", "P2P Resale — price caps enforced"] },
  { num: "04", title: "No Wallet Needed", items: ["Email Signup — account abstraction", "QR code entry — works everywhere"] },
];

const HowItWorks = () => {
  const [open, setOpen] = useState(0);

  return (
    <div className="flex flex-col">
      {/* Centered label with connector lines to cards */}
      <div className="relative py-10">
        <div className="text-center">
          <h2 className="text-xl md:text-2xl font-bold tracking-tight bg-background px-6 relative z-10 inline-block">
            POWERED BY BLOCKCHAIN TECHNOLOGY
          </h2>
        </div>
        {/* Vertical line from label down */}
        <div className="absolute left-1/2 bottom-0 w-px h-6 bg-foreground/[0.15]" />
      </div>
      {/* Horizontal connector line spanning all cards */}
      <div className="relative hidden md:block">
        <div className="border-t border-foreground/[0.15] mx-[10%]" />
        <div className="flex">
          {[0, 1, 2, 3].map((i) => (
             <div key={i} className="flex-1 flex justify-center">
               <div className="w-px h-6 bg-foreground/[0.15]" />
             </div>
           ))}
        </div>
      </div>
      {/* All cards in one row */}
      <div className="grid grid-cols-2 md:grid-cols-4 divide-foreground/[0.15] border-t border-foreground/[0.15]">
        {[
          { title: "NO WALLET", img: cardNoWallet },
          { title: "SECURE", img: cardSecure },
          { title: "FAIR RESALE", img: cardFairResale },
          { title: "INFINITE SCALE", img: cardInfiniteScale },
        ].map((card) => (
          <div key={card.title} className="flex flex-col border-b border-r border-foreground/[0.15]">
            <div className="aspect-square bg-foreground/[0.06] flex items-center justify-center overflow-hidden">
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="px-4 py-3 border-t border-foreground/[0.15] text-center">
              <span className="font-mono text-[10px] tracking-[0.15em] opacity-50">{card.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════
   BLOG
   ═══════════════════════════════════════════ */
const posts = [
  { id: "01", title: "WHY BLOCKCHAIN TICKETING MATTERS", tag: "INSIGHT", date: "FEB 2026" },
  { id: "02", title: "HOW SMART CONTRACTS KILL SCALPING", tag: "TECH", date: "JAN 2026" },
  { id: "03", title: "THE FUTURE OF LIVE EVENT ACCESS", tag: "OPINION", date: "DEC 2025" },
];

const BlogSection = () => (
  <div id="events" className="divide-y divide-foreground/[0.15]">
    {posts.map((post) => (
      <a
        key={post.id}
        href="#"
        className="flex items-center px-8 md:px-10 py-6 md:py-8 group hover:bg-foreground/[0.04] transition-colors"
      >
        <span className="font-mono text-[11px] tracking-wider opacity-20 w-10">{post.id}</span>
        <div className="flex-1">
          <h3 className="text-lg md:text-xl font-bold tracking-tight group-hover:translate-x-3 transition-transform">
            {post.title}
          </h3>
        </div>
        <div className="hidden md:flex items-center gap-8 font-mono text-[11px] tracking-wider opacity-30">
          <span>{post.tag}</span>
          <span>{post.date}</span>
        </div>
        <ArrowUpRight className="w-5 h-5 ml-6 opacity-0 group-hover:opacity-40 transition-opacity" />
      </a>
    ))}
  </div>
);

/* ═══════════════════════════════════════════
   WAITLIST
   ═══════════════════════════════════════════ */
const WaitlistCTA = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true);
    setTimeout(() => {
      toast({ title: "You're on the list!", description: "We'll notify you when Entr launches." });
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col md:flex-row md:divide-x divide-foreground/[0.15]" id="waitlist">
      {/* Left: page nav */}
      <div className="p-8 hidden lg:block" style={{ flex: '0 0 180px' }}>
        <ul className="space-y-1">
          {["01 Intro", "02 Stats", "03 Features", "04 How it works", "05 Events", "06 Waitlist"].map((item) => (
            <li key={item} className="font-mono text-[11px] opacity-40 py-2 border-b border-foreground/[0.12]">
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Center: CTA */}
      <div className="flex-1 p-10 md:p-14">
        <div className="section-label mb-6">
          <span>◇</span>
          <span>Ready to ship fair ticketing</span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-8" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Nền tảng mua vé đẳng cấp
          <br />
          <span className="opacity-50">cho những trải nghiệm đẳng cấp.</span>
        </h2>
        <form onSubmit={handleSubmit} className="max-w-md">
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-6 py-4 bg-background border border-foreground/[0.15] font-mono text-sm placeholder:opacity-20 focus:outline-none focus:border-foreground/30 mb-0"
            required
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 bg-foreground/[0.08] font-mono text-[11px] tracking-widest hover:bg-foreground/[0.14] transition-colors border border-foreground/[0.15] border-t-0 disabled:opacity-50"
          >
            {isSubmitting ? "..." : "JOIN WAITLIST"}
          </button>
        </form>
      </div>

      {/* Right: links */}
      <div className="flex-1 p-10 md:p-14">
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h4 className="font-mono text-[10px] tracking-widest opacity-30 mb-4">PAGES</h4>
            <ul className="space-y-2">
              {["Homepage", "About", "Documentation", "Waitlist", "Blog"].map((link) => (
                <li key={link} className="border-b border-foreground/[0.12] pb-2">
                  <a href="#" className="font-mono text-sm opacity-50 hover:opacity-100 transition-opacity">{link}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-mono text-[10px] tracking-widest opacity-30 mb-4">SOCIAL</h4>
            <ul className="space-y-2">
              {["Twitter", "Discord", "Github", "Telegram", "X"].map((link) => (
                <li key={link} className="border-b border-foreground/[0.12] pb-2">
                  <a href="#" className="font-mono text-sm opacity-50 hover:opacity-100 transition-opacity">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════
   FOOTER
   ═══════════════════════════════════════════ */
const Footer = () => (
  <>
    {/* Stats row */}
    <div className="flex flex-col md:flex-row md:divide-x divide-foreground/[0.15] border-t border-foreground/[0.15]">
      <div className="p-6 md:p-8 flex-1">
        <p className="text-xl font-bold">Active</p>
        <p className="font-mono text-[10px] opacity-30">Network Status</p>
      </div>
      <div className="p-6 md:p-8 flex-1">
        <p className="text-xl font-bold">100,000+</p>
        <p className="font-mono text-[10px] opacity-30">Events Supported</p>
      </div>
      <div className="p-6 md:p-8 flex-1">
        <p className="font-mono text-[11px] opacity-40 leading-relaxed">
          Entr is a blockchain-based ticketing platform. Fair queuing, zero crashes,
          true ownership — automatically, with full control.
        </p>
      </div>
    </div>

    {/* Giant brand name */}
    <div className="p-8 md:p-12 overflow-hidden relative border-t border-foreground/[0.15]">
      <p className="text-mega select-none opacity-10">ENTR</p>
    </div>

    {/* Copyright bar */}
    <div className="px-8 py-4 flex flex-col md:flex-row justify-between items-center gap-4 border-t border-foreground/[0.15]">
      <p className="font-mono text-[10px] opacity-20">© Entr, 2025</p>
      <div className="flex-1 hidden md:block border-t border-dotted border-foreground/[0.12] mx-8" />
      <div className="flex gap-6 items-center">
        <span className="font-mono text-[10px] opacity-20">All rights reserved</span>
        <a href="#" className="font-mono text-[10px] opacity-40 hover:opacity-100 transition-opacity">Terms of use</a>
        <a href="#" className="font-mono text-[10px] opacity-40 hover:opacity-100 transition-opacity">Privacy Policy</a>
        <span className="text-lg font-bold opacity-20">◇</span>
      </div>
    </div>
  </>
);

/* ═══════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════ */
const LandingPage = () => (
  <div className="grid-page">
    <Nav />
    <Hero />
    <SectionBar label="Performance" num="01" />
    <StatsBar />
    <SectionBar label="Features" num="02" />
    <FeaturesSection />
    <SectionBar label="How it works" num="03" />
    <HowItWorks />
    <SectionBar label="Blog" num="04" />
    <BlogSection />
    <SectionBar label="Entr Anywhere" num="05" />
    <EntrAnywhereSection />
    <SectionBar label="Join waitlist" num="06" />
    <WaitlistCTA />
    <Footer />
  </div>
);

export default LandingPage;
