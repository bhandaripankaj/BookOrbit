import { BookOpen } from "lucide-react";

const Footer = () => {
  const columns = [
    {
      title: "Explore",
      links: ["Browse Books", "Categories", "New Releases", "Bestsellers"],
    },
    {
      title: "Authors",
      links: ["Publish a Book", "Author Dashboard", "Resources", "Pricing"],
    },
    {
      title: "Company",
      links: ["About Us", "Blog", "Careers", "Contact"],
    },
  ];

  return (
    <footer className="border-t border-border/20 bg-card/30">
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-xl bg-primary/15 flex items-center justify-center">
                <BookOpen className="w-4 h-4 text-primary" />
              </div>
              <span className="font-display text-lg font-bold text-foreground tracking-tight">
                Libro<span className="text-primary">.</span>
              </span>
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed font-body">
              A curated marketplace for books from independent authors worldwide.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-display font-semibold text-foreground mb-5 text-xs uppercase tracking-[0.2em]">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 font-body"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-6 border-t border-border/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground font-body">
            © 2026 Libro. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Cookies"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-300 font-body"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
