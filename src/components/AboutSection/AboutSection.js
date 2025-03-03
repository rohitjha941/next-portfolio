import styles from './AboutSection.module.scss';
import Heading from '../ui/Heading';
import Subheading from '../ui/Subheading';

function AboutSection() {
    return (
        <div className={styles.about_section}>
            <div className={styles.about_container}>
                <Heading>About Me</Heading>
                <p className={styles.about_content}>
                    I&apos;m a developer who&apos;s really wants to learn new things. I&apos;ve got experience building backend applications and cloud systems. I can picking up new skills in no time and always want to be part of cool, innovative projects.
                </p>
            </div>

            <div className={styles.skills_container}>
                <div className={styles.skills_wrapper}>
                    <div className={styles.skills_column}>
                        <div className={styles.skills_category}>
                            <Subheading>Languages</Subheading>
                            <p className={styles.skills_list}>Python, Go</p>
                        </div>
                        
                        <div className={styles.skills_category}>
                            <Subheading>BackEnd</Subheading>
                            <p className={styles.skills_list}>Django, Django Rest, Golang</p>
                        </div>
                    </div>
                    
                    <div className={styles.skills_column}>
                        <div className={styles.skills_category}>
                            <Subheading>DevOps</Subheading>
                            <p className={styles.skills_list}>Infrastructure as a Code, Terraform, GitLab - CI, AWS, Kubernetes</p>
                        </div>
                        
                        <div className={styles.skills_category}>
                            <Subheading>Databases</Subheading>
                            <p className={styles.skills_list}>MySQL, Postgresql, Dynamodb</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutSection; 