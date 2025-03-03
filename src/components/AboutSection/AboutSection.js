import styles from './AboutSection.module.scss';
import Heading from '../ui/Heading';

function AboutSection() {
    return (
        <div className={styles.about_section} id="about">
            <Heading>About Me</Heading>
            <div className={styles.about_container}>
                <p className={styles.about_content}>
                    I&apos;m a developer who&apos;s really wants to learn new things. I&apos;ve got experience building backend applications and cloud systems. I can picking up new skills in no time and always want to be part of cool, innovative projects.
                </p>
            </div>
        </div>
    );
}

export default AboutSection; 