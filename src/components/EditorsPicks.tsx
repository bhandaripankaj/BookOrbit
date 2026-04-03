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
    const amount = 340;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Tidal-inspired ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between mb-10"
        >
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Bookmark className="w-5 h-5 text-primary" />
              <span className="text-sm text-primary font-medium uppercase tracking-wider">
                Curated for You
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Editor's Picks
            </h2>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-2.5 rounded-xl border border-border bg-surface/50 text-muted-foreground hover:text-foreground hover:bg-surface hover:border-primary/40 transition-all duration-200"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2.5 rounded-xl border border-border bg-surface/50 text-muted-foreground hover:text-foreground hover:bg-surface hover:border-primary/40 transition-all duration-200"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Horizontal scroll area */}
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
              className="min-w-[300px] md:min-w-[320px] snap-start"
            >
              <div className="group glass-card overflow-hidden hover-lift cursor-pointer">
                <div className="flex gap-4 p-4">
                  {/* Book cover */}
                  <div className="relative w-24 h-36 rounded-lg overflow-hidden shrink-0">
                    <img
                      src={book.cover}
                      alt={book.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Info */}
                  <div className="flex flex-col justify-between py-1 min-w-0">
                    <div>
                      <span className="text-xs font-medium text-primary uppercase tracking-wider">
                        {book.category}
                      </span>
                      <h3 className="font-display font-semibold text-foreground mt-1 line-clamp-2 leading-snug group-hover:text-primary transition-colors duration-200">
                        {book.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-0.5">
                        {book.author}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-accent italic mb-2">
                        "{book.tagline}"
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          <Star className="w-3.5 h-3.5 text-primary fill-primary" />
                          <span className="text-sm text-muted-foreground">
                            {book.rating}
                          </span>
                        </div>
                        <span className="font-display font-bold text-foreground">
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
