import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import './Projects.css';

const projects = [
  {
    title: 'Smart Blood Donor Network',
    type: 'Healthcare Platform',
    copy: 'A responsive donor discovery system with urgency-aware UX, profile flows, and location-led matching.',
    stack: ['React', 'Node', 'MongoDB'],
  },
  {
    title: 'Meditrack AI',
    type: 'Personal Brand',
    copy: 'A premimum fast working web to analize the stocks of medicines available in the state.',
    stack: ['streamlit', 'API tokens', 'AI tools'],
  },
  {
    title: 'cafe aurum',
    type: 'Restaurant Website',
    copy: 'A smooth and premimum cafe website heavily focused on user experience and styles.',
    stack: ['framer motions', 'react', 'javascript'],
  },
];

function Projects() {
  return (
    <section className="section projects" id="projects">
      <div className="section-inner">
        <div className="projects-head" data-reveal>
          <p className="section-eyebrow">Projects</p>
          <h2 className="section-title">Selected work built for presence and utility.</h2>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <motion.article className="project-card glass" key={project.title} data-reveal whileHover={{ y: -10 }}>
              <div className="project-preview">
                <span>{String(index + 1).padStart(2, '0')}</span>
              </div>
              <div className="project-body">
                <p>{project.type}</p>
                <h3>{project.title}</h3>
                <span>{project.copy}</span>
                <div className="project-stack">
                  {project.stack.map((tech) => (
                    <em key={tech}>{tech}</em>
                  ))}
                </div>
                <div className="project-actions">
                  <a className="button" href="#contact" aria-label={`${project.title} live demo`}>
                    <ExternalLink size={17} /> Live Demo
                  </a>
                  <a className="button" href="https://github.com/karnammanohar2405-cloud" target="_blank" rel="noreferrer" aria-label={`${project.title} GitHub`}>
                    <Github size={17} /> GitHub
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
