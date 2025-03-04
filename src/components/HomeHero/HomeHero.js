'use client';

import styles from './HomeHero.module.scss';
import Image from 'next/image';
import Rohit from '@/static/self/rohit.webp';
import { motion } from 'framer-motion';

function HomeHero() {
    return (
        <section className={`${styles.home} section`}>
            <div className={styles.home_container}>
                <motion.div 
                    className={styles.home_content}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className={styles.home_name}>
                        Hi <span role="img" aria-label="waving hand">👋</span>, <br />
                        My name is <br />
                        <span className={styles.name}>Rohit Jha</span>
                    </h1>
                    <motion.p 
                        className={styles.tagline}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.95 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    >
                        DevOps & Backend Engineer crafting scalable solutions
                    </motion.p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    <Image 
                        src={Rohit} 
                        alt="Rohit Jha - Full Stack Developer" 
                        className={styles.self_image}
                        priority
                        width={400}
                        height={400}
                    />
                </motion.div>
            </div>
        </section>
    );
}

export default HomeHero; 