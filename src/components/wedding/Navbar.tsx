import { motion, useScroll, useTransform } from "framer-motion";

const Navbar = () => {
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 100], [0, 0.9]);
  const borderOpacity = useTransform(scrollY, [0, 100], [0, 0.15]);

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
      <motion.div
        style={{
          backgroundColor: `hsla(40, 33%, 97%, ${bgOpacity.get()})`,
          borderBottomColor: `hsla(40, 60%, 50%, ${borderOpacity.get()})`,
        }}
        className="backdrop-blur-md border-b transition-all duration-300"
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
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
