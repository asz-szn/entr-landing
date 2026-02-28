import { GlowOnView } from "@/hooks/useGlowOnView";

const FeaturesSection = () => {
  return (
    <section className="bg-grid">
      {/* Section label */}
      <div className="card-raised card-pad-sm flex items-center justify-between">
        <span className="font-mono text-xs tracking-widest">[ HOW IT WORKS ]</span>
        <span className="font-mono text-xs tracking-widest opacity-30">02</span>
      </div>

      {/* Two column layout */}
      <div className="grid-cols-inner lg:grid-cols-2">
        {/* For Fans */}
        <div className="grid-cols-inner">
          <GlowOnView className="card-raised card-pad">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">FOR FANS</h2>
          </GlowOnView>
          {[
            { title: "NO WALLET NEEDED", desc: "Sign up with email. Account abstraction handles the crypto." },
            { title: "SECURE STORAGE", desc: "Tickets live on-chain. No screenshots, no fakes, no theft." },
            { title: "FAIR RESALE", desc: "Sell at fair prices. Smart contracts enforce price caps." },
          ].map((item, i) => (
            <GlowOnView key={item.title} delay={i * 150} className="card-raised card-pad-sm group hover:bg-card/80 transition-colors">
              <h3 className="font-bold text-lg md:text-xl mb-2">{item.title}</h3>
              <p className="font-mono text-xs opacity-50">{item.desc}</p>
            </GlowOnView>
          ))}
        </div>

        {/* For Organizers */}
        <div className="grid-cols-inner">
          <GlowOnView className="card-raised card-pad">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">FOR ORGANIZERS</h2>
          </GlowOnView>
          {[
            { title: "INFINITE SCALE", desc: "Handle any demand. Our infrastructure never crashes." },
            { title: "ZERO COUNTERFEITS", desc: "Blockchain verification eliminates fake tickets." },
            { title: "RESALE ROYALTIES", desc: "Earn on every secondary sale. Automatic and trustless." },
          ].map((item, i) => (
            <GlowOnView key={item.title} delay={i * 150} className="card-raised card-pad-sm group hover:bg-card/80 transition-colors">
              <h3 className="font-bold text-lg md:text-xl mb-2">{item.title}</h3>
              <p className="font-mono text-xs opacity-50">{item.desc}</p>
            </GlowOnView>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
