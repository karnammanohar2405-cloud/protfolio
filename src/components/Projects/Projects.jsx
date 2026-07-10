import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import "./Projects.css";

const projects = [
  {
    title: "Smart Blood Donor Network",
    type: "Healthcare Platform",
    copy:
      "A responsive donor discovery system with urgency-aware UX, profile flows, and location-based donor matching.",
    stack: ["React", "Node.js", "MongoDB","huggingface"],

    // Replace with your URLs
    liveDemo: "https://huggingface.co/spaces/pranithgoud/blooddonarrr",
    github:
      "https://github.com/karnammanohar2405-cloud/smart-blood-donor-network.git",
  },

  {
    title: "Meditrack AI",
    type: "Healthcare AI Platform",
    copy:
      "An AI-powered medicine stock monitoring platform that predicts shortages and visualizes medicine availability across the state.",
    stack: ["Streamlit", "Python", "AI", "SQLite"],

    // Replace with your URLs
    liveDemo: "https://meditrack-ai-ie69.onrender.com",
    github:
      "https://github.com/karnammanohar2405-cloud/meditrack-ai.git",
  },

  {
    title: "Cafe Aurum",
    type: "Restaurant Website",
    copy:
      "A premium restaurant website with cinematic animations, modern UI, and a smooth user experience.",
    stack: ["React", "Framer Motion", "JavaScript"],

    // Replace with your URLs
    liveDemo: "https://cafe-aurum.vercel.app",
    github:
      "https://github.com/karnammanohar2405-cloud/cafe-aurum.git",
  },
];

function Projects() {
  return (
    <section className="section projects" id="projects">
      <div className="section-inner">

        <div className="projects-head" data-reveal>
          <p className="section-eyebrow">Projects</p>

          <h2 className="section-title">
            Selected work built for presence and utility.
          </h2>
        </div>

        <div className="project-grid">

          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className="project-card glass"
              data-reveal
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >

              <div className="project-preview">
                <span>{String(index + 1).padStart(2, "0")}</span>
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

                  <a
                    className="button"
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} Live Demo`}
                  >
                    <ExternalLink size={17} />
                    Live Demo
                  </a>

                  <a
                    className="button"
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} GitHub Repository`}
                  >
                    <Github size={17} />
                    GitHub
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