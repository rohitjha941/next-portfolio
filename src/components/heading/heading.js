import styles from "./heading.module.scss";

function Heading(props) {
  return <div className={styles.heading}>{props.children}</div>;
}
export default Heading;