import { motion } from "framer-motion";
import { ArrowRight, Pen } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/4 rounded-full blur-[200px]" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 mb-8">
            <Pen className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-display font-semibold text-primary tracking-wider uppercase">
              For Authors
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-display font-extrabold text-foreground mb-5 leading-tight">
            Share Your Story
            <br />
            <span className="text-gradient-tidal">With the World</span>
          </h2>
          <p className="text-muted-foreground mb-10 max-w-lg mx-auto leading-relaxed font-body">
            Join thousands of authors publishing their work on Libro.
            Upload, manage, and sell your books with zero friction.
          </p>
          <button className="group px-10 py-4 rounded-full bg-primary text-primary-foreground font-display font-semibold text-sm inline-flex items-center gap-3 hover:shadow-[0_0_50px_-10px_hsl(170_60%_50%/0.4)] transition-all duration-500">
            Start Publishing
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
