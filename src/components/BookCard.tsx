import { motion } from "framer-motion";
import { Star, ShoppingCart, Eye } from "lucide-react";
import { Book } from "@/lib/books";

interface BookCardProps {
  book: Book;
  index: number;
}

const BookCard = ({ book, index }: BookCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="group relative"
    >
      <div className="relative overflow-hidden rounded-2xl bg-card border border-border/30 hover:border-primary/20 transition-all duration-500 hover-lift">
        {/* Cover */}
        <div className="relative overflow-hidden aspect-[3/4]">
          <img
            src={book.cover}
            alt={book.title}
            loading="lazy"
            width={560}
            height={800}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Overlay Actions */}
          <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
            <button className="flex-1 py-2.5 rounded-full bg-primary text-primary-foreground text-xs font-display font-semibold flex items-center justify-center gap-2 hover:shadow-[0_0_30px_-5px_hsl(170_60%_50%/0.5)] transition-shadow duration-300">
              <ShoppingCart className="w-3.5 h-3.5" />
              Add to Cart
            </button>
            <button className="p-2.5 rounded-full bg-surface/80 backdrop-blur-md text-foreground border border-border/30 hover:bg-surface transition-colors duration-300">
              <Eye className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Info */}
        <div className="p-4">
          <span className="text-[10px] text-primary/80 font-display font-semibold uppercase tracking-[0.2em]">
            {book.category}
          </span>
          <h3 className="font-display font-semibold text-foreground mt-1.5 mb-1 line-clamp-1 text-sm">
            {book.title}
          </h3>
          <p className="text-xs text-muted-foreground mb-3">{book.author}</p>
          <div className="flex items-center justify-between">
            <span className="font-display font-bold text-base text-foreground">
              ${book.price}
            </span>
            <div className="flex items-center gap-1">
              <Star className="w-3 h-3 text-primary fill-primary" />
              <span className="text-xs text-muted-foreground">{book.rating}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BookCard;
