import { useEffect, useRef } from "react";

const categories = {
  row1: ["Concerts", "Sports", "Musicals", "Festivals", "Comedy Shows", "Concerts", "Sports", "Musicals", "Festivals", "Comedy Shows"],
  row2: ["Theater", "Conferences", "Exhibitions", "Club Nights", "Operas", "Theater", "Conferences", "Exhibitions", "Club Nights", "Operas"],
  row3: ["Stand-up", "E-Sports", "Film Premieres", "Award Shows", "Galas", "Stand-up", "E-Sports", "Film Premieres", "Award Shows", "Galas"],
  row4: ["Food Festivals", "Art Shows", "Dance Events", "Charity Events", "Pop-ups", "Food Festivals", "Art Shows", "Dance Events", "Charity Events", "Pop-ups"],
};

const MarqueeRow = ({ items, direction = "left", speed = 22 }: { items: string[]; direction?: "left" | "right"; speed?: number }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let id: number;
    let pos = direction === "left" ? 0 : -el.scrollWidth / 2;
    const step = speed / 60;
    const animate = () => {
      if (direction === "left") {
        pos -= step;
        if (pos <= -el.scrollWidth / 2) pos = 0;
      } else {
        pos += step;
        if (pos >= 0) pos = -el.scrollWidth / 2;
      }
      el.style.transform = `translateX(${pos}px)`;
      id = requestAnimationFrame(animate);
    };
    id = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(id);
  }, [direction, speed]);

  return (
    <div className="relative overflow-hidden">
      <div ref={scrollRef} className="flex gap-10 whitespace-nowrap py-1 will-change-transform md:gap-12">
        {items.map((item, i) => (
          <span key={i} className="select-none font-sans text-5xl font-medium uppercase leading-none tracking-[-0.04em] text-foreground/[0.1] transition-colors hover:text-foreground md:text-7xl lg:text-8xl">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

const EntrAnywhereSection = () => (
  <div className="py-12 md:py-16 overflow-hidden">
    <div className="px-10 mb-10">
      <div className="section-label mb-4">
        <span>◇</span>
        <span>Entr Anywhere</span>
      </div>
      <p className="font-mono text-[11px] opacity-30 max-w-md">
        From stadium tours to intimate venues, your ticket to every experience.
      </p>
    </div>
    <div className="space-y-0">
      <MarqueeRow items={categories.row1} direction="left" />
      <MarqueeRow items={categories.row2} direction="right" />
      <MarqueeRow items={categories.row3} direction="left" />
      <MarqueeRow items={categories.row4} direction="right" />
    </div>
  </div>
);

export default EntrAnywhereSection;
