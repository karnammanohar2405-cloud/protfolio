import { lazy, Suspense } from 'react';
import Intro from './components/Intro/Intro.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import Footer from './components/Footer/Footer.jsx';
import { useLenis } from './hooks/useLenis.js';
import { useIntroTransition } from './animations/useIntroTransition.js';

const About = lazy(() => import('./components/About/About.jsx'));
const Skills = lazy(() => import('./components/Skills/Skills.jsx'));
const Projects = lazy(() => import('./components/Projects/Projects.jsx'));
const Experience = lazy(() => import('./components/Experience/Experience.jsx'));
const Contact = lazy(() => import('./components/Contact/Contact.jsx'));

function App() {
  useLenis();
  useIntroTransition();

  return (
    <>
      <Navbar />
      <Intro />
      <main id="main-content">
        <Hero />
        <Suspense fallback={<div className="section-loader" aria-label="Loading portfolio sections" />}>
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

export default App;
