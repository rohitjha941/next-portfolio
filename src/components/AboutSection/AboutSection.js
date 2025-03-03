import styles from './AboutSection.module.scss';
import Heading from '../ui/Heading';

function AboutSection() {
    return (
        <div className={styles.about_section} id="about">
            <Heading>About Me</Heading>
            <div className={styles.about_container}>
                <div className={styles.about_content}>
                    <p>
                        I&apos;m a Software Developer with expertise in DevOps and Backend Engineering.
                    </p>
                    
                    <p>
                        Currently working as a Software Engineer at ThriveMarket, I specialize in cloud infrastructure 
                        and distributed systems. My experience spans across AWS infrastructure management, 
                        Kubernetes orchestration, and building high-performance backend services.
                    </p>

                    <p>
                        I have been implementing infrastructure as code using Terraform and optimizing 
                        application performance.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutSection; 