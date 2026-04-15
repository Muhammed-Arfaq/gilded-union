import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const RSVPSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [response, setResponse] = useState<"attending" | "not-attending" | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleResponse = (type: "attending" | "not-attending") => {
    setResponse(type);
    // Here you could send to a backend/webhook
    setTimeout(() => setSubmitted(true), 400);
  };

  return (
    <section className="py-24 md:py-36 px-6 bg-secondary/30">
      <div ref={ref} className="max-w-2xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="font-sans text-xs tracking-[0.35em] uppercase text-warm-gray mb-4"
        >
          Kindly Respond
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-serif text-4xl md:text-5xl font-light text-foreground mb-4"
        >
          Will You Join Us?
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="w-16 h-px bg-gold/40 mx-auto mb-8"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="font-sans text-sm text-warm-gray mb-14 leading-relaxed"
        >
          We would be honored by your presence. Please let us know if you can attend.
        </motion.p>

        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.div
              key="buttons"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
            >
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => handleResponse("attending")}
                disabled={response !== null}
                className="w-full sm:w-auto px-12 py-4 bg-foreground text-background font-sans text-xs tracking-[0.25em] uppercase
                           hover:bg-charcoal transition-all duration-500 relative overflow-hidden group disabled:opacity-50"
              >
                <span className="relative z-10">Yes, I'll Attend</span>
                <motion.div
                  className="absolute inset-0 bg-gold/20"
                  initial={{ y: "100%" }}
                  whileHover={{ y: "0%" }}
                  transition={{ duration: 0.4 }}
                />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => handleResponse("not-attending")}
                disabled={response !== null}
                className="w-full sm:w-auto px-12 py-4 border border-foreground/20 text-foreground font-sans text-xs tracking-[0.25em] uppercase
                           hover:border-foreground/40 transition-all duration-500 disabled:opacity-50"
              >
                Sorry, Can't Attend
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              key="confirmation"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="py-10"
            >
              {/* Success checkmark */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5, type: "spring", stiffness: 200 }}
                className="w-16 h-16 mx-auto mb-6 rounded-full border border-gold/40 flex items-center justify-center"
              >
                <motion.svg
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="w-6 h-6 text-gold"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </motion.svg>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="font-serif text-2xl text-foreground mb-2"
              >
                {response === "attending" ? "We look forward to seeing you!" : "You will be missed."}
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="font-sans text-sm text-warm-gray"
              >
                {response === "attending"
                  ? "Your response has been recorded. Thank you!"
                  : "Thank you for letting us know. We understand."}
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default RSVPSection;
