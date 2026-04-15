import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

const Navbar = () => {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 60);
  });

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 3, duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div
        className={`backdrop-blur-md border-b transition-all duration-500 ${
          scrolled ? "bg-background/90 border-gold/15" : "bg-transparent border-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            whileHover={{ scale: 1.02 }}
            className="font-serif text-lg font-light text-foreground tracking-wider"
          >
            A & M
          </motion.button>

          <div className="hidden sm:flex items-center gap-8">
            {[
              { label: "Details", id: "details" },
              { label: "RSVP", id: "rsvp" },
            ].map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                whileHover={{ y: -1 }}
                className="font-sans text-xs tracking-[0.2em] uppercase text-warm-gray hover:text-foreground transition-colors duration-300"
              >
                {item.label}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
