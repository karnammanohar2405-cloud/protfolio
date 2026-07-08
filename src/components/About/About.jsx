import { motion } from 'framer-motion';
import { Award, Code2, Layers, Sparkles } from 'lucide-react';
import './About.css';

const stats = [
  ['30+', 'Interface builds'],
  ['12+', 'Full stack projects'],
  ['4', 'Core domains'],
];

const timeline = [
  ['2026', 'Building high-polish portfolio experiences with React, motion systems, and performance-first architecture.'],
  ['2025', 'Shipped applied web products across automation, dashboards, and real-time interaction layers.'],
  ['2024', 'Deepened full-stack foundations through JavaScript, APIs, databases, and product thinking.'],
];

function About() {
  return (
    <section className="section about" id="about">
      <div className="section-inner about-grid">
        <div data-reveal>
          <p className="section-eyebrow">About</p>
          <h2 className="section-title">A developer shaping refined digital presence.</h2>
          <p className="section-copy">
            I build polished web experiences that balance engineering discipline with strong visual direction. My work focuses on
            React interfaces, interaction design, clean systems, and performance that still feels expressive.
          </p>
          <div className="about-stats">
            {stats.map(([value, label]) => (
              <motion.div className="about-stat glass" key={label} whileHover={{ y: -6 }} transition={{ type: 'spring', stiffness: 260 }}>
                <strong>{value}</strong>
                <span>{label}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="about-visual" data-reveal>
          <div className="about-photo" aria-label="Professional photograph placeholder">
            <div className="about-photo-mark">KM</div>
          </div>
          <motion.div className="about-float about-float-one glass" animate={{ y: [0, -12, 0] }} transition={{ duration: 5, repeat: Infinity }}>
            <Sparkles size={19} />
            Premium Motion
          </motion.div>
          <motion.div className="about-float about-float-two glass" animate={{ y: [0, 10, 0] }} transition={{ duration: 5.8, repeat: Infinity }}>
            <Layers size={19} />
            System Design
          </motion.div>
        </div>

        <div className="about-cards" data-reveal>
          {[
            [Code2, 'Frontend Engineering', 'Reusable React components, animation timelines, and responsive UI systems.'],
            [Award, 'Product Polish', 'Careful spacing, typography, interaction states, and memorable presentation.'],
          ].map(([Icon, title, copy]) => (
            <article className="about-card glass" key={title}>
              <Icon size={22} />
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>

        <ol className="about-timeline" data-reveal>
          {timeline.map(([year, copy]) => (
            <li key={year}>
              <time>{year}</time>
              <p>{copy}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default About;
