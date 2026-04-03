const items = [
  "Tidal Minds",
  "Echoes of Tomorrow",
  "The Last Algorithm",
  "Neon Dusk",
  "Whispers in Code",
  "Beyond the Horizon",
  "Silent Frequencies",
  "The Glass Library",
];

const Marquee = () => {
  return (
    <div className="relative py-6 overflow-hidden border-y border-border/20 bg-surface/20">
      <div className="marquee flex whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-6 mx-6 text-sm font-display font-medium tracking-widest uppercase text-muted-foreground/60"
          >
            <span className="hover:text-primary transition-colors duration-300 cursor-default">
              {item}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary/30" />
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
