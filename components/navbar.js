import styles from '../css/navbar.module.scss';
import Link from 'next/link'
import { LinkedIn, Resume } from '../constants/links';


export default function Navbar() {
    return (
        <nav className={styles.nav} >
            <Link href='/' className={styles.name}>Rohit Jha</Link>
            <div className='grow flex flex-row-reverse items-center'>
                <a className={styles.link} href={Resume}>Download CV</a>
                <a className={styles.link} href={LinkedIn}>LinkedIn</a>
                <Link className={styles.link} href=''>Experience</Link>
                <Link className={styles.link} href=''> Tech Stack </Link>
                <Link className={styles.link} href=''> Contact </Link>
                <Link className={styles.link} href='/about'> About </Link>
                <Link className={styles.link} href='/'> Home </Link>
            </div>
        </nav>
    )
}
