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
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="glass-card overflow-hidden hover-lift">
        {/* Cover */}
        <div className="relative overflow-hidden aspect-[3/4]">
          <img
            src={book.cover}
            alt={book.title}
            loading="lazy"
            width={560}
            height={800}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Overlay Actions */}
          <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            <button className="flex-1 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-display font-semibold flex items-center justify-center gap-2 hover:shadow-[0_0_20px_-5px_hsl(36_80%_55%/0.5)] transition-shadow">
              <ShoppingCart className="w-4 h-4" />
              Add to Cart
            </button>
            <button className="p-2.5 rounded-lg bg-surface/80 backdrop-blur-sm text-foreground border border-border/50 hover:bg-surface transition-colors">
              <Eye className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Info */}
        <div className="p-4">
          <span className="text-xs text-primary font-medium uppercase tracking-wider">
            {book.category}
          </span>
          <h3 className="font-display font-semibold text-foreground mt-1 mb-1 line-clamp-1">
            {book.title}
          </h3>
          <p className="text-sm text-muted-foreground mb-3">{book.author}</p>
          <div className="flex items-center justify-between">
            <span className="font-display font-bold text-lg text-foreground">
              ${book.price}
            </span>
            <div className="flex items-center gap-1">
              <Star className="w-3.5 h-3.5 text-primary fill-primary" />
              <span className="text-sm text-muted-foreground">{book.rating}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BookCard;
