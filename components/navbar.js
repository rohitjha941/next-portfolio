import styles from '../css/navbar.module.scss';
import Link from 'next/link'
import { LinkedIn } from '../constants/links';


export default function Navbar() {
    return (
        <nav className={styles.nav} >
            <Link href='/' className={styles.name}>Rohit Jha</Link>
            <div className='grow flex flex-row-reverse items-center'>
                <Link className={styles.link} target='_blank' href={LinkedIn}>LinkedIn</Link>
                <Link className={styles.link} href=''>Experience</Link>
                <Link className={styles.link} href=''>Tech Stack </Link>
                <Link className={styles.link} href=''>Contact </Link>
                <Link className={styles.link} href=''>About </Link>
                <Link className={styles.link} href=''>Home </Link>
            </div>
        </nav>
    )
}
