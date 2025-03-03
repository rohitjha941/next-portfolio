'use client';

import styles from './Footer.module.scss';
import { LinkedIn, Email, GitHub } from '@/constants';
import Link from 'next/link';
import { IconEnvelope, IconLinkedin, IconGithub } from '@/components/icons';

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
                        <IconEnvelope aria-hidden="true" />
                    </Link>
                    <Link 
                        href={LinkedIn}
                        className={styles.social_icon}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit my LinkedIn profile"
                    >
                        <IconLinkedin aria-hidden="true" />
                    </Link>
                    <Link 
                        href={GitHub}
                        className={styles.social_icon}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit my GitHub profile"
                    >
                        <IconGithub aria-hidden="true" />
                    </Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer; 