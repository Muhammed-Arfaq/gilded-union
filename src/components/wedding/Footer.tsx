import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Footer = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <footer ref={ref} className="py-20 md:py-28 px-6 border-t border-border/40">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="block w-12 h-px bg-gold/30" />
            <span className="block w-1.5 h-1.5 bg-gold/40 rotate-45" />
            <span className="block w-12 h-px bg-gold/30" />
          </div>

          <p className="font-sans text-xs tracking-[0.3em] uppercase text-warm-gray mb-6">
            With love & blessings from
          </p>

          <h3 className="font-serif text-2xl md:text-3xl font-light text-foreground mb-2">
            The Vellakat & Aanthoorayil Families
          </h3>

          <p className="font-sans text-sm text-warm-gray mt-6 leading-relaxed">
            For any queries, please reach out to us at
          </p>
          <motion.a
            href="mailto:wedding@family.com"
            whileHover={{ scale: 1.02 }}
            className="inline-block font-sans text-sm text-foreground mt-1 border-b border-gold/30 pb-0.5
                       hover:border-gold/60 transition-colors duration-300"
          >
            wedding@family.com
          </motion.a>

          <div className="mt-16 pt-8 border-t border-border/30">
            <p className="font-sans text-xs text-warm-gray/60 tracking-wider">
              Ansar & Adeeba · August 20, 2025
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
