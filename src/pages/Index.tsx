import { motion } from "framer-motion";
import Navbar from "@/components/wedding/Navbar";
import HeroSection from "@/components/wedding/HeroSection";
import DetailsSection from "@/components/wedding/DetailsSection";
import RSVPSection from "@/components/wedding/RSVPSection";
import Footer from "@/components/wedding/Footer";

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="min-h-screen bg-background"
    >
      <Navbar />
      <HeroSection />
      <DetailsSection />
      <div id="rsvp">
        <RSVPSection />
      </div>
      <Footer />
    </motion.div>
  );
};

export default Index;
