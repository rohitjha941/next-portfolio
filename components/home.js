import styles from '../css/home.module.scss';
import Rohit from "../assests/rohit.png"
import Image from 'next/image'
import Link from 'next/link'

import { Resume } from "../constants/links"

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
                <Link href={Resume} className={styles.resume} target='_blank'> View Resume</Link>
            </div>

            <div className={styles.container}>
                <Image src={Rohit} className={styles.image} />
            </div>
        </div>
    )
}
