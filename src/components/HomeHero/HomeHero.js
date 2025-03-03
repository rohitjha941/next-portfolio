import styles from './HomeHero.module.scss';
import Image from 'next/image';
import Rohit from '@/static/self/rohit.webp';

function HomeHero() {
    return (
        <section className={`${styles.home} section`}>
            <div className={styles.home_container}>
                <div className={styles.home_content}>
                    <h1 className={styles.home_name}>
                        Hi <span role="img" aria-label="waving hand">👋</span>, <br />
                        My name is <br />
                        <span className={styles.name}>Rohit Jha</span>
                    </h1>
                    <p className={styles.tagline}>
                        DevOps & Backend Engineer crafting scalable solutions
                    </p>
                </div>

                <Image 
                    src={Rohit} 
                    alt="Rohit Jha - Full Stack Developer" 
                    className={styles.self_image}
                    priority
                    width={400}
                    height={400}
                />
            </div>
        </section>
    );
}

export default HomeHero; 