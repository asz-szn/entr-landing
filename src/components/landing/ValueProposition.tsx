import { GlowOnView } from "@/hooks/useGlowOnView";

const ValueProposition = () => {
  return (
    <section className="bg-grid">
      {/* Stats row — 3 columns, 20px gap */}
      <div className="grid-cols-inner grid-cols-3">
        {[
          { value: "100K+", label: "TPS CAPACITY", delay: 100 },
          { value: "<1MS", label: "LATENCY", delay: 200 },
          { value: "0%", label: "SCALPERS", delay: 300 },
        ].map((stat) => (
          <GlowOnView key={stat.label} delay={stat.delay} className="card-raised card-pad">
            <p className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tight">{stat.value}</p>
            <p className="font-mono text-[10px] md:text-xs tracking-wider mt-3 opacity-50">{stat.label}</p>
          </GlowOnView>
        ))}
      </div>

      {/* Main statement */}
      <GlowOnView className="card-raised card-pad">
        <p className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight max-w-5xl">
          A ticketing protocol that rivals
          <br />
          <span className="opacity-30">traditional centralized systems.</span>
        </p>
      </GlowOnView>

      {/* Feature grid — 4 columns */}
      <div className="grid-cols-inner md:grid-cols-2 lg:grid-cols-4">
        {[
          { num: "01", title: "FAIR QUEUING", desc: "Blockchain-verified queue position. No bots, no scalpers." },
          { num: "02", title: "ZERO CRASHES", desc: "Infinite scalability. Handle any demand without downtime." },
          { num: "03", title: "P2P RESALE", desc: "Smart contract-enforced price caps protect fans." },
          { num: "04", title: "TRUE OWNERSHIP", desc: "Your ticket is an NFT you control completely." },
        ].map((item, i) => (
          <GlowOnView
            key={item.num}
            delay={i * 100}
            className="card-raised card-pad group hover:bg-card/80 transition-colors cursor-default"
          >
            <span className="font-mono text-xs tracking-wider opacity-30">{item.num}</span>
            <h3 className="text-lg md:text-xl font-bold mt-4 mb-2">{item.title}</h3>
            <p className="font-mono text-xs leading-relaxed opacity-50">{item.desc}</p>
          </GlowOnView>
        ))}
      </div>
    </section>
  );
};

export default ValueProposition;
