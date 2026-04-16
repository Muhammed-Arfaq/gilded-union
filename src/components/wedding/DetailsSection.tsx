import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const FadeUp = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  );
};

const Divider = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ scaleX: 0 }}
      animate={inView ? { scaleX: 1 } : {}}
      transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="w-16 h-px bg-gold/40 mx-auto my-8"
    />
  );
};

const DetailCard = ({
  title,
  time,
  venue,
  address,
  delay,
}: {
  title: string;
  time: string;
  venue: string;
  address: string;
  delay: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.97 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.9, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -4, transition: { duration: 0.3 } }}
      className="text-center p-8 md:p-12 border border-border/60 bg-background/50 backdrop-blur-sm
                 hover:border-gold/30 transition-colors duration-500 group"
    >
      <p className="font-sans text-xs tracking-[0.3em] uppercase text-warm-gray mb-4">
        {title}
      </p>
      <h3 className="font-serif text-2xl md:text-3xl font-light text-foreground mb-6">
        {time}
      </h3>
      <div className="w-8 h-px bg-gold/30 mx-auto mb-6 group-hover:w-12 transition-all duration-500" />
      <p className="font-serif text-lg text-foreground mb-2">{venue}</p>
      <p className="font-sans text-sm text-warm-gray leading-relaxed">{address}</p>
    </motion.div>
  );
};

const DetailsSection = () => {
  return (
    <section id="details" className="py-24 md:py-36 px-6">
      <div className="max-w-4xl mx-auto">
        <FadeUp>
          <p className="text-center font-sans text-xs tracking-[0.35em] uppercase text-warm-gray mb-4">
            The Celebration
          </p>
        </FadeUp>
        <FadeUp delay={0.15}>
          <h2 className="text-center font-serif text-4xl md:text-5xl font-light text-foreground mb-2">
            Wedding Details
          </h2>
        </FadeUp>

        <Divider />

        <FadeUp delay={0.3}>
          <p className="text-center font-sans text-sm text-warm-gray max-w-lg mx-auto mb-16 leading-relaxed">
            We joyfully invite you to celebrate the beginning of our new journey together. 
            Your presence would be the greatest blessing.
          </p>
        </FadeUp>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <DetailCard
            title="The Ceremony"
            time="11:00 AM — 1:00 PM"
            venue="Al Ameen Auditorium"
            address="Ponnani, Malappuram, Kerala"
            delay={0.2}
          />
          <DetailCard
            title="The Reception"
            time="7:00 PM — 11:00 PM"
            venue="Al Ameen Auditorium"
            address="Ponnani, Malappuram, Kerala"
            delay={0.35}
          />
        </div>

        <FadeUp delay={0.5}>
          <div className="text-center mt-12">
            <motion.a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 font-sans text-xs tracking-[0.2em] uppercase text-warm-gray
                         hover:text-foreground transition-colors duration-300 border-b border-gold/30 pb-1
                         hover:border-gold/60"
            >
              View on Map
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </motion.a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

export default DetailsSection;
