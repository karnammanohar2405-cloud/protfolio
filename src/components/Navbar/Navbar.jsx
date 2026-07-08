import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import './Navbar.css';

const links = ['About', 'Projects', 'Skills', 'Experience', 'Contact'];

function Navbar() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className="nav" aria-label="Primary navigation">
      <a className="nav-logo" href="#main-content" onClick={close}>
        Karnam Manohar
      </a>
      <nav className={`nav-links ${open ? 'is-open' : ''}`}>
        {links.map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`} onClick={close}>
            {link}
          </a>
        ))}
      </nav>
      <button className="nav-menu" type="button" aria-label="Toggle navigation" onClick={() => setOpen((value) => !value)}>
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>
    </header>
  );
}

export default Navbar;
