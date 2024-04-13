
import Link from "next/link";
import styles from './header.module.scss';

import { LinkedIn, Email, GitHub } from '@/constants';
import { UilEnvelope, UilLinkedin, UilGithub } from '@iconscout/react-unicons';

function Navbar() {
  return (
    <div className={styles.nav}>
      <span className="nav_brand">
        <Link
          href="/"
          className={styles.nav_brand}
        >
          Rohit Jha
        </Link>
      </span>
      <span className={styles.nav_array}>
        <Link
          href="/about"
          className={styles.nav_items}
        >
          About
        </Link>

        <span className={styles.nav_items}>
          <Link className={styles.nav_icons} href={`mailto:${Email}`}><UilEnvelope size="27.5" color="#A7A7A7" /></Link>
          <Link className={styles.nav_icons} href={LinkedIn}><UilLinkedin size="27.5" color="#A7A7A7" /></Link>
          <Link className={styles.nav_icons} href={GitHub}><UilGithub size="27.5" color="#A7A7A7" /></Link>
        </span>
      </span>
    </ div >
  );
}

export default Navbar;