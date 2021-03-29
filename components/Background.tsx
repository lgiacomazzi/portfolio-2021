import styles from "../styles/components/Background.module.css";

export default function Background({ children }) {
  return <div className={styles.background}>{children}</div>;
}
