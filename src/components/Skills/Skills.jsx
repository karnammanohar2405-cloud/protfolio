import { motion } from 'framer-motion';
import { Braces, Cpu, Database, Figma, GitBranch, Gauge, Globe2, Server } from 'lucide-react';
import './Skills.css';

const skills = [
  [Braces, 'React', 94],
  [Cpu, 'JavaScript', 92],
  [Gauge, 'GSAP Motion', 88],
  [Server, 'Node APIs', 84],
  [Database, 'Databases', 80],
  [Figma, 'UI Systems', 86],
  [GitBranch, 'Git Workflow', 90],
  [Globe2, 'Deployment', 82],
];

function Skills() {
  return (
    <section className="section skills" id="skills">
      <div className="section-inner">
        <div className="skills-head" data-reveal>
          <p className="section-eyebrow">Skills</p>
          <h2 className="section-title">Technical fluency with visual restraint.</h2>
        </div>
        <div className="skills-grid">
          {skills.map(([Icon, title, level], index) => (
            <motion.article
              className="skill-card glass"
              key={title}
              data-reveal
              whileHover={{ y: -8, scale: 1.015 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            >
              <div className="skill-icon">
                <Icon size={24} />
              </div>
              <h3>{title}</h3>
              <div className="skill-meter" aria-label={`${title} ${level} percent`}>
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: level / 100 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
              <strong>{level}%</strong>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
