import styles from './SkillsSection.module.scss';
import Heading from '../ui/Heading';

function SkillsSection() {
    return (
        <div className={styles.skills_section}>
            <Heading>Skills</Heading>
            <div className={styles.skills_container}>
                <div className={styles.skills_wrapper}>
                    <div className={styles.skills_category}>
                        <span className={styles.category_label}>Languages:</span>
                        <span className={styles.skills_list}>Python, Go</span>
                    </div>
                    
                    <div className={styles.skills_category}>
                        <span className={styles.category_label}>BackEnd:</span>
                        <span className={styles.skills_list}>Django, Django Rest, Flask, FastAPI, Golang</span>
                    </div>
                    
                    <div className={styles.skills_category}>
                        <span className={styles.category_label}>DevOps:</span>
                        <span className={styles.skills_list}>Infrastructure as a Code, Terraform, GitLab - CI, AWS, Kubernetes</span>
                    </div>
                    
                    <div className={styles.skills_category}>
                        <span className={styles.category_label}>Databases:</span>
                        <span className={styles.skills_list}>MySQL, Postgresql, Dynamodb</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SkillsSection; 