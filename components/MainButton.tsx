import styles from "../styles/components/MainButton.module.css";
import CodeSnippet from "../components/CodeSnippet";

export default function MainButton({ children }) {
  return (
    <div className={styles.mainButtonContainer}>
      <CodeSnippet>
        <button className={styles.mainButton + " button"}>{children}</button>
      </CodeSnippet>
    </div>
  );
}
