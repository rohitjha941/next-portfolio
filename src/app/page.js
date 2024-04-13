import styles from '../styles/pages/home.module.scss';
import Image from 'next/image';

import Rohit from '@/static/self/rohit.png';

function Home() {
    return (
        <div className={styles.home}>
            <div className={styles.home_name}>
                Hi 👋, <br />
                My name is <br />
                <div className={styles.name}>Rohit Jha</div>
                I develop scalable web applications
            </div>

            <Image src={Rohit} alt="Rohit" className={styles.self_image} />
        </div>

    );
}

export default Home;