'use client';

import Link from "next/link";
import styles from './navbar.module.scss';
import { LinkedIn, Email, GitHub } from '@/constants';
import { IconEnvelope, IconLinkedin, IconGithub } from '@/components/icons';

function Navbar() {
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={styles.nav}>
      <div className={styles.nav_container}>
        <Link
          href="/"
          className={styles.nav_brand}
          aria-label="Home"
        >
          Rohit Jha
        </Link>
        
        <div className={styles.nav_array}>
          <a
            href="#about"
            className={styles.nav_items}
            onClick={(e) => scrollToSection(e, 'about')}
          >
            About
          </a>

          <div className={styles.nav_items}>
            <Link 
              className={styles.nav_icons} 
              href={`mailto:${Email}`}
              aria-label="Email me"
            >
              <IconEnvelope size={27.5} aria-hidden="true" />
            </Link>
            <Link 
              className={styles.nav_icons} 
              href={LinkedIn}
              aria-label="Visit my LinkedIn profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconLinkedin size={27.5} aria-hidden="true" />
            </Link>
            <Link 
              className={styles.nav_icons} 
              href={GitHub}
              aria-label="Visit my GitHub profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconGithub size={27.5} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;