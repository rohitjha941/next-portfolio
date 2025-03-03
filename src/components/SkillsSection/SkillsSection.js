'use client';

import styles from './SkillsSection.module.scss';
import Heading from '../ui/Heading';
import { motion } from 'framer-motion';

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

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <section className={`${styles.skills_section} section`} id="skills">
            <div className={styles.skills_container}>
                <Heading>Skills</Heading>
                <motion.div 
                    className={styles.skills_grid}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {Object.values(skills).map((category, index) => (
                        <motion.div 
                            key={index} 
                            className={styles.skill_category}
                            variants={itemVariants}
                        >
                            <h3 className={styles.category_title}>{category.title}</h3>
                            <div className={styles.skills_list}>
                                {category.items.map((skill, skillIndex) => (
                                    <motion.div 
                                        key={skillIndex} 
                                        className={styles.skill_item}
                                        variants={itemVariants}
                                    >
                                        {skill}
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

export default SkillsSection; 