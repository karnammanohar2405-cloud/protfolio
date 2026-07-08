import { motion } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';
import './Hero.css';

const videoSrc = '/src/assets/my portfolio.mp4';

function Hero() {
  return (
    <section className="hero" aria-label="Portfolio hero">
      <div className="hero-media" aria-hidden="true">
        <video className="hero-video" src={videoSrc} autoPlay muted loop playsInline preload="metadata" />
        <div className="hero-overlay" />
      </div>
      <div className="hero-content">
        <motion.p
          className="hero-eyebrow"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          Designing immersive digital systems
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 42 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.9, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          Premium interfaces with cinematic motion and engineered clarity.
        </motion.h2>
        <motion.a
          className="button hero-cta"
          href="#projects"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.18 }}
        >
          View Work <ArrowDownRight size={18} />
        </motion.a>
      </div>
    </section>
  );
}

export default Hero;
