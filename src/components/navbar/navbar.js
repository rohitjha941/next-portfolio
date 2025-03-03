import Link from "next/link";
import styles from './header.module.scss';

import { LinkedIn, Email, GitHub } from '@/constants';
import { UilEnvelope, UilLinkedin, UilGithub } from '@iconscout/react-unicons';

function Navbar() {
  return (
    <header className={styles.nav}>
      <nav>
        <Link
          href="/"
          className={styles.nav_brand}
          aria-label="Home"
        >
          Rohit Jha
        </Link>
        
        <div className={styles.nav_array}>
          <Link
            href="/about"
            className={styles.nav_items}
          >
            About
          </Link>

          <div className={styles.nav_items}>
            <Link 
              className={styles.nav_icons} 
              href={`mailto:${Email}`}
              aria-label="Email me"
            >
              <UilEnvelope size="27.5" aria-hidden="true" />
            </Link>
            <Link 
              className={styles.nav_icons} 
              href={LinkedIn}
              aria-label="Visit my LinkedIn profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <UilLinkedin size="27.5" aria-hidden="true" />
            </Link>
            <Link 
              className={styles.nav_icons} 
              href={GitHub}
              aria-label="Visit my GitHub profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <UilGithub size="27.5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;