'use client';

import styles from './Footer.module.scss';
import { UilEnvelope, UilLinkedin, UilGithub } from '@iconscout/react-unicons';
import { LinkedIn, Email, GitHub } from '@/constants';
import Link from 'next/link';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.footer_content}>
                <div className={styles.copyright}>
                    © {currentYear} Rohit Jha. All rights reserved.
                </div>
                <div className={styles.social_links}>
                    <Link 
                        href={`mailto:${Email}`}
                        className={styles.social_icon}
                        aria-label="Email me"
                    >
                        <UilEnvelope size="20" aria-hidden="true" />
                    </Link>
                    <Link 
                        href={LinkedIn}
                        className={styles.social_icon}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit my LinkedIn profile"
                    >
                        <UilLinkedin size="20" aria-hidden="true" />
                    </Link>
                    <Link 
                        href={GitHub}
                        className={styles.social_icon}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit my GitHub profile"
                    >
                        <UilGithub size="20" aria-hidden="true" />
                    </Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer; 