import { BriefcaseBusiness } from 'lucide-react';
import './Experience.css';

const entries = [
  ['Frontend Developer', 'React, GSAP, responsive systems, component architecture, and polished user interfaces.'],
  ['Full Stack Builder', 'API integration, database-backed flows, authentication patterns, and deployment workflows.'],
  ['Creative Technologist', 'Motion direction, cinematic presentation, performance budgets, and interaction prototyping.'],
];

function Experience() {
  return (
    <section className="section experience" id="experience">
      <div className="section-inner experience-inner">
        <div data-reveal>
          <p className="section-eyebrow">Experience</p>
          <h2 className="section-title">Practical engineering with an eye for atmosphere.</h2>
        </div>
        <div className="experience-timeline">
          {entries.map(([role, copy], index) => (
            <article className="experience-item" key={role} data-reveal>
              <div className="experience-index">
                <BriefcaseBusiness size={20} />
                <span>{String(index + 1).padStart(2, '0')}</span>
              </div>
              <div className="experience-content glass">
                <h3>{role}</h3>
                <p>{copy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
