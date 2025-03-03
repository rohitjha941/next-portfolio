import styles from './HeroSection.module.scss';
import { UilGithub, UilLinkedin, UilEnvelope } from '@iconscout/react-unicons';

function HeroSection() {
    return (
        <section className={styles.hero} id="home">
            <div className={styles.hero_content}>
                <h1 className={styles.name}>Rohit Jha</h1>
                <h2 className={styles.title}>Software Developer</h2>
                <p className={styles.subtitle}>DevOps & Backend Engineering Specialist</p>
                
                <div className={styles.contact_info}>
                    <a href="tel:+917587369029" className={styles.contact_item}>
                        <span>+91 75873 69029</span>
                    </a>
                    <a href="mailto:me@rjha.dev" className={styles.contact_item}>
                        <span>me@rjha.dev</span>
                    </a>
                </div>

                <div className={styles.social_links}>
                    <a href="https://github.com/rohitjha941" target="_blank" rel="noopener noreferrer" className={styles.social_link}>
                        <UilGithub />
                    </a>
                    <a href="https://linkedin.com/in/rohitjha941" target="_blank" rel="noopener noreferrer" className={styles.social_link}>
                        <UilLinkedin />
                    </a>
                    <a href="mailto:me@rjha.dev" className={styles.social_link}>
                        <UilEnvelope />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default HeroSection; 