import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ShoppingCart, User, Menu, X, BookOpen } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const links = ["Home", "Browse", "Categories", "Authors"];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-2xl border-b border-border/20"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-primary/15 flex items-center justify-center group-hover:bg-primary/25 transition-colors duration-300">
              <BookOpen className="w-5 h-5 text-primary" />
            </div>
            <span className="font-display text-xl font-bold text-foreground tracking-tight">
              Libro<span className="text-primary">.</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors duration-300 relative line-reveal pb-1"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-1.5">
            <AnimatePresence>
              {searchOpen && (
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 220, opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <input
                    autoFocus
                    type="text"
                    placeholder="Search books..."
                    className="w-full bg-surface border border-border/50 rounded-full px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50"
                  />
                </motion.div>
              )}
            </AnimatePresence>

            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2.5 rounded-xl text-muted-foreground hover:text-foreground hover:bg-surface/50 transition-all duration-300"
            >
              <Search className="w-[18px] h-[18px]" />
            </button>

            <button className="p-2.5 rounded-xl text-muted-foreground hover:text-foreground hover:bg-surface/50 transition-all duration-300 relative">
              <ShoppingCart className="w-[18px] h-[18px]" />
              <span className="absolute top-1 right-1 w-4 h-4 bg-primary text-primary-foreground text-[10px] font-bold rounded-full flex items-center justify-center">
                3
              </span>
            </button>

            <button className="hidden md:flex p-2.5 rounded-xl text-muted-foreground hover:text-foreground hover:bg-surface/50 transition-all duration-300">
              <User className="w-[18px] h-[18px]" />
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2.5 rounded-xl text-muted-foreground hover:text-foreground hover:bg-surface/50 transition-all duration-300"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden border-t border-border/20"
            >
              <div className="py-6 flex flex-col gap-1">
                {links.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors px-3 py-2.5 rounded-xl hover:bg-surface/50"
                  >
                    {link}
                  </a>
                ))}
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors px-3 py-2.5 rounded-xl hover:bg-surface/50 flex items-center gap-2"
                >
                  <User className="w-4 h-4" /> Account
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
