import styles from './AboutSection.module.scss';

function AboutSection() {
    return (
        <div className={styles.about_section}>
            <div className={styles.about_content}>
                <h2 className={styles.skills_title}>About Me</h2>
                <p>
                    I&apos;m a developer who&apos;s really wants to learn new things. I&apos;ve got experience building backend applications and cloud systems. I can picking up new skills in no time and always want to be part of cool, innovative projects.
                </p>
            </div>

            <div className={styles.about_skills}>
                <div className={styles.skills_category}>
                    <h3 className={styles.skills_title}>Languages</h3>
                    <p className={styles.skills_list}>Python, Go</p>
                </div>

                <div className={styles.skills_category}>
                    <h3 className={styles.skills_title}>BackEnd</h3>
                    <p className={styles.skills_list}>Django, Django Rest, Golang</p>
                </div>

                <div className={styles.skills_category}>
                    <h3 className={styles.skills_title}>DevOps</h3>
                    <p className={styles.skills_list}>Infrastructure as a Code, Terraform, GitLab - CI, AWS, Kubernetes</p>
                </div>

                <div className={styles.skills_category}>
                    <h3 className={styles.skills_title}>Databases</h3>
                    <p className={styles.skills_list}>MySQL, Postgresql, Dynamodb</p>
                </div>
            </div>
        </div>
    );
}

export default AboutSection; 