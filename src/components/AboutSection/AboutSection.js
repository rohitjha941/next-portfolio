'use client';

import styles from './AboutSection.module.scss';
import Heading from '../ui/Heading';
import { motion } from 'framer-motion';

function AboutSection() {
    return (
        <section className={`${styles.about_section} section`} id="about">
            <div className={styles.about_container}>
                <Heading>About Me</Heading>
                <motion.div 
                    className={styles.about_content}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.9 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        I&apos;m a Software Developer with expertise in DevOps and Backend Engineering, currently working at ThriveMarket as a Software Engineer.
                    </motion.p>
                    
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.9 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        My experience spans across cloud infrastructure management, container orchestration, and building high-performance backend services.
                        I specialize in AWS infrastructure, Kubernetes, and implementing infrastructure as code using Terraform.
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
}

export default AboutSection; 