import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { GlowOnView } from "@/hooks/useGlowOnView";

const CTASection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    setTimeout(() => {
      toast({
        title: "You're on the list!",
        description: "We'll notify you when Entr launches.",
      });
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="bg-grid">
      <div className="card-raised card-pad">
        <GlowOnView>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-[40px]">
            JOIN THE
            <br />
            WAITLIST
          </h2>
        </GlowOnView>

        <p className="font-mono text-sm max-w-md mb-[40px] opacity-50">
          Get early access when we launch. No spam, just updates that matter.
        </p>

        <form onSubmit={handleSubmit} className="grid-cols-inner sm:grid-cols-[1fr_auto] max-w-xl">
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="card-raised card-pad-sm font-mono text-sm placeholder:opacity-40 focus:outline-none"
            required
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="card-raised card-pad-sm bg-foreground text-background font-mono text-sm tracking-widest hover:opacity-80 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {isSubmitting ? "..." : "SUBSCRIBE"}
            {!isSubmitting && <ArrowRight className="w-4 h-4" />}
          </button>
        </form>
      </div>
    </section>
  );
};

export default CTASection;
