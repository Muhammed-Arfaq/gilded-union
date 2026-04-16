import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const letterVariants = {
  hidden: { y: 80, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: 1.2 + i * 0.04,
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  }),
};

const AnimatedText = ({ text, className }: { text: string; className?: string }) => (
  <span className={className}>
    {text.split("").map((char, i) => (
      <motion.span
        key={i}
        custom={i}
        variants={letterVariants}
        initial="hidden"
        animate="visible"
        className="inline-block"
        style={{ display: char === " " ? "inline" : "inline-block" }}
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ))}
  </span>
);

const FloatingElement = ({ delay, className }: { delay: number; className: string }) => (
  <motion.div
    className={`absolute rounded-full bg-gold/10 ${className}`}
    animate={{
      y: [-10, 10, -10],
      x: [-5, 5, -5],
      opacity: [0.3, 0.6, 0.3],
    }}
    transition={{
      duration: 8,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.6], [0, -80]);
  const scale = useTransform(scrollYProgress, [0, 0.6], [1, 0.95]);

  const scrollToDetails = () => {
    document.getElementById("details")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Floating decorative elements */}
      <FloatingElement delay={0} className="w-32 h-32 top-[15%] left-[10%]" />
      <FloatingElement delay={2} className="w-20 h-20 top-[60%] right-[15%]" />
      <FloatingElement delay={4} className="w-16 h-16 bottom-[20%] left-[20%]" />
      <FloatingElement delay={1} className="w-24 h-24 top-[30%] right-[8%]" />

      {/* Subtle gold shimmer line */}
      <motion.div
        className="absolute top-0 left-0 w-full h-px"
        style={{
          background: "linear-gradient(90deg, transparent, hsl(40 60% 50% / 0.4), transparent)",
          backgroundSize: "200% 100%",
        }}
        animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />

      <motion.div style={{ opacity, y, scale }} className="text-center px-6 z-10">
        {/* Ornamental divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <span className="block w-16 md:w-24 h-px bg-gold/40" />
          <motion.span
            initial={{ rotate: 0, scale: 0 }}
            animate={{ rotate: 45, scale: 1 }}
            transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
            className="block w-2 h-2 bg-gold/60"
          />
          <span className="block w-16 md:w-24 h-px bg-gold/40" />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-warm-gray font-sans text-xs md:text-sm tracking-[0.35em] uppercase mb-6"
        >
          Together with their families
        </motion.p>

        {/* Names */}
        <div className="overflow-hidden mb-2">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-foreground tracking-wide">
            <AnimatedText text="Ansar" />
          </h1>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.8, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex items-center justify-center gap-4 my-4"
        >
          <span className="block w-10 md:w-16 h-px bg-gold/30" />
          <span className="font-serif text-gold text-2xl md:text-3xl italic font-light">&</span>
          <span className="block w-10 md:w-16 h-px bg-gold/30" />
        </motion.div>

        <div className="overflow-hidden mb-8">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-foreground tracking-wide">
            <AnimatedText text="Adeeba" />
          </h1>
        </div>

        {/* Date */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.8 }}
        >
          <p className="font-sans text-xs md:text-sm tracking-[0.3em] uppercase text-warm-gray mb-2">
            Request the pleasure of your company
          </p>
          <p className="font-serif text-xl md:text-2xl text-foreground mt-4 font-light tracking-wider">
            August 20, 2025
          </p>
        </motion.div>

        {/* CTA */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.8, duration: 0.8 }}
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          onClick={scrollToDetails}
          className="mt-12 px-10 py-3.5 border border-gold/40 text-foreground font-sans text-xs tracking-[0.25em] uppercase 
                     hover:bg-gold/10 hover:border-gold/60 transition-all duration-500 relative overflow-hidden group"
        >
          <span className="relative z-10">View Invitation</span>
          <motion.div
            className="absolute inset-0 bg-gold/5"
            initial={{ x: "-100%" }}
            whileHover={{ x: "0%" }}
            transition={{ duration: 0.4 }}
          />
        </motion.button>
      </motion.div>

      {/* Bottom scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-gold/40 to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
