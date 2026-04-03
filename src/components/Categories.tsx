import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { categories } from "@/lib/books";

const Categories = () => {
  return (
    <section className="py-24 relative">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/30 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">
            Browse by Category
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Find your next favorite book across our curated collection of genres
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
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass-card p-6 text-center group cursor-pointer hover-lift"
            >
              <div className="text-3xl mb-3">{cat.icon}</div>
              <h3 className="font-display font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                {cat.name}
              </h3>
              <p className="text-xs text-muted-foreground">{cat.count.toLocaleString()} books</p>
              <ArrowRight className="w-4 h-4 text-primary mx-auto mt-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
