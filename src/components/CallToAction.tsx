import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card max-w-3xl mx-auto p-10 md:p-16 text-center glow-border"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Share Your Story with the World
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto leading-relaxed">
            Join thousands of authors publishing their work on Libro. 
            Upload, manage, and sell your books with ease.
          </p>
          <button className="group px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-display font-semibold text-sm inline-flex items-center gap-2 hover:shadow-[0_0_30px_-5px_hsl(36_80%_55%/0.4)] transition-all duration-300">
            Start Publishing
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
