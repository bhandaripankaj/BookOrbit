import { useRef } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Bookmark } from "lucide-react";
import { books, type Book } from "@/lib/books";

const editorPicks: (Book & { tagline: string })[] = [
  { ...books[3], tagline: "Mind-expanding journey" },
  { ...books[0], tagline: "A must-read this year" },
  { ...books[5], tagline: "Beautifully written" },
  { ...books[1], tagline: "Hauntingly poetic" },
  { ...books[2], tagline: "Transformative read" },
  { ...books[4], tagline: "Gripping from page one" },
];

const EditorsPicks = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 360;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-28 relative overflow-hidden">
      {/* Ambient gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/4 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/4 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-px bg-primary" />
              <span className="text-xs text-primary font-display font-semibold uppercase tracking-[0.3em]">
                Curated for You
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground leading-tight">
              Editor's
              <br />
              <span className="text-gradient-tidal">Picks</span>
            </h2>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-3 rounded-full border border-border/40 bg-transparent text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-surface/50 transition-all duration-300"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-3 rounded-full border border-border/40 bg-transparent text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-surface/50 transition-all duration-300"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        {/* Horizontal scroll */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4 snap-x snap-mandatory"
        >
          {editorPicks.map((book, i) => (
            <motion.div
              key={`pick-${book.id}-${i}`}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="min-w-[300px] md:min-w-[340px] snap-start"
            >
              <div className="group relative overflow-hidden rounded-2xl bg-card border border-border/30 hover:border-primary/20 transition-all duration-500 hover-lift cursor-pointer">
                <div className="flex gap-4 p-5">
                  {/* Book cover */}
                  <div className="relative w-24 h-36 rounded-xl overflow-hidden shrink-0">
                    <img
                      src={book.cover}
                      alt={book.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex flex-col justify-between py-0.5 min-w-0">
                    <div>
                      <span className="text-[10px] font-display font-semibold text-primary/80 uppercase tracking-[0.2em]">
                        {book.category}
                      </span>
                      <h3 className="font-display font-semibold text-foreground mt-1.5 line-clamp-2 leading-snug text-sm group-hover:text-primary transition-colors duration-300">
                        {book.title}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-1">
                        {book.author}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-accent/80 italic mb-2 font-body">
                        "{book.tagline}"
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 text-primary fill-primary" />
                          <span className="text-xs text-muted-foreground">
                            {book.rating}
                          </span>
                        </div>
                        <span className="font-display font-bold text-sm text-foreground">
                          ${book.price}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EditorsPicks;
