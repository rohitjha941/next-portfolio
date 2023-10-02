import styles from '../css/header.module.scss';

export default function Header({ children }) {
    return (
        <div className={styles.wrapper}>
            {children}
        </div>
    )
}
