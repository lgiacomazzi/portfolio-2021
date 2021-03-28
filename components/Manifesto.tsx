import styles from "../styles/components/Manifesto.module.css";
import CodeSnippet from "../components/CodeSnippet";

export default function Manifesto() {
  return (
    <div className={styles.manifesto}>
      <CodeSnippet>
        <h1 className={styles.manifestoText}>
          Apaixonado por design e programação. Crio identidades visuais e
          experiências digitais. Atualmente sou UX Designer na Voltbras em
          Florianópolis.
        </h1>
      </CodeSnippet>
    </div>
  );
}
