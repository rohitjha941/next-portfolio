import styles from '../css/subtitle.module.scss';

export default function Subtitle({ children }) {
    return (
        <div className={styles.wrapper}>
            {children}
        </div>
    )
}
