import styles from './Header.module.scss';
import Link from 'next/link';
import { UilGithub, UilLinkedin, UilEnvelope } from '@iconscout/react-unicons';

function Header() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navbar_content}>
                <div className={styles.nav_section}>
                    <Link href="#about" className={styles.nav_link}>About</Link>
                    <Link href="#skills" className={styles.nav_link}>Skills</Link>
                    <Link href="#experience" className={styles.nav_link}>Experience</Link>
                    <Link href="#projects" className={styles.nav_link}>Projects</Link>
                </div>
                <div className={styles.social_section}>
                    <a href="https://github.com/rohitjha941" target="_blank" rel="noopener noreferrer" className={styles.social_link}>
                        <UilGithub size="20" />
                    </a>
                    <a href="https://linkedin.com/in/rohitjha941" target="_blank" rel="noopener noreferrer" className={styles.social_link}>
                        <UilLinkedin size="20" />
                    </a>
                    <a href="mailto:me@rjha.dev" className={styles.social_link}>
                        <UilEnvelope size="20" />
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Header; 