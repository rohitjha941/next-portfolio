import styles from './Subheading.module.scss';

function Subheading({ children }) {
    return (
        <h3 className={styles.subheading}>
            {children}
        </h3>
    );
}

export default Subheading; 