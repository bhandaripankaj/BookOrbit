import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { categories } from "@/lib/books";

const Categories = () => {
  return (
    <section className="py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/20 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-8 h-px bg-primary" />
            <span className="text-xs text-primary font-display font-semibold uppercase tracking-[0.3em]">
              Explore
            </span>
            <div className="w-8 h-px bg-primary" />
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-3">
            Browse by <span className="text-gradient-tidal">Genre</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto text-sm font-body">
            Find your next favorite across our curated collection
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat, i) => (
            <motion.a
              key={cat.name}
              href="#"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group relative p-6 rounded-2xl bg-card border border-border/30 text-center cursor-pointer hover:border-primary/20 hover-lift transition-all duration-500"
            >
              <div className="text-3xl mb-3">{cat.icon}</div>
              <h3 className="font-display font-semibold text-foreground text-sm mb-1 group-hover:text-primary transition-colors duration-300">
                {cat.name}
              </h3>
              <p className="text-[10px] text-muted-foreground font-body">{cat.count.toLocaleString()} books</p>
              <ArrowRight className="w-3.5 h-3.5 text-primary mx-auto mt-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
