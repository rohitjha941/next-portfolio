import styles from './AboutSection.module.scss';
import Heading from '../ui/Heading';

function AboutSection() {
    return (
        <section className={`${styles.about_section} section`} id="about">
            <div className={styles.about_container}>
                <Heading>About Me</Heading>
                <div className={styles.about_content}>
                    <p>
                        I&apos;m a Software Developer with expertise in DevOps and Backend Engineering, currently working at Bttn as a Software Engineer.
                    </p>
                    
                    <p>
                        My experience spans across cloud infrastructure management, container orchestration, and building high-performance backend services.
                        I specialize in AWS infrastructure, Kubernetes, and implementing infrastructure as code using Terraform.
                    </p>

                    <p>
                        At Bttn, I&apos;ve led the migration of AWS infrastructure to Terraform and implemented a CDC pipeline for real-time data replication.
                        Previously at True Sparrow, I architected multi-cluster monitoring systems and built authentication services in Golang.
                    </p>

                    <p>
                        I&apos;m passionate about building scalable systems, optimizing performance, and mentoring other developers.
                        My expertise includes microservices architecture, event-driven systems, and implementing robust CI/CD pipelines.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default AboutSection; 