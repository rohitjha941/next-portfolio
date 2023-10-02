import styles from '../css/home.module.scss';
import Rohit from "../assests/rohit.png"
import Image from 'next/image'
import Resume from "../constants/links"

export default function Home() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.text}>
                Hi 👋, <br />
                My name is <br />
                <div className={styles.name}>Rohit Jha</div>
                I develop scalable web applications

                <br />
                <br />
                <a href={Resume} className={styles.resume}> View Resume</a>
            </div>

            <div className={styles.container}>
                <Image src={Rohit} className={styles.image} />
            </div>
        </div>
    )
}
