import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import { books } from "@/lib/books";
import BookCard from "./BookCard";

const TrendingBooks = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between mb-12"
        >
          <div>
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              <span className="text-sm text-primary font-medium uppercase tracking-wider">Trending Now</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Popular This Week
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:inline-flex text-sm text-muted-foreground hover:text-primary transition-colors border border-border rounded-lg px-5 py-2.5 hover:border-primary/50"
          >
            View All
          </a>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6">
          {books.map((book, i) => (
            <BookCard key={book.id} book={book} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingBooks;
