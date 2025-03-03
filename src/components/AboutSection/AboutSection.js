import styles from './AboutSection.module.scss';
import Heading from '../ui/Heading';

function AboutSection() {
    return (
        <div className={styles.about_section} id="about">
            <Heading>About Me</Heading>
            <div className={styles.about_container}>
                <div className={styles.about_content}>
                    <p>
                        I&apos;m a Software Developer with expertise in DevOps and Backend Engineering, currently working at ThriveMarket as a Software Engineer.
                    </p>
                    
                    <p>
                        My experience spans across cloud infrastructure management, container orchestration, and building high-performance backend services.
                        I specialize in AWS infrastructure, Kubernetes, and implementing infrastructure as code using Terraform.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutSection; 