import { motion } from "framer-motion";
import { TrendingUp, ArrowRight } from "lucide-react";
import { books } from "@/lib/books";
import BookCard from "./BookCard";

const TrendingBooks = () => {
  return (
    <section className="py-28 relative">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-14"
        >
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-px bg-primary" />
              <span className="text-xs text-primary font-display font-semibold uppercase tracking-[0.3em]">
                Trending Now
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground leading-tight">
              Popular This
              <br />
              <span className="text-gradient-tidal">Week</span>
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300 font-display font-medium group"
          >
            View All
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-5">
          {books.map((book, i) => (
            <BookCard key={book.id} book={book} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingBooks;
