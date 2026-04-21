import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { lazy, Suspense } from "react";
import heroImg from "@/assets/hero-books.jpg";

const FloatingBooks3D = lazy(() => import("./FloatingBooks3D"));

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden pb-20 pt-32">
      {/* Background with editorial grain */}
      <div className="absolute inset-0">
        <img
          src={heroImg.src}
          alt="Floating books"
          width={1920}
          height={1080}
          className="w-full h-full object-cover opacity-25 scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
      </div>

      {/* 3D Floating Books */}
      <Suspense fallback={null}>
        <FloatingBooks3D />
      </Suspense>

      {/* Ambient light blobs */}
      <div className="absolute top-1/3 right-1/5 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-accent/8 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-end">
          {/* Left - Editorial text */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-8"
            >
              <span className="inline-block px-4 py-1.5 text-xs font-display font-semibold tracking-[0.3em] uppercase text-primary border border-primary/30 rounded-full">
                Season's Collection
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-5xl sm:text-6xl md:text-8xl font-display font-extrabold leading-[0.9] tracking-tight mb-8"
            >
              <span className="block text-foreground">Stories</span>
              <span className="block text-foreground">That</span>
              <span className="block text-gradient-tidal">Resonate</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-base md:text-lg text-muted-foreground max-w-md mb-10 leading-relaxed font-body"
            >
              Not another bookstore. A curated space where 
              independent voices find their audience.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-wrap gap-4"
            >
              <button className="group px-8 py-4 rounded-full bg-primary text-primary-foreground font-display font-semibold text-sm flex items-center gap-3 hover:shadow-[0_0_40px_-5px_hsl(170_60%_50%/0.4)] transition-all duration-500">
                Explore Collection
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
              </button>
              <button className="group px-8 py-4 rounded-full border border-border/50 bg-transparent text-foreground font-display font-semibold text-sm flex items-center gap-3 hover:border-primary/40 hover:bg-surface/50 transition-all duration-500">
                <Play className="w-4 h-4 text-primary" />
                Watch Story
              </button>
            </motion.div>
          </div>

          {/* Right - Stats strip */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="hidden lg:flex flex-col gap-8 pb-4"
          >
            {[
              { value: "12K+", label: "Curated Books", desc: "Hand-picked collection" },
              { value: "3.5K", label: "Indie Authors", desc: "From 40+ countries" },
              { value: "98K+", label: "Active Readers", desc: "Growing community" },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className="group flex items-start gap-5 line-reveal cursor-default pb-6"
              >
                <span className="text-4xl md:text-5xl font-display font-extrabold text-gradient-tidal leading-none">
                  {stat.value}
                </span>
                <div>
                  <div className="text-sm font-display font-semibold text-foreground">{stat.label}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{stat.desc}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
