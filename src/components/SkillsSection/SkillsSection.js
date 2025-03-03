import styles from './SkillsSection.module.scss';
import Heading from '../ui/Heading';

function SkillsSection() {
    const skills = {
        devops: {
            title: 'DevOps',
            items: [
                'AWS', 'GCP', 'Docker', 'CI/CD', 'Git',
                'Infrastructure as Code', 'Terraform', 'Kubernetes',
                'ECS', 'Nginx', 'Prometheus', 'Thanos', 'Grafana'
            ]
        },
        backend: {
            title: 'Backend',
            items: [
                'Golang', 'Python', 'Django', 'SQL',
                'Micro Service Architecture', 'Event-Based Architecture',
                'REST APIs', 'GraphQL'
            ]
        },
        tools: {
            title: 'Tools & Technologies',
            items: [
                'GitHub Actions', 'Helm Charts', 'PostgreSQL',
                'OpenSearch', 'Redis', 'Elasticache',
                'Fluentd', 'GitLab', 'SQS', 'Lambda'
            ]
        }
    };

    return (
        <section className={styles.skills_section} id="skills">
            <div className={styles.skills_cont}>
            <Heading>Skills</Heading>
            <div className={styles.skills_container}>
                {Object.values(skills).map((category, index) => (
                    <div key={index} className={styles.skill_category}>
                        <h3 className={styles.category_title}>{category.title}</h3>
                        <div className={styles.skills_grid}>
                            {category.items.map((skill, skillIndex) => (
                                <div key={skillIndex} className={styles.skill_item}>
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            </div>
        </section>
    );
}

export default SkillsSection; 